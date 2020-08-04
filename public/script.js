const socket = io('/');
const videoGrid = document.getElementById('video-grid');
const peer = new Peer(undefined, {
    host: '/',
    port: '3001'
});

const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then((stream) => {
    videoStream(myVideo, stream);
});



peer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id);
});

socket.on('user-connected', (userId) => {
    console.log(`${userId} joined the room`);
});

function videoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
};