import "./styles/app.less";
import store from "./store/Store";
import { StrictMode } from "react";
import Router from "./router/router";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <StrictMode>
      <Router />
    </StrictMode>
  </Provider>
);