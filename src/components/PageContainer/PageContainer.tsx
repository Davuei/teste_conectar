/*  STYLES  */

import styles from './PageContaier.module.css';

type PageContaierProps = {
  children: React.ReactNode
}

export function PageContainer({ children }: PageContaierProps) {
  return (
    <div className={ styles.pageContainerDiv }>
      { children }
    </div>
  )
}