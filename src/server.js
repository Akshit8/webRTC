const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));

const app = express();
const server = http.createServer(app);
const io = socketio(server);

server.listen(+args.PORT, args.HOST, () => {
    console.log(`server listening on http://${args.HOST}:${args.PORT}`);
});

