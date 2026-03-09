import { createContext } from "preact";
import RootStore from "@/stores/RootStore";
import { useContext } from "preact/hooks";

const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = () => useContext(RootStoreContext)!;

export default RootStoreContext;
