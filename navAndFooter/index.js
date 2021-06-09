import React from "react";
import ReactDOM from "react-dom";

import { Nav } from "./Nav";
import { Footer } from "./Footer";

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Nav />, document.getElementsByTagName("header")[0]);
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Footer />, document.getElementById("footer"));
});
