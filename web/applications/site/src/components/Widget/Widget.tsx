import Container from "#components/Container";
import type { Props } from "#components/Widget/types";
import * as styles from "#components/Widget/Widget.module.scss";
import { Component, type ComponentChildren } from "preact";

export default class Widget extends Component<Props> {
  public override render(): ComponentChildren {
    return (
      <div className={styles.widget}>
        <span className={styles.title} children={this.props.title} />
        <Container className={styles.content} children={this.props.children} />
      </div>
    );
  }
}
