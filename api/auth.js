const Router = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const routes = new Router();

let { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  if (process.env.NODE_ENV !== "production") {
    JWT_SECRET = "tempJWTSecretForDevOnly";
    console.log("Missing env var JWT_SECRET. Using unsafe dev secret");
  } else {
    console.log("Missing env var JWT_SECRET. Authentication disabled.");
  }
}
routes.use(bodyParser.json());

function getUser(req) {
  const token = req.cookies.jwt;
  if (!token) return { signedIn: false };

  try {
    const credentials = jwt.verify(token, JWT_SECRET);
    return credentials;
  } catch (error) {
    return { signedIn: false };
  }
}

routes.post("/user", (req, res) => {
  res.send(getUser(req));
});

routes.post("/signin", async (req, res) => {
  if (!JWT_SECRET) {
    res.status(500).send("Missing JWT_SECRET. Refusing to authenticate.");
  }
  const googleToken = req.body.google_token;

  const client = new OAuth2Client();
  let payload;
  try {
    const ticket = await client.verifyIdToken({ idToken: googleToken });
    payload = ticket.getPayload();
  } catch (error) {
    res.status(403).send("Invalid credentials");
  }
  const { given_name: givenName, name, email } = payload;
  const credentials = {
    signedIn: true,
    givenName,
    name,
    email,
  };
  const token = jwt.sign(credentials, JWT_SECRET);
  res.cookie("jwt", token, { httpOnly: true });
  res.json(credentials);
});
module.exports = { routes };
