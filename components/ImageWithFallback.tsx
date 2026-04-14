'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  fill,
  className,
  sizes,
  width,
  height,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      width={width}
      height={height}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
