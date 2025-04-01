import Widget from "#components/Widget";
import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import Markdown from "react-markdown";
import * as styles from "./MarkdownWidget.module.scss";
import type { Props } from "./types";

export default class MarkdownWidget extends Component<Props> {
  public override render(props: Props): ComponentChildren {
    return (
      <Widget
        {...props}
        containerProps={{
          ...props.containerProps,
          className: classNames(
            styles.content,
            props.containerProps?.className,
          ),
        }}
      >
        <Markdown children={props.children} />
      </Widget>
    );
  }
}
