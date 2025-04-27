import * as styles from "#components/Container/Container.module.scss";
import type { Props } from "#components/Container/types";
import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";

export default class Container extends Component<Props> {
  public override render(): ComponentChildren {
    const className = classNames(styles.container, this.props.className);

    return <div {...this.props} className={className} />;
  }
}
