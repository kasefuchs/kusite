import type { ComponentChild, ComponentChildren } from "preact";
import type { IReactionDisposer } from "mobx";
import { useRef, useState, useEffect } from "preact/hooks";
import { useRootStore } from "@/contexts/RootStoreContext";
import { PersistentStore } from "@kusite/store";

export interface InitializerProps {
  children: ComponentChildren;
}

export default function Initializer({ children }: InitializerProps): ComponentChild {
  const [ready, setReady] = useState(false);
  const rootStore = useRootStore();
  const persistenceRef = useRef<PersistentStore>();

  useEffect(() => {
    let cancelled = false;
    let disposer: IReactionDisposer | undefined;

    const init = async () => {
      try {
        persistenceRef.current = new PersistentStore(rootStore);
        await persistenceRef.current.deserialize();
        disposer = persistenceRef.current.setup();
      } catch (e) {
        console.error("init failed", e);
      } finally {
        if (!cancelled) setReady(true);
      }
    };

    init();
    return () => {
      cancelled = true;
      disposer?.();
    };
  }, [rootStore]);

  return ready && children;
}
