import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import VideoBackground from '../../VideoBackground';
import Mask from '../../Mask';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    userSelect: 'none',
  },
  headerImageBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -2,
    width: '100%',
    height: 'auto',
    background: 'transparent',
    '-webkit-user-drag': 'none',
  },
  contentText: {
    color: '#fff',
    margin: 0,
    paddingTop: '40vh',
    fontSize: '2rem',
    lineHeight: '3rem',
    textAlign: 'center',
    textShadow: '1px 1px 1px #3c5c5e',
  },
  '@media (prefers-color-scheme: dark)': {
    headerImageBottom: {
      display: 'none',
    },
    contentText: {
      filter: 'invert(1) hue-rotate(180deg)',
    },
  },
});

const FirstScreen: React.FC<any> = ({ source, backgroundCover }) => {
  const cls = useStyles();
  return (
    <React.Fragment>
      <div className={cls.container}>
        <VideoBackground source={source} backgroundCover={backgroundCover} />
        <p className={cls.contentText}>
          Welcome
          <br />
          Seif's Website
        </p>
        <Mask />
        <img
          src="/waves.svg"
          className={cls.headerImageBottom}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
    </React.Fragment>
  );
};

export default FirstScreen;
