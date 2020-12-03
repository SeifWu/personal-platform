import React from 'react';
import VideoBackground from '../VideoBackground';

const FirstScreen: React.FC<any> = ({ source }) => {
  return (
    <React.Fragment>
      <VideoBackground source={source} cover="" />
    </React.Fragment>
  )
}

export default FirstScreen;
