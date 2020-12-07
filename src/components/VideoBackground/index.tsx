import React, { useState } from 'react';

// import ProgressiveImg from '../ProgressiveImg';
import { VideoBackgroundProps } from './data';
import useStyles from './styles';

const VideoBackground: React.FC<VideoBackgroundProps> = (props) => {
  const { source, backgroundCover } = props;
  const cls = useStyles();
  const [canPlay, setPlayStats] = useState(false);
  const onCanPlay = () => {
    setPlayStats(true);
  }
  console.log(canPlay);
  return (
    <React.Fragment>
      {/* {
        canPlay ? null : <ProgressiveImg src={backgroundCover} fallbackSrc='' style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover' }} />
      } */}
      <video
        className={cls.container}
        poster={backgroundCover}
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
