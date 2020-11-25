import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import logger from "morgan";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));
server.start({ port: PORT }, () =>
  console.log(`Server is running on: http://localhost:${PORT}`)
);
