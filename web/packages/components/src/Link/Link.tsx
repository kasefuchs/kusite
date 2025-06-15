import Typography from '@/Typography'
import clsx from 'clsx'
import type { ComponentChildren } from 'preact'
import { underlineMapping } from './consts'
import * as styles from './Link.module.scss'
import type { Props } from './types'

export default function Link({ className, element = 'a', underline = 'hover', ...rest }: Props): ComponentChildren {
  return (
    <Typography element={element} className={clsx(styles.link, underlineMapping[underline], className)} {...rest} />
  )
}
