import type { ComponentChild } from "preact";
import { Route, Switch } from "wouter-preact";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";

export default function Router(): ComponentChild {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}
