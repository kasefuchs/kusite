import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import * as styles from './Typography.module.scss'
import { elementMapping, variantMapping } from './consts'
import type { Props } from './types'

export default function Typography({
  element,
  variant = 'body1',
  marginBottom = false,
  className,
  ...rest
}: Props): ComponentChildren {
  const Element = element ?? elementMapping[variant]

  return (
    <Element
      className={clsx(
        styles.typography,
        variantMapping[variant],
        marginBottom && styles.typographyMarginBottom,
        className,
      )}
      {...rest}
    />
  )
}
