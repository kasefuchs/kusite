import classNames from "classnames";
import { Component, type ComponentChildren } from "preact";
import { NavLink, type NavLinkRenderProps } from "react-router";
import style from "./NavigationLink.module.scss";
import type { Props } from "./types";

export default class extends Component<Props> {
  private getClassNames(props: NavLinkRenderProps): string {
    return classNames(
      style["navigationLink"],
      props.isActive ? style["navigationLinkActive"] : undefined,
    );
  }

  public override render(props: Props): ComponentChildren {
    return <NavLink {...props} className={this.getClassNames} />;
  }
}
