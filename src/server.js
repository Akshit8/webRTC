const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const parseArgs = require('minimist');
const path = require('path');
const { redirectToNewRoom, connectToRoom, socketEventListener } = require('./utils');

const args = parseArgs(process.argv.slice(2));

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', redirectToNewRoom);
app.get('/ascii', (req, res) => {
    res.render('ascii', {});
});
app.get('/:roomId', connectToRoom);

io.on('connection', socketEventListener);

server.listen(+args.PORT, args.HOST, () => {
    console.log(`server listening on http://${args.HOST}:${args.PORT}`);
});

