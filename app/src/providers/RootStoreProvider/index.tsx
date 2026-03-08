import RootStore from "@/stores/RootStore";
import RootStoreContext from "@/contexts/RootStoreContext.ts";
import { PersistentStore } from "@kusite/store";
import { useEffect, useRef, useState } from "preact/hooks";
import type { IReactionDisposer } from "mobx";
import type { ComponentChildren } from "preact";
import type { Props } from "./types";

export default function RootStoreProvider(props: Props): ComponentChildren {
  const [initialized, setInitialized] = useState(false);

  const storeRef = useRef(new RootStore());
  const persistenceRef = useRef(new PersistentStore(storeRef.current));

  useEffect(() => {
    let disposer: IReactionDisposer;
    persistenceRef.current.deserialize().finally(() => {
      disposer = persistenceRef.current.setup();
      setInitialized(true);
    });

    return () => disposer?.();
  }, []);

  return initialized && <RootStoreContext.Provider value={storeRef.current} {...props} />;
}

export type { Props as RootStoreProviderProps } from "./types";
