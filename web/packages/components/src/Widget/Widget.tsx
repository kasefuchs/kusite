import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import type { Props } from './types'
import * as styles from './Widget.module.scss'

export default function Widget({ element: Element = 'div', className, ...rest }: Props): ComponentChildren {
  return <Element className={clsx(styles.widget, className)} {...rest} />
}
