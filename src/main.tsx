import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import { ErrorBoundary } from "./components";

import "./styles/index.css";
import "./styles/variables.css";
import { store } from "./redux";

const persistor = getPersistor();
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ErrorBoundary>
              <App />
            </ErrorBoundary>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
