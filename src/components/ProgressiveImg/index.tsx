import React from 'react';
import useProgressiveImage from '../../utils/hooks/useProgressiveImage';

interface ProgressiveImgProps {
  src: string;
  fallbackSrc: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

const ProgressiveImg: React.FC<ProgressiveImgProps> = (props) => {
  const { style, alt, className } = props;
  const src = useProgressiveImage({
    src: props.src,
    fallbackSrc: props.fallbackSrc,
  })
  return (
    <img className={className} alt={alt} src={src} style={style} />
  )
}

export default ProgressiveImg;
