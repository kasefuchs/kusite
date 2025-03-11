import { Component, type ComponentChildren } from "preact";
import classNames from "classnames";
import type { NavigationItemProps } from "./types.d.ts";
import style from "./NavigationItem.module.scss";

export default class NavigationItem extends Component<NavigationItemProps> {
  public override render(props: NavigationItemProps): ComponentChildren {
    const className = classNames(
      style["item"],
      props.active ? style["active"] : undefined,
    );

    return <li className={className} children={props.children} />;
  }
}
