import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import { NavLink, type NavLinkRenderProps } from "react-router";
import * as styles from "./NavigationLink.module.scss";
import type { Props } from "./types";

export default class NavigationLink extends Component<Props> {
  private static getClassNames(props: NavLinkRenderProps): string {
    return classNames(styles.link, props.isActive ? styles.active : undefined);
  }

  public override render(): ComponentChildren {
    return <NavLink {...this.props} className={NavigationLink.getClassNames} />;
  }
}
