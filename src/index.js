import React from "react";
import { render } from "react-dom";

import App from "./containers/App";
import GlobalState from "./containers/GlobalState";
import {BrowserRouter} from 'react-router-dom'

render(
  <GlobalState>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
