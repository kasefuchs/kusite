import type { ComponentChildren } from 'preact'
import type { WidgetProps } from '@kusite/components'

export type Props = Omit<WidgetProps, 'children'> & {
  title: ComponentChildren
  action?: ComponentChildren
  children: string
}
