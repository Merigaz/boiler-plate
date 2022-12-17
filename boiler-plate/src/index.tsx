
import store from "./store/Store";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Router from "./router/router";
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  
  <ConfigProvider
    theme={{
      algorithm: theme.defaultAlgorithm,
    }}
    >
    <Provider store={store}>
      <StrictMode>
        <Router />
      </StrictMode>
    </Provider>
  </ConfigProvider>
    
);
