import type { ComponentChildren } from "preact";
import type { Props } from "./types";
import { WindowManagerContext } from "@/contexts";

export default function WindowManagerProvider({ manager, children }: Props): ComponentChildren {
  return <WindowManagerContext.Provider value={manager} children={children} />;
}

export type { Props as WindowManagerProviderProps } from "./types";
