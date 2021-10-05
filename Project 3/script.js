const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");
const mediaSource = document.querySelector("#mediaSource");
// Prompt the user to select a media stream, and it will pass it to the video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (e) {
    // Catch error here
    console.log(`Getting the source didn't work`);
  }
}

mediaSource.addEventListener("click", async () => {
    try{
    selectMediaStream();
    }catch(e){
        console.log('There has been an issue:','"',e,'"')
    }
  
});

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  //   Reset the button
  button.disabled = false;
});
