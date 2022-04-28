const React = require("react");
const ReactDOMServer = require("react-dom/server");

import { matchPath, StaticRouter } from "react-router-dom";
import Page from "../src/Page.jsx";
import template from "./template.js";
import routes from "../src/routes.js";
import store from "../src/store.js";
async function render(req, res) {
  const activeRoute = routes.find((route) => matchPath(req.path, route));
  let initialData;
  if (activeRoute && activeRoute.component.fetchData) {
    const match = matchPath(req.path, activeRoute);
    initialData = await activeRoute.component.fetchData(match);
  }
  store.initialData = initialData;
  const element = (
    <StaticRouter location={req.url} context={{}}>
      <Page />
    </StaticRouter>
  );
  const body = ReactDOMServer.renderToString(element);
  res.send(template(body, initialData));
}

export default render;
