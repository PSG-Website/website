'use client'
import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = '../public/Video/PSGVideo.mp4';
function BackgroundVideo() {
   const playerRef = useRef(null);
   return (
      <div>
         <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
      </div>
   )
};
export default BackgroundVideo;