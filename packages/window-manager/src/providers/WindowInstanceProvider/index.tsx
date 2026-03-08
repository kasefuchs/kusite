import type { ComponentChildren } from "preact";
import type { Props } from "./types";
import WindowInstanceContext, { type WindowInstanceContextValue } from "@/contexts/WindowInstanceContext";
import { useWindowManager } from "@/contexts/WindowManagerContext";

export default function WindowInstanceProvider({ descriptor, children }: Props): ComponentChildren {
  const { store } = useWindowManager();
  const value: WindowInstanceContextValue = {
    descriptor,
    close(): boolean {
      return store.closeWindow(descriptor.id);
    },
    focus(): number {
      return store.focusWindow(descriptor.id);
    },
    updatePosition(x: number, y: number) {
      return store.updateWindowPosition(descriptor.id, x, y);
    },
    updateSize(width: number, height: number) {
      return store.updateWindowSize(descriptor.id, width, height);
    },
  };

  return <WindowInstanceContext.Provider value={value} children={children} />;
}

export type { Props as WindowInstanceProviderProps } from "./types";
