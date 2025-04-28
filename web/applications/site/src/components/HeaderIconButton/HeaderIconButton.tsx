import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import * as styles from "./HeaderIconButton.module.scss";
import type { Props } from "./types";

export default class HeaderIconButton extends Component<Props> {
  public override render(): ComponentChildren {
    const className = classNames(styles.button, this.props.className);

    return <button {...this.props} className={className} />;
  }
}
