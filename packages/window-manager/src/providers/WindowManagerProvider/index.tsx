import type { ComponentChildren } from "preact";
import type { Props } from "./types";
import WindowManagerContext, { WindowManagerContextValue } from "@/contexts/WindowManagerContext";
import { useRef } from "preact/hooks";

export default function WindowManagerProvider(props: Props): ComponentChildren {
  const valueRef = useRef<WindowManagerContextValue>({
    store: props.store,
  });

  return <WindowManagerContext.Provider value={valueRef.current} children={props.children} />;
}

export type { Props as WindowManagerProviderProps } from "./types";
