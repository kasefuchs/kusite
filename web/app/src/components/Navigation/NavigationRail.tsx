import { Component, type ComponentChildren } from "preact";
import type { NavigationRailProps } from "./types";
import style from "./Navigation.module.scss";
import classNames from "classnames";

export default class NavigationRail extends Component<NavigationRailProps> {
  public override render(props: NavigationRailProps): ComponentChildren {
    const className = classNames(style["navigationRail"], props.className);

    return <div {...props} className={className} />;
  }
}
