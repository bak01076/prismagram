import "./env";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import logger from "morgan";
import passport from "passport";
import "./passport";
import { authenticateJwt } from "./passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request }),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.start({ port: PORT }, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
);
