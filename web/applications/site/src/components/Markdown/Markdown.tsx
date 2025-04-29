import { Typography } from "@kusite/components";
import clsx from "clsx";
import ReactMarkdown, { MarkdownToJSX } from "markdown-to-jsx";
import { Component, type ComponentChildren } from "preact";
import * as styles from "./Markdown.module.scss";
import type { Props } from "./types";

export default class Markdown extends Component<Props> {
  private static readonly options: MarkdownToJSX.Options = {
    overrides: {
      h1: { component: Typography, props: { element: "h1", paragraph: true } },
      h2: { component: Typography, props: { element: "h2", paragraph: true } },
      h3: { component: Typography, props: { element: "h3", paragraph: true } },
      h4: { component: Typography, props: { element: "h4", paragraph: true } },
      h5: { component: Typography, props: { element: "h5", paragraph: true } },
      h6: { component: Typography, props: { element: "h6", paragraph: true } },
      span: { component: Typography, props: { element: "span" } },
      p: { component: Typography, props: { element: "p", paragraph: true } },
    },
  };

  public override render(): ComponentChildren {
    const className = clsx(styles.markdown, this.props.className);

    return <ReactMarkdown {...this.props} options={Markdown.options} className={className} />;
  }
}
