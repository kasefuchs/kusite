import Layout from "#/pages/Layout";
import ApplicationProvider from "#/providers/ApplicationProvider";
import type { ComponentChildren } from "preact";

export default function Application(): ComponentChildren {
  return (
    <ApplicationProvider>
      <Layout />
    </ApplicationProvider>
  );
}
