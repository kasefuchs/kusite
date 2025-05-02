import Main from "#pages/Root";
import ApplicationProvider from "#providers/ApplicationProvider";
import type { ComponentChildren } from "preact";

export default function Application(): ComponentChildren {
  return (
    <ApplicationProvider>
      <Main />
    </ApplicationProvider>
  );
}
