import type { JSX } from 'preact'

export type Variant = 'full' | 'middle'

export type Orientation = 'horizontal' | 'vertical'

export type Props = JSX.HTMLAttributes & {
  element?: JSX.ElementType
  variant?: Variant
  orientation?: Orientation
  [key: string]: any;
}
