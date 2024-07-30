// components/CustomVideoPlayer.js
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const CustomVideoPlayer = () => {
  const videoPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state) => {
    setProgress(state.played * 100);
  };

  const handleSeek = (seconds) => {
    if (videoPlayerRef.current) {
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + seconds);
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`relative w-full ${isFullScreen ? 'fixed inset-0 z-50' : 'max-w-3xl mx-auto'}`}>
      <ReactPlayer
        ref={videoPlayerRef}
        className="react-player"
        url="https://172.16.38.68//videos/movies/584.mp4"
        width="100%"
        height="100%"
        playing={isPlaying}
        onProgress={handleProgress}
        controls={false} // Disable default controls
      />
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={handlePlayPause}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={() => handleSeek(-10)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          -10s
        </button>
        <button
          onClick={() => handleSeek(10)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          +10s
        </button>
        <button
          onClick={toggleFullScreen}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
      <div className="mt-2 text-center">
        Progress: {progress.toFixed(2)}%
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
