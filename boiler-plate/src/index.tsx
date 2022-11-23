import "./styles/app.less";
import store from "./store/Store";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Spinload from "./components/loading/Spinload";
import Router from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <StrictMode>
      <Spinload/>
      <Router/>
    </StrictMode>
  </Provider>
);