import { Component, type ComponentChildren } from "preact";
import type { NavigationLinkProps } from "./types.d.ts";
import { NavLink, NavLinkRenderProps } from "react-router";
import NavigationItem from "./NavigationItem.tsx";

export default class NavigationLink extends Component<NavigationLinkProps> {
  public override render(props: NavigationLinkProps): ComponentChildren {
    return (
      <NavLink to={props.to}>
        {(linkProps: NavLinkRenderProps) => (
          <NavigationItem
            active={linkProps.isActive}
            children={props.children}
          />
        )}
      </NavLink>
    );
  }
}
