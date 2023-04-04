import { useState, useRef, useEffect } from "react";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const startCapture = () => {
    console.log("Starting capture...");
    const video = videoRef.current;
    if (!video) return;
    const constraints = {
      video: { 
        mediaSource: "screen",
      },
      audio: false,
    };
    console.log("Using constraints", constraints);
    navigator.mediaDevices.getDisplayMedia({video: true, audio: false})
      .then(s => {
        video.srcObject = s;
        console.log("Video source set.");
      })
      .catch(err => console.error(err));
  };
  const stopCapture = () => {
    const video = videoRef.current;
    if (!video) return;
    (video.srcObject as MediaStream)?.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  };
  return (
    <div className="container" style={{
      display: "flex",
      flexDirection: "column",
    }}>
      <video 
        ref={videoRef}
        autoPlay
        width={1920/4}
        height={1080/4}
        style={{
          border: "1px solid black",
        }}
      />
      <div style={{display: "flex"}}>
        <button onClick={startCapture}>
          Start
        </button>
        <button onClick={stopCapture}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
