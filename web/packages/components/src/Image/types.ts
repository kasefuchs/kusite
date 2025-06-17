import type { JSX } from 'preact/jsx-runtime'

export type Props = JSX.HTMLAttributes & {
  element?: JSX.ElementType
  [key: string]: any;
}
