import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import * as styles from "./HeaderIconButton.module.scss";
import type { Props } from "./types";

export default class HeaderIconButton extends Component<Props> {
  public override render(props: Props): ComponentChildren {
    const className = classNames(styles.button, props.className);

    return <button {...props} className={className} />;
  }
}
