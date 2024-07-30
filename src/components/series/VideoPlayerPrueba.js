"use client";

import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useRouter, useSearchParams } from 'next/navigation';

const CustomVideoPlayer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoPlayerRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const fullscreen = searchParams.get('fullscreen') === 'true';

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
    const newFullscreen = !fullscreen;
    const newQuery = new URLSearchParams(searchParams.toString());
    newQuery.set('fullscreen', newFullscreen ? 'true' : 'false');
    router.push(`?${newQuery.toString()}`, { shallow: true });
    if (fullscreen) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
    useEffect(() => {
        const handleFullscreenChange = () => {
        if (!document.fullscreenElement) {
            const newQuery = new URLSearchParams(searchParams.toString());
            newQuery.set('fullscreen', fullscreen ? 'false' : 'false');
            router.push(`?${newQuery.toString()}`, { shallow: true });
        }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [router, searchParams]);
  return (
    <div 
        className={`relative w-full ${fullscreen ? 'fixed inset-0 z-50 w-screen h-screen object-cover' : 'max-w-3xl mx-auto'}`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
    >
      {/* <ReactPlayer
        ref={videoPlayerRef}
        className={`${fullscreen ? 'w-screen h-screen object-cover' : 'w-full h-64'}`}
        style={fullscreen ?{objectFit: 'cover'}:null}
        url="https://firebasestorage.googleapis.com/v0/b/entertainment-app-87f62.appspot.com/o/m-videos%2F1014590?alt=media&token=fb2e31d1-e141-4695-97e8-f184f5907fcd"
        width="100%"
        height="100%"
        playing={isPlaying}
        onProgress={handleProgress}
        controls={false}
      /> */}
      {showControls && <div className='absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
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
          {fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </button>
      </div>
      <div className="mt-2 text-center">
        Progress: {progress.toFixed(2)}%
      </div>
      </div>}
    </div>
  );
};

export default CustomVideoPlayer;
