import React from 'react';
import Image from 'next/image';

import MediaCardProps from './data';
import useStyles from './styles';

const MediaCard: React.FC<MediaCardProps> = (props) => {
  const cls = useStyles(props);

  return (
    <div className={cls.mediaCard} >
      <div className={cls.container} >
        <div className={cls.coverImg}>
          <Image
            src={props.coverImg}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h5 className={cls.title}>{props.title}</h5>
        <div className={cls.content}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default MediaCard;
