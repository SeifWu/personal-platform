import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

export interface CoverImgProps {
  src: string;
  height?: string | number;
  alt?: string;
  boxShadow?: string;
  borderRadius?: string | number;
}

const useStyles = makeStyles({
  coverImg: {
    position: 'relative',
    height: (props: CoverImgProps) => (props.height ? props.height : 263),
    width: '100%',
    background: 'transparent',
    '&>div': {
      boxShadow: props =>
        props.boxShadow
          ? props.boxShadow
          : '0 2px 10px rgba(188,191,200,0.1),0 2px 10px rgba(188,191,200,0.2)',
      borderRadius: props=> props.borderRadius || 0,
    },
  },
});

const CoverImg: React.FC<CoverImgProps> = (props) => {
  const cls = useStyles(props);
  console.log(props.src);
  return (
    <div className={cls.coverImg}>
      <Image src={props.src} alt={props.alt} layout="fill" objectFit="cover" />
    </div>
  );
};

export default CoverImg;
