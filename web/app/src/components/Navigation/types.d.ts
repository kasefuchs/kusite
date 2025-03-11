import type { ComponentChildren } from "preact";

export interface NavigationRailProps {
  children?: ComponentChildren;
}

export interface NavigationItemProps {
  active?: boolean;
  children?: ComponentChildren;
}
