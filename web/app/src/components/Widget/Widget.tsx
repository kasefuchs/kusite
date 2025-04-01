import Container from "#components/Container";
import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import type { Props } from "./types";
import * as styles from "./Widget.module.scss";

export default class Widget extends Component<Props> {
  public override render(props: Props): ComponentChildren {
    return (
      <div className={styles.widget}>
        <span className={styles.title} children={props.title} />
        <Container
          {...props.containerProps}
          className={classNames(
            styles.content,
            props.containerProps?.className,
          )}
          children={props.children}
        />
      </div>
    );
  }
}
