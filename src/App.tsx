import { useState, useRef, useEffect } from "react";

function App() {
  const screenVideoRef = useRef<HTMLVideoElement>(null);
  const startScreenCapture = () => {
    const video = screenVideoRef.current;
    if (!video) return;
    navigator.mediaDevices.getDisplayMedia({video: true, audio: false})
      .then(s => video.srcObject = s)
      .catch(err => console.error(err));
  };
  const stopScreenCapture = () => {
    const video = screenVideoRef.current;
    if (!video) return;
    (video.srcObject as MediaStream)?.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  };


  const camVideoRef = useRef<HTMLVideoElement>(null);
  const startCamCapture = () => {
    const video = camVideoRef.current;
    if (!video) return;
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
      .then(s => video.srcObject = s)
      .catch(err => console.error(err));
  };
  const stopCamCapture = () => {
    const video = camVideoRef.current;
    if (!video) return;
    (video.srcObject as MediaStream)?.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  };



  return (
    <div style={{display: "flex"}}>
      <div className="container" style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <video 
          ref={screenVideoRef}
          autoPlay
          width={1920/4}
          height={1080/4}
          style={{
            border: "1px solid black",
          }}
        />
        <div style={{display: "flex"}}>
          <button onClick={startScreenCapture}>
            Start
          </button>
          <button onClick={stopScreenCapture}>
            Stop
          </button>
        </div>
      </div>
      <div className="container" style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <video 
          ref={camVideoRef}
          autoPlay
          width={1920/4}
          height={1080/4}
          style={{
            border: "1px solid black",
          }}
        />
        <div style={{display: "flex"}}>
          <button onClick={startCamCapture}>
            Start
          </button>
          <button onClick={stopCamCapture}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
