import React from 'react';

import { CubeGridScaleDelayProps } from './data';
import useStyles from './styles';

const CubeGridScaleDelay: React.FC<CubeGridScaleDelayProps> = (props) => {
  const cls = useStyles(props);

  return (
    <div className={cls.cubeGrid}>
      <div className={`${cls.cube} ${cls.cube1}`} />
      <div className={`${cls.cube} ${cls.cube2}`} />
      <div className={`${cls.cube} ${cls.cube3}`} />
      <div className={`${cls.cube} ${cls.cube4}`} />
      <div className={`${cls.cube} ${cls.cube5}`} />
      <div className={`${cls.cube} ${cls.cube6}`} />
      <div className={`${cls.cube} ${cls.cube7}`} />
      <div className={`${cls.cube} ${cls.cube8}`} />
      <div className={`${cls.cube} ${cls.cube9}`} />
    </div>
  )
}

export default CubeGridScaleDelay;
