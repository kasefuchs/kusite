import type { ComponentChildren } from "preact";

export interface WidgetProps {
  title: ComponentChildren;
  children?: ComponentChildren;
}
