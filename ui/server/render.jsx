const React = require("react");
const ReactDOMServer = require("react-dom/server");

import About from "../src/About.jsx";
import template from "./template.js";

function render(req, res) {
  const body = ReactDOMServer.renderToString(<About />);
  res.send(template(body));
}

export default render;
