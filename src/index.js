import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import "./assets/index.css";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
