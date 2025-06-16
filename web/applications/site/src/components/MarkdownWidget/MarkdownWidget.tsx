import type { ComponentChildren } from 'preact'
import type { Props } from './types.ts'
import { Markdown, Widget, WidgetContent, WidgetHeader } from '@kusite/components'

export default function MarkdownWidget({ title, action, children, ...rest }: Props): ComponentChildren {
  return (
    <Widget {...rest}>
      <WidgetHeader title={title} action={action} />
      <WidgetContent>
        <Markdown children={children} />
      </WidgetContent>
    </Widget>
  )
}
