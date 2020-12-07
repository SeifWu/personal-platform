import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import VideoBackground from '../../VideoBackground';
import Mask from '../../Mask';

const useStyles = makeStyles({
  headerImageBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -2,
    width: '100%',
    height: 'auto',
    background: 'transparent',
    '-webkit-user-drag': 'none',
  }
});

const FirstScreen: React.FC<any> = ({ source, backgroundCover }) => {
  const cls = useStyles();
  return (
    <React.Fragment>
      <div style={{ position: 'relative', minHeight: '100vh', width: '100%', userSelect: 'none', }}>
        <VideoBackground source={source} backgroundCover={backgroundCover} />
        <Mask />
        <img src='/waves.svg' className={cls.headerImageBottom} />
      </div>

      <div style={{ minHeight: '100vh', width: '100%' }}></div>
    </React.Fragment>
  )
}

export default FirstScreen;
