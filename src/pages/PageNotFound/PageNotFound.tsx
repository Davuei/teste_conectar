/*  STYLES  */

import { PageContainer } from '../../components/PageContainer/PageContainer';
import { RouterLink } from '../../components/RouterLink/RouterLink';
import styles from './PageNotFound.module.css';

export function PageNotFound() {
  return (
    <PageContainer>
      <div className={ styles.divPageNotFound }>
        <div className={ styles.divImagem }>
          <img src='/eco.svg' alt='Logo de planta' />
        </div>

        <div className={ styles.divTexto }>
          <h1>ERRO 404 - Página não encontrada</h1>
          <h2>Não há nada para ver aqui!</h2>
          <RouterLink href='/grafico'>
            <p>{ `Ver gráficos com o PIB brasileiro ->` }</p>
          </RouterLink>

          <RouterLink href='/tabela'>
            <p>{ `Ver tabela com o PIB brasileiro ->` }</p>
          </RouterLink>
        </div>
      </div>
    </PageContainer>
  )
}