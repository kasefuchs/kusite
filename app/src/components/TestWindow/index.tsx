import type { ComponentChildren } from "preact";
import { useWindowInstance } from "@kusite/window-manager";
import { observer } from "mobx-react";
import * as styles from "./index.module.scss";

function TestWindow(): ComponentChildren {
  const instance = useWindowInstance();

  return (
    <div className={`window ${styles.window}`}>
      <div className={`title-bar ${instance.handles.dragClassName}`}>
        <span className="title-bar-text" children={instance.id} />
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => instance.close()} />
        </div>
      </div>
      <div className="window-body">
        <span className={styles.position}>
          <span>
            <b>Position:</b> ({instance.transform.position.join(", ")})
          </span>
          <span>
            <b>Z index:</b> {instance.transform.zIndex}
          </span>
        </span>
        <span className={styles.size}>
          <span>
            <b>Size:</b> ({instance.transform.size.join(", ")})
          </span>
        </span>
      </div>
    </div>
  );
}

export default observer(TestWindow);
