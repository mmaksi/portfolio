import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Link from 'next/link';
import React from 'react';

const Podcast = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto lg:px-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 px-6">
          Listen to my story on{' '}
          <Link
            className="text-blue-500 relative after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-0 after:bg-blue-500 after:transition-all after:duration-200 hover:after:w-full"
            href="https://x.com/neda_sefati"
          >
            Neda Sefati
          </Link>
          &apos;s Podcast
        </h2>
        <p className="lg:text-center text-lg mb-8 lg:px-32 px-6">
          Get inspired by listening to me talking to{' '}
          <span className="text-blue-500">Neda Sefati</span> on how I overcame
          challenges and learned to code in extreme situations during my life in
          Syria, and managed to build an immune system that sustained my mind
          and body with over 10+ years being disease-free.
        </p>
        <div className="lg:px-64 px-6">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={`https://www.youtube.com/embed/2vf-ODO0pc4?si=GDsr4CqQMZyjKyOG`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
