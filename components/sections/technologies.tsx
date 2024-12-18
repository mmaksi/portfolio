import { technologies } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Technologies = () => {
  return (
    <div className="flex flex-col justify-center items-start px-6 mt-10 lg:px-16 lg:py-16 lg:mt-0">
      <h2 className="text-3xl font-bold mb-4">My Cool Tools</h2>
      <div className="flex flex-wrap lg:gap-6 gap-1 justify-center items-center">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="col-span-1 flex flex-col items-center p-2"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-2">
              <Image
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={50}
                height={50}
                className="lg:w-[64px]"
              />
            </div>
            <span className="text-sm text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
