import type { Props } from "./types";
import type { ComponentChildren } from "preact";
import { observer } from "mobx-react";
import Draggable, { DraggableEventHandler } from "react-draggable";
import { useWindowInstance } from "@/contexts";
import { Resizable, ResizeCallbackData } from "react-resizable";
import * as styles from "./index.module.scss";

function WindowInstance(_: Props): ComponentChildren {
  const instance = useWindowInstance();
  const { children, transform, constraints } = instance.descriptor;

  const handleFocus = () => {
    instance.focus();
  };

  const handleDragStop: DraggableEventHandler = (_, { x, y }) => {
    instance.updatePosition([x, y]);
  };

  const handleResize = (_: unknown, { size }: ResizeCallbackData) => {
    instance.updateSize([size.width, size.height]);
  };

  return (
    <Draggable
      position={{ x: transform.position[0], y: transform.position[1] }}
      onStart={handleFocus}
      onStop={handleDragStop}
      handle=".window-drag-handle"
    >
      <Resizable
        width={transform.size[0]}
        height={transform.size[1]}
        onResize={handleResize}
        onResizeStart={handleFocus}
        minConstraints={constraints.min}
        maxConstraints={constraints.max}
      >
        <div
          style={{ width: transform.size[0], height: transform.size[1], zIndex: transform.zIndex }}
          className={styles.window}
          children={children}
          onClick={handleFocus}
        />
      </Resizable>
    </Draggable>
  );
}

export default observer(WindowInstance);

export type { Props as WindowInstanceProps } from "./types";
