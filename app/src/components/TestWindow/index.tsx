import type { ComponentChildren } from "preact";
import { useWindowInstance } from "@kusite/window-manager";
import { observer } from "mobx-react";
import * as styles from "./index.module.scss";

function TestWindow(): ComponentChildren {
  const instance = useWindowInstance();

  return (
    <div className={styles.window}>
      <span class={"window-drag-handle"}>drag me</span>
      <br />
      <span>ID: {instance.descriptor.id}</span>
      <br />
      <span>
        X: {instance.descriptor.transform.x}; Y: {instance.descriptor.transform.y}; Z:{" "}
        {instance.descriptor.transform.zIndex};
      </span>
      <br />
      <span>
        width: {instance.descriptor.transform.width}; height: {instance.descriptor.transform.height}
      </span>
      <br />
      <button onClick={() => instance.close()} children={"close"} />
      <button onClick={() => instance.focus()} children={"focus"} />
    </div>
  );
}

export default observer(TestWindow);
