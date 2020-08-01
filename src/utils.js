const { v4 } = require('uuid');

const redirectToNewRoom = (req, res, next) => {
    res.redirect(`/${v4()}`);
};

const connectToRoom = (req, res, next) => {
    res.render('room', { roomId: req.params.roomId });
};

const socketEventListener = (socket) => {
    socket.on('join-room',(roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit('user-connected', userId);
    });
};

module.exports = {
    redirectToNewRoom,
    connectToRoom,
    socketEventListener
};