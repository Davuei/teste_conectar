/*  STYLES  */

import styles from './PIBTable.module.css';

/*  COMPONENTS  */

import { useEffect, useState } from 'react';
import { fetchPIBTodo } from '../../services/tabelaServices';
import type { AnoPIBModel } from '../../models/AnoPIBModel';

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
          <th>Ano</th>
          <th>PIB (em dólares)</th>
          <th>PIB per capita (em dólares)</th>
        </tr>
      </thead>

      <tbody>
        {
          Object.entries(anoPIB).map(([ano, PIB], index) => {
            return(
              <tr key={ ano }>
                <td>{ ano }</td>
                <td>{ `${PIB}` }</td>
                <td>{ `${Object.values(pibPerCapita)[index]}` }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}