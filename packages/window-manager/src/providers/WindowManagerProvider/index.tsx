import type { ComponentChildren } from "preact";
import type { Props } from "./types";
import WindowManagerContext, { WindowManagerContextValue } from "@/contexts/WindowManagerContext";

export default function WindowManagerProvider(props: Props): ComponentChildren {
  const value: WindowManagerContextValue = {
    store: props.store,
  };

  return <WindowManagerContext.Provider value={value} children={props.children} />;
}

export type { Props as WindowManagerProviderProps } from "./types";
