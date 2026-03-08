import type { ComponentChildren } from "preact";
import { useWindowInstance } from "@kusite/window-manager";
import { observer } from "mobx-react";
import * as styles from "./index.module.scss";

function TestWindow(): ComponentChildren {
  const instance = useWindowInstance();

  return (
    <div className={`window ${styles.window}`}>
      <div className="title-bar window-drag-handle">
        <span className="title-bar-text" children={instance.descriptor.id} />
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => instance.close()} />
        </div>
      </div>
      <div className="window-body">
        <span className={styles.position}>
          <span>
            <b>X:</b> {instance.descriptor.transform.x}
          </span>
          <span>
            <b>Y:</b> {instance.descriptor.transform.y}
          </span>
          <span>
            <b>Z:</b> {instance.descriptor.transform.zIndex}
          </span>
        </span>
        <span className={styles.size}>
          <span>
            <b>Width:</b> {instance.descriptor.transform.width}
          </span>
          <span>
            <b>Height:</b> {instance.descriptor.transform.height}
          </span>
        </span>
      </div>
    </div>
  );
}

export default observer(TestWindow);
