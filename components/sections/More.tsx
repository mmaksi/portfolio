import React from 'react';
import InfiniteScrollGallery from '../InfiniteScrollGallery';
import image1 from '@/assets/more/backflip.jpg';
import image2 from '@/assets/more/fire.jpg';
import image3 from '@/assets/more/kid.jpg';
import image4 from '@/assets/more/handstand.jpg';
import image5 from '@/assets/more/kids.jpg';
import image6 from '@/assets/more/thomas.jpg';
import image7 from '@/assets/more/people.jpg';
import image8 from '@/assets/more/vsit.jpg';
import image9 from '@/assets/more/hs.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const More = () => {
  return (
    <div className="w-full">
      <InfiniteScrollGallery images={images} />
    </div>
  );
};

export default More;
