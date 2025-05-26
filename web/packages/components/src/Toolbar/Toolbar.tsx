import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import * as styles from './Toolbar.module.scss'
import type { Props } from './types'

export default function Toolbar({ element: Element = 'div', className, ...rest }: Props): ComponentChildren {
  return <Element className={clsx(styles.toolbar, className)} {...rest} />
}
