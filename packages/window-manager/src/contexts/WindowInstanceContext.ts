import { createContext } from "preact";
import { useContext } from "preact/hooks";
import type { WindowInstanceStore } from "@/stores";

const WindowInstanceContext = createContext<WindowInstanceStore | null>(null);

export const useWindowInstance = () => useContext(WindowInstanceContext)!;

export default WindowInstanceContext;
