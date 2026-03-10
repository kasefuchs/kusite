import type { ComponentChildren } from "preact";
import type { WindowInstanceStore } from "@/stores";

export interface Props {
  children: ComponentChildren;

  instance: WindowInstanceStore;
}
