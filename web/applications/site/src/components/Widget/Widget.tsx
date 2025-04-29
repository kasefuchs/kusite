import { Container, Typography } from "@kusite/components";
import { Component, type ComponentChildren } from "preact";
import type { Props } from "./types";
import * as styles from "./Widget.module.scss";

export default class Widget extends Component<Props> {
  public override render(): ComponentChildren {
    return (
      <div className={styles.widget}>
        <Typography element="h4" className={styles.title} children={this.props.title} />
        <Container className={styles.content} children={this.props.children} />
      </div>
    );
  }
}
