import Image, { StaticImageData } from 'next/image';
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
import image1 from '@/assets/project-diagrams/kanban/dashboard1.png';
import image2 from '@/assets/project-diagrams/kanban/delete.png';
import image3 from '@/assets/project-diagrams/kanban/edit.png';
import image4 from '@/assets/project-diagrams/kanban/error-message.png';
import image5 from '@/assets/project-diagrams/kanban/image_original.png';
import image6 from '@/assets/project-diagrams/kanban/kanban1.png';
import image7 from '@/assets/project-diagrams/kanban/kanban2.png';
import image8 from '@/assets/project-diagrams/kanban/proper-error-handling.png';
import image9 from '@/assets/project-diagrams/kanban/results.png';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  outcomes: string[];
  features: string[];
  images: StaticImageData[];
};

const project: Project = {
  id: 1,
  title: 'Kanban Task Management System',
  category: 'Web App',
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
  features: [
    'Create/Edit/Delete columns inside different boards',
    'Create/Edit/Delete boards with names and columns',
    'Create/Edit/Delete tasks inside different columns',
    'Create/Edit/Delete subtasks inside different tasks and mark them as finished',
    'Track finished and unfinished subtasks',
    'Change the status of the task from one column to another',
    'Form validation on all forms and modals',
    'Error handling in a user-friendly way',
  ],
  images: [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
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
        <div className="text-lg py-1 px-2 rounded-md bg-foreground text-background w-[fit-content]">
          {project.category}
        </div>
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
      <h2 className="text-2xl font-semibold mb-0">App Architecture:</h2>
      <div className="flex flex-col justify-center items-center mb-4">
        <Carousel className="w-[80%] my-6">
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
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
        <h2 className="text-2xl font-semibold mb-2">
          Outcomes and Deliverables
        </h2>
        <ul className="list-none pl-5 mb-6">
          {project.outcomes.map((outcome, index) => (
            <li
              key={index}
              className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-2 before:w-2 before:bg-purple-500 before:rounded-full mb-3"
            >
              {outcome}
            </li>
          ))}
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-2">App Features</h2>
        <ul className="list-none pl-5 mb-6">
          {project.features.map((feature, index) => (
            <li
              key={index}
              className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-2 before:w-2 before:bg-purple-500 before:rounded-full mb-3"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
        <p className="list-none pl-5 mb-6">
          Next.js, Node.js, TypeScript, Prisma, MongoDB, TailwindCSS
        </p>
      </div>
    </div>
  );
}
