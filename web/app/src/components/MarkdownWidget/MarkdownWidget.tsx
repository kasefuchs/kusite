import Markdown from "#components/Markdown";
import Widget from "#components/Widget";
import { Component, type ComponentChildren } from "preact";
import type { Props } from "./types";

export default class MarkdownWidget extends Component<Props> {
  public override render(): ComponentChildren {
    return (
      <Widget {...this.props}>
        <Markdown children={this.props.children} />
      </Widget>
    );
  }
}
