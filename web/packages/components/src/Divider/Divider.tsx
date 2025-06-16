import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import * as styles from './Divider.module.scss'
import type { Props } from './types'
import { orientationMapping, variantMapping } from './consts'

export default function Divider({
  element: Element = 'hr',
  orientation = 'horizontal',
  variant = 'full',
  className,
  ...rest
}: Props): ComponentChildren {
  return (
    <Element
      className={clsx(styles.divider, orientationMapping[orientation], variantMapping[variant], className)}
      {...rest}
    />
  )
}
