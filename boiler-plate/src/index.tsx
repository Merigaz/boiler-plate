import store from "./store/Store";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Router from "./router/router";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import {
  componentsPrimaryTheme,
  primaryTheme,
} from "./components/styles/primaryTheme";
import {QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ConfigProvider
    theme={{
      token: primaryTheme,
      components: componentsPrimaryTheme,
    }}
  >
    <Provider store={store}>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </StrictMode>
    </Provider>
  </ConfigProvider>
);
