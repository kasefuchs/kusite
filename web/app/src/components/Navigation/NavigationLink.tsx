import { Component, type ComponentChildren } from "preact";
import type { NavigationLinkProps } from "./types";
import { NavLink, type NavLinkRenderProps } from "react-router";
import style from "./Navigation.module.scss";
import classNames from "classnames";

export default class NavigationLink extends Component<NavigationLinkProps> {
  private static classNames(props: NavLinkRenderProps): string {
    return classNames(
      style["navigationLink"],
      props.isActive ? style["navigationLinkActive"] : undefined,
    );
  }

  public override render(props: NavigationLinkProps): ComponentChildren {
    return <NavLink {...props} className={NavigationLink.classNames} />;
  }
}
