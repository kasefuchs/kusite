import * as styles from './Link.module.scss'
import type { Underline } from './types'

export const underlineMapping: Record<Underline, string> = {
  always: styles.linkUnderlineAlways,
  hover: styles.linkUnderlineHover,
  never: styles.linkUnderlineNever,
}
