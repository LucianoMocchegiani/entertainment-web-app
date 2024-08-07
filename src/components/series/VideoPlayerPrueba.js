"use client";
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const CustomVideoPlayer = () => {
  const videoPlayerRef = useRef(null)
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleProgress = (state) => {
    setProgress(state.played * 100);
  };


  return (
    <div 
      className={`relative w-full max-w-3xl mx-auto`}
    >
      <ReactPlayer
        ref={videoPlayerRef}
        className={`w-full h-64`}
        url="https://firebasestorage.googleapis.com/v0/b/entertainment-app-87f62.appspot.com/o/m-videos%2F1014590?alt=media&token=fb2e31d1-e141-4695-97e8-f184f5907fcd"
        width="100%"
        height="100%"
        playing={isPlaying}
        onProgress={handleProgress}
        controls={true}
      />
    </div>
  );
};

export default CustomVideoPlayer;
