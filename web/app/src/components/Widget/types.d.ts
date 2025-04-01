import { ContainerProps } from "#components/Container";
import type { ComponentChildren } from "preact";

export interface Props {
  title: ComponentChildren;
  children?: ComponentChildren;
  containerProps?: Omit<ContainerProps, "children">;
}
