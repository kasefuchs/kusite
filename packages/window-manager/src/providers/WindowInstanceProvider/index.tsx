import type { ComponentChildren } from "preact";
import type { Props } from "./types";
import { WindowInstanceContext } from "@/contexts";

export default function WindowInstanceProvider({ instance, children }: Props): ComponentChildren {
  return <WindowInstanceContext.Provider value={instance} children={children} />;
}

export type { Props as WindowInstanceProviderProps } from "./types";
