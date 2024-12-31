import React, { useState } from "react";
import VideoPlayer from "./components/VedioPlayer";
import CaptionInput from "./components/CaptionInput";
import CaptionList from "./components/CaptionList";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (caption) => {
    setCaptions((prev) => [...prev, caption]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">Video Caption Editor</h1>
      <div className="w-full max-w-2xl">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-2 text-gray-900 rounded"
          />
        </div>
        <CaptionInput onAddCaption={handleAddCaption} />
        {videoUrl && <VideoPlayer videoUrl={videoUrl} captions={captions} />}
        <CaptionList captions={captions} />
      </div>
    </div>
  );
};

export default App;
