const fs = require("fs");
const express = require("express");
const { ApolloServer, UserInputError } = require("apollo-server-express");
const { Kind } = require("graphql/language");
const { GraphQLScalarType } = require("graphql");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost/issuetracker";
let db;

let aboutMessage = "Issue Tracker API v1.0";

async function connectToDb() {
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log("Connected to MongoDB at", url);
  db = client.db();
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

function issueAdd(_, { issue }) {
  issueValidate(issue);
  issue.created = new Date();
  issue.id = issuesDB.length + 1;
  issuesDB.push(issue);
  return issue;
}

async function issueList() {
  const issues = await db.collection("issues").find({}).toArray();
  return issues;
}
const server = new ApolloServer({
  typeDefs: fs.readFileSync("./server/schema.graphql", "utf-8"),
  resolvers,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

const app = express();

app.use(express.static("public"));

server.applyMiddleware({ app, path: "/graphql" });

(async function () {
  try {
    await connectToDb();
    app.listen(5000, () => {
      console.log("Server Listening on port 5000");
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
})();
