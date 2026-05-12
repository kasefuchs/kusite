import RootStore from "@/stores/RootStore";
import RootStoreContext from "@/contexts/RootStoreContext";
import { useRef } from "preact/hooks";
import type { ComponentChild, ComponentChildren } from "preact";

export interface RootStoreProviderProps {
  children: ComponentChildren;
}

export default function RootStoreProvider({ children }: RootStoreProviderProps): ComponentChild {
  const storeRef = useRef<RootStore>();
  if (!storeRef.current) {
    storeRef.current = new RootStore();
  }

  return <RootStoreContext.Provider value={storeRef.current} children={children} />;
}
