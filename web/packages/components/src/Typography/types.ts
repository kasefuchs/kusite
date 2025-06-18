import type { JSX } from 'preact'

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'subtitle1' | 'subtitle2'

export type Props = JSX.HTMLAttributes & {
  element?: JSX.ElementType
  variant?: Variant
  marginBottom?: boolean
  [key: string]: any
}
