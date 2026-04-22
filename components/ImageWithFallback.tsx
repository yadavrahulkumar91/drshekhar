'use client';

import ExportedImage from 'next-image-export-optimizer';
import { useState } from 'react';
import { getImagePath } from '@/lib/imageOptimizer';

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
  const [imgSrc, setImgSrc] = useState(getImagePath(src));

  return (
    <ExportedImage
      src={imgSrc}
      alt={alt}
      className={className}
      {...(width && height && { width, height })}
      {...(fill && { fill: true })}
      {...(sizes && { sizes })}
      onError={() => {
        setImgSrc(getImagePath(fallbackSrc));
      }}
    />
  );
}
