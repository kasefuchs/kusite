import type { Props } from "./types.ts";
import type { ComponentChildren } from "preact";
import { observer } from "mobx-react";
import { useWindowManager } from "@/contexts";
import WindowInstance from "@/components/WindowInstance";
import { WindowInstanceProvider } from "@/providers";

function WindowManager(_: Props): ComponentChildren {
  const { store } = useWindowManager();

  return Object.entries(store.descriptors).map(([key, value]) => {
    return (
      <WindowInstanceProvider key={key} descriptor={value}>
        <WindowInstance />
      </WindowInstanceProvider>
    );
  });
}

export default observer(WindowManager);

export type { Props as WindowManagerProps } from "./types.ts";
