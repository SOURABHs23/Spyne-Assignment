import React, { useRef } from "react";

const VideoPlayer = ({ videoUrl, captions }) => {
  const videoRef = useRef(null);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    // console.log(videoRef.current.currentTime + "vedioplayer");
    captions.forEach((caption, index) => {
      const element = document.getElementById(`caption-${index}`);
      if (
        currentTime >= parseFloat(caption.start) &&
        currentTime <= parseFloat(caption.end)
      ) {
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0;
      }
    });
  };

  return (
    <div className="relative w-full">
      <video
        src={videoUrl}
        ref={videoRef}
        controls
        onTimeUpdate={handleTimeUpdate}
        className="w-full rounded mb-4"
      />
      {captions.map((caption, index) => (
        <div
          key={index}
          id={`caption-${index}`}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-4 py-2 rounded transition-opacity duration-300"
        >
          {caption.text}
        </div>
      ))}
    </div>
  );
};

export default VideoPlayer;
