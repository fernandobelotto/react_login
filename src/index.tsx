import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Index from "./routes";
// import * as serviceWorker from "./serviceWorker";
import axe from "@axe-core/react";

axe(React, ReactDOM, 3000);

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.register();
reportWebVitals();
