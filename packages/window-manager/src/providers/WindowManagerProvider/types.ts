import type { ComponentChildren } from "preact";
import WindowManagerStore from "@/stores/WindowManagerStore";

export interface Props {
  store: WindowManagerStore;
  children: ComponentChildren;
}
