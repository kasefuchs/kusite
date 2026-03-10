import type { ComponentChildren } from "preact";
import { observer } from "mobx-react";
import { useWindowManager } from "@/contexts";
import WindowInstance from "@/components/WindowInstance";
import { WindowInstanceProvider } from "@/providers";

function WindowManager(): ComponentChildren {
  const manager = useWindowManager();

  return manager.instances
    .entries()
    .map(([key, value]) => (
      <WindowInstanceProvider key={key} instance={value}>
        <WindowInstance />
      </WindowInstanceProvider>
    ))
    .toArray();
}

export default observer(WindowManager);
