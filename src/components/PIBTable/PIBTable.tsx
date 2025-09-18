/*  STYLES  */

import styles from './PIBTable.module.css';

/*  COMPONENTS  */

import { useEffect, useState } from 'react';
import { fetchPIBTodo } from '../../services/PIBServices';
import type { AnoPIBModel } from '../../models/AnoPIBModel';
import { ConverterParaDolar } from '../../utils/ConverterParaDolar';

/*
  Componente que retorna a tabela com o PIB e o PIB per capita
*/

export function PIBTable() {
  // State que armazena o objeto retornado pela API
  const [anoPIB, setAnoPIB] = useState<AnoPIBModel[]>([]);
  const [pibPerCapita, setPibPerCapita] = useState<AnoPIBModel[]>([]);

  // useEffect que faz a requisição dos dados à API quando o componente é renderizado
  useEffect(() => {
    async function getPIBTodo() {
      const pibTodo = await fetchPIBTodo();

      setAnoPIB(pibTodo[0].resultados[0].series[0].serie);
      setPibPerCapita(pibTodo[1].resultados[0].series[0].serie);
    }
    getPIBTodo();
  }, []);

  return (
    <table className={ styles.mainTable }>
      <thead>
        <tr>
          <th aria-label='Ano'>Ano</th>
          <th aria-label='PIB em milhões de dólares'>PIB (em milhões de dólares)</th>
          <th aria-label='PIB per capita em dólares'>PIB per capita (em dólares)</th>
        </tr>
      </thead>

      <tbody>
        {
          Object.entries(anoPIB).map(([ano, PIB], index) => {
            const pibReal = `${PIB}`;
            const pibPerCapitaReal = Object.values(pibPerCapita)[index];

            const pibDolar = ConverterParaDolar(ano, pibReal);
            const pibPerCapitaDolar = ConverterParaDolar(ano, `${pibPerCapitaReal}`)
            
            return(
              <tr key={ ano }>
                <td aria-label={ ano }>{ ano }</td>
                <td aria-label={ `$ ${ pibDolar }` }>{ `$ ${ pibDolar }` }</td>
                <td aria-label={ `$ ${ pibPerCapitaDolar }` }>{ `$ ${ pibPerCapitaDolar }` }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}