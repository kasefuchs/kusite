import type { WindowPosition, WindowSize } from "@/types";
import type { ComponentChildren } from "preact";
import type { Props } from "./types";
import WindowInstanceContext, { type WindowInstanceContextValue } from "@/contexts/WindowInstanceContext";
import { useWindowManager } from "@/contexts/WindowManagerContext";
import { useRef } from "preact/hooks";

export default function WindowInstanceProvider({ descriptor, children }: Props): ComponentChildren {
  const { store } = useWindowManager();
  const valueRef = useRef<WindowInstanceContextValue>({
    descriptor,
    close(): boolean {
      return store.closeWindow(descriptor.id);
    },
    focus(): number {
      return store.focusWindow(descriptor.id);
    },
    updatePosition(position: WindowPosition): void {
      return store.updateWindowPosition(descriptor.id, position);
    },
    updateSize(size: WindowSize): void {
      return store.updateWindowSize(descriptor.id, size);
    },
  });

  return <WindowInstanceContext.Provider value={valueRef.current} children={children} />;
}

export type { Props as WindowInstanceProviderProps } from "./types";
