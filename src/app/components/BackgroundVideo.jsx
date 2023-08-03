'use client'
import React from 'react';
import styles from '../styles/BackgroundVideo.module.css';
import vid from './PSGVideo.mp4'

const BackgroundVideo = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;