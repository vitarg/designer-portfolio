'use client';

import { useEffect, useState, type ImgHTMLAttributes } from 'react';

type FallbackImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  fallbackSrc: string;
};

export default function FallbackImage({ src, fallbackSrc, ...rest }: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      {...rest}
      src={currentSrc}
      onError={(event) => {
        if (currentSrc === fallbackSrc) return;
        event.currentTarget.onerror = null;
        setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
