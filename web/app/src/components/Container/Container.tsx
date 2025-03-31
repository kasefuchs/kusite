import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import style from "./Container.module.scss";
import type { Props } from "./types";

export default class extends Component<Props> {
  public override render(props: Props): ComponentChildren {
    const className = classNames(style["container"], props.className);

    return <div {...props} className={className} />;
  }
}
