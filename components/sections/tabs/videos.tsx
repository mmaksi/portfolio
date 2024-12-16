import React from 'react';
import { AspectRatio } from '../../ui/aspect-ratio';

interface Video {
  id: string;
  title: string;
  categories: string[];
}

const videos: Video[] = [
  {
    id: 'pnLC-9waA44',
    title:
      'Practical Beginner Guide to Testing - Next.js | React | Jest | React Testing Library (RTL)',
    categories: ['Testing', 'next.js', 'Jest', 'React Testing Library'],
  },
  {
    id: 'rZDi6pVvhL0',
    title:
      'Docker Introduction For Beginners - No-Coding Detailed Intro To Docker 🐳',
    categories: ['Docker', 'Containers'],
  },
  {
    id: 'WwE0DoNtSCo',
    title: 'Server Components vs Client Components in Next.js',
    categories: ['Next.js', 'SSR', 'CSR'],
  },
  {
    id: '5MhKXYpWVO8',
    title: 'Cookies vs. JWT Authentication',
    categories: ['JWT', 'Authentication', 'Cookies'],
  },
];

export default function Videos() {
  return (
    <div className="container mx-auto py-2">
      <h1 className="text-3xl font-bold mb-4">Featured YouTube Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="rounded-lg shadow-md overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AspectRatio>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <div className="flex flex-wrap gap-2">
                {video.categories.map((category) => (
                  <span
                    key={category}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
