import type { ComponentChildren } from "preact";
import { observer } from "mobx-react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import { useWindowInstance } from "@/contexts";
import { Resizable, ResizeCallbackData } from "react-resizable";
import * as styles from "./index.module.scss";

function WindowInstance(): ComponentChildren {
  const instance = useWindowInstance();
  const { handles, transform, constraints } = instance.descriptor;

  const handleFocus = () => {
    instance.focus();
  };

  const handleDrag: DraggableEventHandler = (_, { x, y }) => {
    instance.updatePosition([x, y]);
  };

  const handleResize = (_: unknown, { size, handle }: ResizeCallbackData) => {
    const [oldWidth, oldHeight] = transform.size;
    const [newWidth, newHeight] = [size.width, size.height];
    let [x, y] = transform.position;

    if (handle.endsWith("w")) x -= newWidth - oldWidth;
    if (handle.startsWith("n")) y -= newHeight - oldHeight;

    instance.updateSize([newWidth, newHeight]);
    instance.updatePosition([x, y]);
  };

  return (
    <Draggable
      position={{ x: transform.position[0], y: transform.position[1] }}
      onStart={handleFocus}
      onDrag={handleDrag}
      handle={`.${handles.dragClassName}`}
    >
      <Resizable
        width={transform.size[0]}
        height={transform.size[1]}
        onResize={handleResize}
        onResizeStart={handleFocus}
        handleSize={[12, 12]}
        resizeHandles={handles.resizeDirections}
        minConstraints={constraints.min}
        maxConstraints={constraints.max}
      >
        <div
          style={{ width: transform.size[0], height: transform.size[1], zIndex: transform.zIndex }}
          className={styles.window}
          children={instance.children}
          onClick={handleFocus}
        />
      </Resizable>
    </Draggable>
  );
}

export default observer(WindowInstance);
