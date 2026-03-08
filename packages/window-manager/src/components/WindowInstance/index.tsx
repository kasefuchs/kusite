import type { Props } from "./types.ts";
import type { ComponentChildren } from "preact";
import { observer } from "mobx-react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import { useWindowInstance } from "@/contexts";
import { Resizable, ResizeCallbackData } from "react-resizable";
import * as styles from "./index.module.scss";

function WindowInstance(_: Props): ComponentChildren {
  const instance = useWindowInstance();
  const { transform, content } = instance.descriptor;

  const handleFocus = () => {
    instance.focus();
  };

  const handleDragStop: DraggableEventHandler = (_, { x, y }) => {
    instance.updatePosition(x, y);
  };

  const handleResize = (_: unknown, { size }: ResizeCallbackData) => {
    instance.updateSize(size.width, size.height);
  };

  return (
    <Draggable
      position={{ x: transform.x, y: transform.y }}
      handle=".window-drag-handle"
      onStart={handleFocus}
      onStop={handleDragStop}
    >
      <Resizable width={transform.width} height={transform.height} onResize={handleResize} onResizeStart={handleFocus}>
        <div
          style={{ width: transform.width, height: transform.height, zIndex: transform.zIndex }}
          className={styles.window}
          onClick={handleFocus}
        >
          <content.Component {...content.props} />
        </div>
      </Resizable>
    </Draggable>
  );
}

export default observer(WindowInstance);

export type { Props as WindowInstanceProps } from "./types.ts";
