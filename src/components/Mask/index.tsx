import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100vh',
  }
});

const Mask: React.FC<{}> = () => {
  const cls = useStyles();
  return (
    <div className={cls.mask} />
  )
}

export default Mask;
