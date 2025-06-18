import { ComponentChildren } from 'preact'
import type { JSX } from 'preact/jsx-runtime'

export type Props = JSX.HTMLAttributes & {
  element?: JSX.ElementType
  label?: ComponentChildren
  action?: ComponentChildren
  [key: string]: any
}
