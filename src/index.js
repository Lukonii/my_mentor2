import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
//import "./boot/bootstrap.min.css";
//import "./boot/bootstrapSuperhero.css";
//import "./boot/bootstrapLumen.min.css";
import "./index.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
registerServiceWorker();
