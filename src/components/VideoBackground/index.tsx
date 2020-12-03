import React, { useState, useEffect, useRef } from 'react';
import { VideoBackgroundProps } from './data';

import useStyles from './styles';

const VideoBackground: React.FC<VideoBackgroundProps> = ({ source, cover }) => {
  const cls = useStyles();
  const [canPlay, setPlayStats] = useState(false);
  const videoEl = useRef(null)
  const onCanPlay = () => {
    setPlayStats(true);
  }
  useEffect(() => {
    console.log(videoEl)
  })
  console.log(canPlay)
  // if (!canPlay) {
  //   return <img src={cover} />
  // }

  return (
    <React.Fragment>
      <img src={cover} alt="hhhhh" />
      <video
        ref={videoEl}
        className={cls.container}
        playsInline
        autoPlay
        muted
        loop
        onCanPlay={onCanPlay}
      >
        <source src={source} type="video/mp4" />
      </video>
    </React.Fragment>
  )
}

export default VideoBackground;
