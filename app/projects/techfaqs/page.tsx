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
import image1 from '@/assets/project-diagrams/tech-faqs/ask-question.png';
import image2 from '@/assets/project-diagrams/tech-faqs/community.png';
import image3 from '@/assets/project-diagrams/tech-faqs/home.png';
import image4 from '@/assets/project-diagrams/tech-faqs/saved.png';
import image5 from '@/assets/project-diagrams/tech-faqs/tags.png';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  images: StaticImageData[];
};

const project: Project = {
  id: 1,
  title: 'TechFAQs',
  category: 'Web App',
  description: `A web application that allows developers to share tech questions and earn badges for their activity on the platform.`,
  features: [
    'Ask questions and answer questions.',
    'Upvote, Downvote, and save questions.',
    'Include code snippets in your answers.',
    'Searching and filtering.',
    'View Top Questions and Popular Tags.',
    'Built-in recommendation algorithm.',
    'Global Search across the database.',
    'View all tags and tag-related questions.',
    'View and Edit your profile.',
    'Built-in badge system for earning badges.',
    'View, search jobs or filter by location.',
    'Light and Dark Mode.',
  ],
  images: [image1, image2, image3, image4, image5],
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
          href="https://devfaqs.vercel.app"
        >
          Live demo
        </Link>
      </p>
      <h2 className="text-2xl font-semibold mb-0">Demo Screenshots:</h2>
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
      {/* <div className="prose dark:prose-invert max-w-none">
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
      </div> */}
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-2">App Features</h2>
        <ul className="list-none pl-5 mb-6">
          {project.features.map((feature, index) => (
            <li
              key={index}
              className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-2 before:w-2 before:bg-orange-500 before:rounded-full mb-3"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
        <p className="list-none pl-5 mb-6">
          Next.js, Node.js, TypeScript, Prisma, MongoDB, TailwindCSS, Clerk,
          Shadcn, Zod, TinyMCE for the editor, JSearch API for job searching
        </p>
      </div>
    </div>
  );
}
