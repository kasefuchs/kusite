import type { ComponentChildren } from "preact";
import ApplicationProvider from "@/providers/ApplicationProvider";

export default function Application(): ComponentChildren {
  return <ApplicationProvider children={undefined} />;
}
