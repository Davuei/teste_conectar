/*  STYLES  */

import styles from './PIBTable.module.css';

/*  COMPONENTS  */

import { useContext } from 'react';
import { ConverterParaDolar } from '../../utils/ConverterParaDolar';
import { PIBContext } from '../../context/PIBContext';

/*
  Componente que retorna a tabela com o PIB e o PIB per capita
*/

export function PIBTable() {
  // Context com os dados do PIB e do PIB per capita
  const {PIB, PIBPerCapita} = useContext(PIBContext);

  // Formata os dados do PIB e do PIB per capita para facilitar a iteração e exibição dos dados na tabela
  const formatedPIBAll = {
    ano: Object.keys(PIB),
    PIB: Object.values(PIB),
    PIBPerCapita: Object.values(PIBPerCapita)
  }
  
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
          formatedPIBAll.ano.map((ano, index) => {
            const pibReal = `${ formatedPIBAll.PIB[index] }`; // Guarda o valor do PIB em reais
            const pibPerCapitaReal = `${ formatedPIBAll.PIBPerCapita[index] }` // Guarda o valor do PIB per capita em reais

            const pibDolar = ConverterParaDolar(ano, pibReal); // Guarda o valor do PIB em dólares
            const pibPerCapitaDolar = ConverterParaDolar(ano, pibPerCapitaReal); // Guarda o valor do PIB per capita em dólares

            return (
              <tr key={ano}>
                <td aria-label={ `${ano}` }>{ `${ano}` }</td>
                <td aria-label={ `$ ${pibDolar}` }>{ `$ ${pibDolar}` }</td>
                <td aria-label={ `$ ${pibPerCapitaDolar}` }>{ `$ ${pibPerCapitaDolar}` }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}