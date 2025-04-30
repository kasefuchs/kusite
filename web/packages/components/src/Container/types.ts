import type { JSX } from "preact";

export type Props = JSX.HTMLAttributes & {
  element?: JSX.ElementType;
};
