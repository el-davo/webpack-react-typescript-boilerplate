import * as jsonServer from "json-server";
import {info} from "winston";
import {db} from "./db";

let server = jsonServer.create();
let router = jsonServer.router(db);
let middleWares = jsonServer.defaults();

const PORT = process.env.NODE_ENV === 'development' ? 3001 : 1026;

server.use(middleWares);
server.use(jsonServer.bodyParser);

server.use(router);
server.use(middleWares);
server.listen(PORT, () => {
  info(`Json-server listening on port ${PORT}`);
});