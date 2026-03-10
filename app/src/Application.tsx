import type { ComponentChildren } from "preact";
import ApplicationProvider from "@/providers/ApplicationProvider";
import { WindowManager, WindowManagerContext } from "@kusite/window-manager";
import TestWindow from "@/components/TestWindow";

export default function Application(): ComponentChildren {
  return (
    <ApplicationProvider>
      <WindowManager />
      <WindowManagerContext.Consumer>
        {(value) => (
          <button
            onClick={() =>
              value!.addWindow(<TestWindow />, {
                transform: {
                  size: [300, 70],
                },
                constraints: {
                  min: [300, 70],
                },
              })
            }
          >
            Add window!
          </button>
        )}
      </WindowManagerContext.Consumer>
    </ApplicationProvider>
  );
}
