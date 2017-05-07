import * as jsonServer from 'json-server';
import {info} from 'winston';
import {db} from './db';

const server = jsonServer.create();
const router = jsonServer.router(db);
const middleWares = jsonServer.defaults();

const PORT = process.env.NODE_ENV === 'development' ? 3001 : 1026;

server.use(middleWares);
server.use(jsonServer.bodyParser);

server.use(router);
server.use(middleWares);
server.listen(PORT, () => {
  info(`Json-server listening on port ${PORT}`);
});
