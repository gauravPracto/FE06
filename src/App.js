import React from "react";
import store from "../src/store/storeConfig.js";
import { Provider } from "react-redux";
import Weather from "./components/Weather.jsx";
export function App() {
  return (
    <div>
      <Provider store={store}>
        <Weather></Weather>
      </Provider>
    </div>
  );
}
