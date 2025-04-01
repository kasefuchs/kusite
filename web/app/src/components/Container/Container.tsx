import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import * as styles from "./Container.module.scss";
import type { Props } from "./types";

export default class Container extends Component<Props> {
  public override render(props: Props): ComponentChildren {
    const className = classNames(styles.container, props.className);

    return <div {...props} className={className} />;
  }
}
