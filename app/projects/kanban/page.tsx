'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  images: string[];
};

const project: Project = {
  id: 1,
  title: 'Kanban Task Management System',
  category: 'Web Development',
  description: `A web application that allows users to manage their tasks in a Kanban board.`,
  outcomes: [
    '100% pixel-perfect development from Figma designs.',
    '100% responsive on all devices.',
    '100% score on Lighthouse and Page Insight in performance, accessibility, SEO and best practices.',
    'Loading speed = 1.2 second, which means better user experience and lower possibility for bounce rates.',
    'Total Blocking Time (TBT) = 500 milliseconds. The app was blocked from user interaction on first load only for 500 ms, which means excellent user experience in a world where users are expecting more from our digital products.',
    'Layout shift = 0. That means visual stability. Everything is rendered and loaded where they were intended to render.',
    '100% custom CSS. No library used. My app not only performs efficiently, but also it was designed carefully. Every single styling property is crafted with care and with an eye for details.',
  ],
  images: [
    ' https://i.ibb.co/kcLRDnp/kanban1.png',
    'https://i.ibb.co/GMm0Xyf/kanban2.png',
  ],
};

export default function ProjectDetailsPage() {
  return (
    <div className="min-h-svh bg-gradient-to-b from-top to-bottom pt-10 px-6 lg:px-16 lg:py-16">
      <Link href="/" passHref>
        <Button className="p-0 mb-6 bg-transparent hover:bg-transparent text-lg">
          <ArrowLeft className="mr-2 h-4 w-4" /> Home
        </Button>
      </Link>
      <div className="flex lg:items-center lg:justify-between lg:gap-0 flex-col gap-4 lg:flex-row mb-10">
        <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
        <Badge className="text-lg py-1 bg-foreground text-background w-[fit-content]">
          {project.category}
        </Badge>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Description</h2>
      <p className="mb-6">
        {project.description}{' '}
        <Link
          className="text-blue-600 hover:underline"
          href="https://markmaksi-kantask.vercel.app"
        >
          Live demo
        </Link>
      </p>
      <h2 className="text-2xl font-semibold mb-2">App Architecture:</h2>
      <div className="flex flex-col justify-center items-center">
        <Carousel className="w-[80%] my-6">
          <CarouselContent>
            {project.images.map((_, index) => (
              <CarouselItem key={index}>
                <Image
                  src={project.images[index]}
                  alt="Project Image"
                  width={1920}
                  height={1080}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-background" />
          <CarouselNext className="bg-background" />
        </Carousel>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-2">Outcomes</h2>
        <ul className="list-disc pl-5 mb-6">
          {project.outcomes.map((outcome, index) => (
            <li key={index} className="mb-2">
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
