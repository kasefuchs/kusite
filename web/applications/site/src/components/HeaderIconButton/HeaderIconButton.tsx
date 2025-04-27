import * as styles from "#components/HeaderIconButton/HeaderIconButton.module.scss";
import type { Props } from "#components/HeaderIconButton/types";
import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";

export default class HeaderIconButton extends Component<Props> {
  public override render(): ComponentChildren {
    const className = classNames(styles.button, this.props.className);

    return <button {...this.props} className={className} />;
  }
}
