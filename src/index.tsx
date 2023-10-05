import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Provider } from "react-redux";
import store from "./features/store";
import * as serviceWorkerRegistration from './serviceWorker';

defineCustomElements(window);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorkerRegistration.register();
