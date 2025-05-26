import { Markdown, Widget, WidgetContent, WidgetHeader } from '@kusite/components'
import { Component, type ComponentChildren } from 'preact'
import type { Props } from './types'

export default class MarkdownWidget extends Component<Props> {
  public override render(): ComponentChildren {
    return (
      <Widget>
        <WidgetHeader title={this.props.title} action={this.props.action} />
        <WidgetContent>
          <Markdown children={this.props.children} />
        </WidgetContent>
      </Widget>
    )
  }
}
