const { v4 } = require('uuid');

const redirectToNewRoom = (req, res, next) => {
    res.redirect(`/${v4()}`);
};

const connectToRoom = (req, res, next) => {
    res.render('room', { roomId: req.params.roomId });
};

module.exports = {
    redirectToNewRoom,
    connectToRoom
};