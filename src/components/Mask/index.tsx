import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100vh',
    zIndex: -1,
  },
  '@media (prefers-color-scheme: dark)': {
    container: {
      filter: 'invert(1) hue-rotate(180deg)',
    },
  },
});

const Mask: React.FC<{}> = () => {
  const cls = useStyles();
  return <div className={cls.container} />;
};

export default Mask;
