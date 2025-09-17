/*  STYLES  */

import styles from './RouterLink.module.css';

/*  COMPONENTS  */

import { Link } from 'react-router-dom';

type RouterLinkProps = {
  href: string,
  children: React.ReactNode
} & React.ComponentProps<'a'>;

export function RouterLink({ href, children, ...props }: RouterLinkProps) {
  return (
    <Link to={ href } className={ styles.routerLinkClass } {...props} >
      { children }
    </Link>
  )
}