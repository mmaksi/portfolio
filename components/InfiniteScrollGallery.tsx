'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

interface InfiniteScrollGalleryProps {
  images: StaticImageData[];
}

export default function InfiniteScrollGallery({
  images,
}: InfiniteScrollGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
      setScrollPosition(scrollContainer.scrollLeft);
    };

    const intervalId = setInterval(scroll, 8);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 px-6 lg:w-[70%] mx-auto mt-10">
        Learn more about me outside of work
      </h2>
      <p className="text-center px-8 lg:px-20 text-xl mb-2">
        I always find joy in discovering myself, Nature and empowering the
        people around me by being a good example of excellence, dedication, and
        team work.
      </p>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden"
        style={{ width: `${images.length * 200}px` }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[200px] p-2">
            <Image
              src={src}
              height={800}
              alt={`Scrolling image ${index + 1}`}
              className="rounded-lg shadow-md w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 lg:w-80 w-16 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 lg:w-80 w-16 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none" />
    </div>
  );
}
