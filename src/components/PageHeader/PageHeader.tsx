/*  STYLES  */

import styles from './PageHeader.module.css';

/*  COMPONENTS  */

import { RouterLink } from '../RouterLink/RouterLink';

type PageHeaderProps = {
  textH1: string,
  textLink: React.ReactNode,
  href: string,
  textP: string
}

export function PageHeader({ textH1, textLink, href, textP }: PageHeaderProps) {
  return (
    <header className={ styles.pageHeader }>
      <h1>{ textH1 }</h1>
      <RouterLink href={ href }>
        <h2>{ textLink }</h2>
      </RouterLink>
      <p>{ textP }</p>
    </header>
  )
}