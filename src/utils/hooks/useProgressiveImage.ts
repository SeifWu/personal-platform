import { useEffect, useReducer } from 'react';

interface Action {
  type: string;
  src: string;
}

const reducer = (currentSrc: string, action: Action) => {
  if (action.type === 'loaded' || !currentSrc) {
    return action.src;
  }

  return currentSrc;
}

const useProgressiveImage = ({ src, fallbackSrc }: { src: string, fallbackSrc: string }) => {
  const [currentSrc, dispatch] = useReducer(reducer, '');
  useEffect(() => {
    const mainImg = new Image();
    const fallbackImg = new Image();

    mainImg.onload = () => {
      dispatch({ type: 'loaded', src })
    };
    fallbackImg.onload = () => { };

    mainImg.src = src;
    fallbackImg.src = fallbackSrc;
  }, [src, fallbackSrc])

  return currentSrc;
}

export default useProgressiveImage;
