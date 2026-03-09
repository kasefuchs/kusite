import type { ComponentChildren } from "preact";
import { useWindowInstance } from "@kusite/window-manager";
import { observer } from "mobx-react";
import * as styles from "./index.module.scss";

function TestWindow(): ComponentChildren {
  const instance = useWindowInstance();

  return (
    <div className={`window ${styles.window}`}>
      <div className={`title-bar ${instance.descriptor.handles.dragClassName}`}>
        <span className="title-bar-text" children={instance.descriptor.id} />
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={() => instance.close()} />
        </div>
      </div>
      <div className="window-body">
        <span className={styles.position}>
          <span>
            <b>X:</b> {instance.descriptor.transform.position[0]}
          </span>
          <span>
            <b>Y:</b> {instance.descriptor.transform.position[1]}
          </span>
          <span>
            <b>Z:</b> {instance.descriptor.transform.zIndex}
          </span>
        </span>
        <span className={styles.size}>
          <span>
            <b>Width:</b> {instance.descriptor.transform.size[0]}
          </span>
          <span>
            <b>Height:</b> {instance.descriptor.transform.size[1]}
          </span>
        </span>
      </div>
    </div>
  );
}

export default observer(TestWindow);
