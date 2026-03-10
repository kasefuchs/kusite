import type { ComponentChildren } from "preact";
import type { WindowManagerStore } from "@/stores";

export interface Props {
  children: ComponentChildren;

  manager: WindowManagerStore;
}
