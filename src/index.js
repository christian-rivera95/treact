import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import "semantic-ui-css/semantic.min.css";

Modal.setAppElement("#root");

ReactDOM.render(<App />, document.getElementById("root"));
