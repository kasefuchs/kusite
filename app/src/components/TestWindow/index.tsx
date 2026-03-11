import type { ComponentChildren } from "preact";
import { useWindowInstance } from "@kusite/window-manager";
import { CloseButton, TitleBar, TitleBarControls, TitleBarText, Window, WindowBody } from "@kusite/ui";
import { observer } from "mobx-react";
import * as styles from "./index.module.scss";

function TestWindow(): ComponentChildren {
  const instance = useWindowInstance();
  const { handles, transform } = instance.descriptor;

  return (
    <Window className={styles.window}>
      <TitleBar className={handles.dragClassName}>
        <TitleBarText children={instance.id} />
        <TitleBarControls>
          <CloseButton onClick={() => instance.close()} />
        </TitleBarControls>
      </TitleBar>
      <WindowBody>
        <span className={styles.position}>
          <span>
            <b>Position:</b> ({transform.position.join(", ")})
          </span>
          <span>
            <b>Z index:</b> {transform.zIndex}
          </span>
        </span>
        <span className={styles.size}>
          <span>
            <b>Size:</b> ({transform.size.join(", ")})
          </span>
        </span>
      </WindowBody>
    </Window>
  );
}

export default observer(TestWindow);
