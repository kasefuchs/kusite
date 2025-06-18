import type { ComponentChildren } from 'preact'
import type { Props } from './types.ts'
import { Markdown, Widget, WidgetContent, WidgetHeader } from '@kusite/components'

export default function MarkdownWidget({ label, action, children, ...rest }: Props): ComponentChildren {
  return (
    <Widget {...rest}>
      <WidgetHeader label={label} action={action} />
      <WidgetContent>
        <Markdown children={children} />
      </WidgetContent>
    </Widget>
  )
}
