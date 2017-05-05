import * as webpack from "webpack";
import * as DevServer from "webpack-dev-server";
import * as open from "open";
import {error, info} from "winston";
import * as jsonServer from "json-server";
import {config} from "./webpack.dev";
import {db} from "./stubs/db";

let server = jsonServer.create();
let router = jsonServer.router(db);
console.log(db);
let middleWares = jsonServer.defaults();

new DevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    inline: true
}).listen(3000, 'localhost', (err) => {
    if (err) {
        return error(err);
    }

    info('Listening on port 3000');
    open('http://localhost:3000');
});

server.use(router);
server.use(middleWares);
server.listen(3001, () => {
    info('Json-server listening on port 3001');
});