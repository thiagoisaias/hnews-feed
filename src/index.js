import React from "react";
import ReactDOM from "react-dom";
import FetchContainer from "./containers/FetchContainer/FetchContainer";
import "./assets/index.css";

ReactDOM.render(<FetchContainer />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
