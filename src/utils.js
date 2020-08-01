const { v4 } = require('uuid');

const redirectToNewRoom = (req, res, next) => {
    res.redirect(`/${v4()}`);
};

const connectToRoom = (req, res, next) => {
    res.render('room', { roomId: req.params.roomId });
};

const joinRoom = (roomId, userId) => {
    console.log(roomId, userId);
};

const socketEventListener = (socket) => {
    socket.on('join-room',joinRoom);
};

module.exports = {
    redirectToNewRoom,
    connectToRoom,
    socketEventListener
};