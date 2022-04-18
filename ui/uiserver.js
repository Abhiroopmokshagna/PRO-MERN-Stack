require("dotenv").config();
const express = require("express");
const proxy = require("http-proxy-middleware");

const port = process.env.UI_SERVER_PORT || 8000;
const UI_API_ENDPOINT =
  process.env.UI_API_ENDPOINT || "http://localhost:5000/graphql";
const env = { UI_API_ENDPOINT };

const app = express();

const apiProxyTarget = process.env.API_PROXY_TARGET;
if (apiProxyTarget) {
  app.use("/graphql", proxy({ target: apiProxyTarget }));
}

app.get("/env.js", function (req, res) {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`UI started on port ${port}`);
});
