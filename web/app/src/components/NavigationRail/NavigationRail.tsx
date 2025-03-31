import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import style from "./NavigationRail.module.scss";
import type { Props } from "./types";

export default class extends Component<Props> {
  public override render(props: Props): ComponentChildren {
    const className = classNames(style["navigationRail"], props.className);

    return <div {...props} className={className} />;
  }
}
