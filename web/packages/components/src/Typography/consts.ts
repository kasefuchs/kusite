import type { JSX } from 'preact/jsx-runtime'
import * as styles from './Typography.module.scss'
import type { Variant } from './types'

export const variantMapping: Record<Variant, string> = {
  h1: styles.typographyH1,
  h2: styles.typographyH2,
  h3: styles.typographyH3,
  h4: styles.typographyH4,
  h5: styles.typographyH5,
  h6: styles.typographyH6,
  body1: styles.typographyBody1,
  body2: styles.typographyBody2,
  subtitle1: styles.typographySubtitle1,
  subtitle2: styles.typographySubtitle2,
}

export const elementMapping: Record<Variant, JSX.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
}
