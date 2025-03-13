import type { ComponentChildren } from "preact";
import type { To } from "react-router";

export interface NavigationRailProps {
  children?: ComponentChildren;
}

export interface NavigationItemProps {
  active?: boolean;
  children?: ComponentChildren;
}

export interface NavigationLinkProps {
  to: To;
  children: ComponentChildren;
}
