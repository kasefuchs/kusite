import type { NavLinkProps } from "react-router";
import type { HTMLProps } from "preact-compat";

export type NavigationRailProps = HTMLProps<HTMLDivElement>;

export type NavigationLinkProps = Omit<NavLinkProps, "className">;
