import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/homePage/HomePage";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./components/App";
import { store, persistor } from "./redux/store";
import "./index.css";
  
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <HomePage />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
