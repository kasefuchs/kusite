import type { ComponentChild } from "preact";
import ApplicationProvider from "@/providers/ApplicationProvider";
import Initializer from "./Initializer";
import Router from "./Router";

export default function Application(): ComponentChild {
  return (
    <ApplicationProvider>
      <Initializer>
        <Router />
      </Initializer>
    </ApplicationProvider>
  );
}
