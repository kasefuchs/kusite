import type { WidgetProps } from "@kusite/components";
import { ComponentChildren } from "preact";

export type Props = Omit<WidgetProps, "children"> & {
  title: ComponentChildren;
  action?: ComponentChildren;
  children: string;
};
