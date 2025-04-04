import type { JSX } from "preact";

export type Props = Omit<JSX.HTMLAttributes<Element>, "children"> & {
  children: string;
};
