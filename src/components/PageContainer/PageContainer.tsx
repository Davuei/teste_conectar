/*  STYLES  */

import styles from './PageContaier.module.css';

type PageContaierProps = {
  children: React.ReactNode
}

/*
  Componenete que retorna uma div que serve de container para a página
*/

export function PageContainer({ children }: PageContaierProps) {
  return (
    <div className={ styles.pageContainerDiv }>
      { children }
    </div>
  )
}