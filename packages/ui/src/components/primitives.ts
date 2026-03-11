import { createStyledComponent } from "@/utils";

export const Window = createStyledComponent("div", { className: "window" });
export const WindowBody = createStyledComponent("div", { className: "window-body" });

export const TitleBar = createStyledComponent("div", { className: "title-bar" });
export const TitleBarText = createStyledComponent("span", { className: "title-bar-text" });
export const TitleBarControls = createStyledComponent("div", { className: "title-bar-controls" });

export const CloseButton = createStyledComponent("button", { "aria-label": "Close" });
export const MinimizeButton = createStyledComponent("button", { "aria-label": "Minimize" });
export const MaximizeButton = createStyledComponent("button", { "aria-label": "Maximize" });
export const HelpButton = createStyledComponent("button", { "aria-label": "Help" });

export const StatusBar = createStyledComponent("div", { className: "status-bar" });
export const StatusBarField = createStyledComponent("p", { className: "status-bar-field" });
