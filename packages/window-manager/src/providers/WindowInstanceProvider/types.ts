import type { ComponentChildren } from "preact";
import type { IWindowDescriptor } from "@/types";

export interface Props {
  children: ComponentChildren;
  descriptor: IWindowDescriptor;
}
