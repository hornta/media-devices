
const videoInputs = [];
const audioInputs = [];
const audioOutput = [];

const fetchDevices = async () => {
  const devices = await navigator.mediaDevices.enumerateDevices();
  for(const device of devices) {
    if(device.kind === 'videoinput') {
      videoInputs.push(device);
    } else if(device.kind === 'audiooutput') {
      audioOutput.push(device);
    } else {
      audioInputs.push(device);
    }
  }

  console.log(videoInputs.length + " video inputs found");
  console.log(audioInputs.length + " audio inputs found");
  console.log(audioOutput.length + " audio outputs found");
}

navigator.mediaDevices.addEventListener('devicechange', (event) => {
  fetchDevices();
})

fetchDevices();

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
};


// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);

  export {}