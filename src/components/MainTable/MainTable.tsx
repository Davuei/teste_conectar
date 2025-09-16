/*  STYLES  */

import styles from './MainTable.module.css';

export function MainTable() {
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
        <tr>
          <td>Teste 1</td>
          <td>Teste 1</td>
          <td>Teste 1</td>
        </tr>

        <tr>
          <td>Teste 2</td>
          <td>Teste 2</td>
          <td>Teste 2</td>
        </tr>

        <tr>
          <td>Teste 3</td>
          <td>Teste 3</td>
          <td>Teste 3</td>
        </tr>
      </tbody>
    </table>
  )
}