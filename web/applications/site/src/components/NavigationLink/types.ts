import type { LinkProps } from "wouter";

export type Props = Omit<LinkProps, "className"> & {
  to: string;
  href?: never;
  asChild?: true;
  children: string;
};
