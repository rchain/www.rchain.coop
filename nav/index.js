import React from "react";
import ReactDOM from "react-dom";

import { Nav } from "./Nav";

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Nav />, document.getElementsByTagName("header")[0]);
});
