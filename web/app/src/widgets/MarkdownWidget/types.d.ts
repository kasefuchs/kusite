import type { WidgetProps } from "#components/Widget";

export type Props = Omit<WidgetProps, "children"> & {
  children?: string;
};
