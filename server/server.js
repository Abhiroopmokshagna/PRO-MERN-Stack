const fs = require("fs");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { Kind } = require("graphql/language");
const { GraphQLScalarType } = require("graphql");

let aboutMessage = "Issue Tracker API v1.0";

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
  description: "A Date() type in GraphQL as a scalar",
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    return ast.kind == Kind.STRING ? new Date(ast.value) : undefined;
  },
});

const issuesDB = [
  {
    id: 1,
    status: "New",
    owner: "Ravan",
    effort: 5,
    created: new Date("2019-01-15"),
    due: undefined,
    title: "Error in console when clicking Add",
  },
  {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    effort: 14,
    created: new Date("2019-01-16"),
    due: new Date("2019-02-01"),
    title: "Missing bottom border on panel",
  },
];

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

function issueAdd(_, { issue }) {
  issue.created = new Date();
  issue.id = issuesDB.length + 1;
  if (issue.status == undefined) issue.status = "New";
  issuesDB.push(issue);
  return issue;
}

function issueList() {
  return issuesDB;
}
const server = new ApolloServer({
  typeDefs: fs.readFileSync("./server/schema.graphql", "utf-8"),
  resolvers,
});

const app = express();

app.use(express.static("public"));

server.applyMiddleware({ app, path: "/graphql" });

app.listen(5000, () => {
  console.log("Server Listening on port 5000");
});
