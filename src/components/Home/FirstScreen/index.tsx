import React from 'react';
import VideoBackground from '../../../components/VideoBackground';

const FirstScreen: React.FC<any> = ({ source, backgroundCover }) => {
  return (
    <React.Fragment>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%', }}>
        <VideoBackground source={source} backgroundCover={backgroundCover} />
        <img src='/waves.svg'
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div style={{ minHeight: '100vh', width: '100%' }}></div>
    </React.Fragment>
  )
}

export default FirstScreen;
