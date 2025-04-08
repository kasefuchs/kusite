import type { LinkProps } from "wouter";

export type Props = Omit<LinkProps, "className", "href"> & {
  to: string;
};
