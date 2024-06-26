import { Layout } from "@/components";
import { lazy, Suspense } from "react";
import { Loading } from "./components/ui";

const AppRoute = lazy(() => import("@/routes/AppRoute"));

function App() {
  return (
    <Suspense
      fallback={<Loading size="large" flexStyle={{ height: "100vh" }} />}
    >
      <Layout>
        <AppRoute />
      </Layout>
    </Suspense>
  );
}

export default App;
