import type { ComponentChildren } from "preact";
import WindowManagerStore from "@/stores/WindowManagerStore.ts";

export interface Props {
  store: WindowManagerStore;
  children: ComponentChildren;
}
