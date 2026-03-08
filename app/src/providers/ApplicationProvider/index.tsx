import RootStoreProvider from "@/providers/RootStoreProvider";
import type { ComponentChildren } from "preact";
import type { Props } from "./types";
import { WindowManagerProvider } from "@kusite/window-manager";
import RootStoreContext from "@/contexts/RootStoreContext";

export default function ApplicationProvider(props: Props): ComponentChildren {
  return (
    <RootStoreProvider>
      <RootStoreContext.Consumer>
        {(rootStore) => (
          <WindowManagerProvider store={rootStore!.windowManager}>{props.children}</WindowManagerProvider>
        )}
      </RootStoreContext.Consumer>
    </RootStoreProvider>
  );
}

export type { Props as ApplicationProviderProps } from "./types";
