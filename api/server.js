const fs = require("fs");
const express = require("express");
const { ApolloServer, UserInputError } = require("apollo-server-express");
const { Kind } = require("graphql/language");
const { GraphQLScalarType } = require("graphql");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = process.env.DB_URL || "mongodb://localhost/issuetracker";
const port = process.env.API_SERVER_PORT || 5000;
let db;

let aboutMessage = "Issue Tracker API v1.0";

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log("Connected to MongoDB URL", url);
  db = client.db();
}

async function getNextSequence(name) {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false }
    );
  return result.value.current;
}

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
  description: "A Date() type in GraphQL as a scalar",
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    const dateValue = new Date(value);
    return isNaN(dateValue) ? undefined : dateValue;
  },
  parseLiteral(ast) {
    if (ast.kind == Kind.STRING) {
      const value = new Date(ast.value);
      return isNaN(value) ? undefined : value;
    }
  },
});

const resolvers = {
  Query: {
    about: () => aboutMessage,
    issueList,
  },
  Mutation: {
    setAboutMessage,
    issueAdd,
  },
  GraphQLDate,
};

function setAboutMessage(_, { message }) {
  return (aboutMessage = message);
}

function issueValidate(issue) {
  const errors = [];
  if (issue.title.length < 3) {
    errors.push('Field "title" must be atleast 3 characters long.');
  }
  if (issue.status == "Assigned" && !issue.owner) {
    errors.push('Field "owner" is required when status is "Assigned"');
  }
  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

async function issueAdd(_, { issue }) {
  issueValidate(issue);
  issue.created = new Date();
  issue.id = await getNextSequence("issues");

  const result = await db.collection("issues").insertOne(issue);
  const savedIssue = await db
    .collection("issues")
    .findOne({ _id: result.insertedId });
  return savedIssue;
}

async function issueList() {
  const issues = await db.collection("issues").find({}).toArray();
  return issues;
}
const server = new ApolloServer({
  typeDefs: fs.readFileSync("schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

const enableCors = (process.env.ENABLE_CORS || "true") == "true";
console.log("CORS setting:", enableCors);

const app = express();

server.applyMiddleware({ app, path: "/graphql", cors: enableCors });

(async function () {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API Server Listening on port ${port}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
})();
