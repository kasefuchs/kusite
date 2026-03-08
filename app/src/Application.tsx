import type { ComponentChildren } from "preact";
import ApplicationProvider from "@/providers/ApplicationProvider";
import { WindowManager, WindowManagerContext } from "@kusite/window-manager";
import TestWindow from "@/components/TestWindow";

export default function Application(): ComponentChildren {
  return (
    <ApplicationProvider>
      <WindowManager />
      <WindowManagerContext.Consumer>
        {(value) => <button onClick={() => value!.store.addWindow(TestWindow)}>Add window!</button>}
      </WindowManagerContext.Consumer>
    </ApplicationProvider>
  );
}
