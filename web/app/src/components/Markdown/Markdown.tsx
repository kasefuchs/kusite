import classNames from "classnames";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Component, type ComponentChildren } from "preact";
import * as styles from "./Markdown.module.scss";
import type { Props } from "./types";

export default class Markdown extends Component<Props> {
  private static readonly options: MarkdownToJSX.Options = {
    overrides: {
      h1: { props: { className: styles.heading } },
      h2: { props: { className: styles.heading } },
      h3: { props: { className: styles.heading } },
      p: { props: { className: styles.paragraph } },
    },
  };

  public override render(): ComponentChildren {
    const className = classNames(styles.markdown, this.props.className);

    return <ReactMarkdown {...this.props} options={Markdown.options} className={className} />;
  }
}
