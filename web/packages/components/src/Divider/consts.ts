import * as styles from './Divider.module.scss'
import type { Orientation, Variant } from './types'

export const orientationMapping: Record<Orientation, string> = {
  horizontal: styles.dividerOrientationHorizontal,
  vertical: styles.dividerOrientationVertical,
}

export const variantMapping: Record<Variant, string> = {
  full: styles.dividerVariantFull,
  middle: styles.dividerVariantMiddle,
}
