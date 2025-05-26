import type { TypographyProps } from '#/Typography'

export type Underline = 'always' | 'hover' | 'never'

export type Props = TypographyProps & {
  underline?: Underline
}
