import Markdown from "#components/Markdown";
import type { Props } from "#components/MarkdownWidget/types";
import Widget from "#components/Widget";
import { Component, type ComponentChildren } from "preact";

export default class MarkdownWidget extends Component<Props> {
  public override render(): ComponentChildren {
    return (
      <Widget {...this.props}>
        <Markdown children={this.props.children} />
      </Widget>
    );
  }
}
