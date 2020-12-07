import React from 'react';
import VideoBackground from '../VideoBackground';

const FirstScreen: React.FC<any> = ({ source, backgroundCover }) => {
  return (
    <React.Fragment>
      <VideoBackground source={source} backgroundCover={backgroundCover} />
    </React.Fragment>
  )
}

export default FirstScreen;
