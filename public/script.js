// setting up socket connection and peerJS server
const socket = io('/');
const peer = new Peer(undefined, {
    host: '/', 
    port: '3001'
});

// video functions
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then((stream) => {
    streamVideo(myVideo, stream);
})

peer.on('open', (userId) => {
    socket.emit('join-room', ROOM_ID, userId);
});

socket.on('user-connected', (userId) => {
    console.log(`${userId} joined the room`);
});

function streamVideo(video, stream) {
    video.scrObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
};