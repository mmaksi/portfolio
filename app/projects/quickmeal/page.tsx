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
import image1 from '@/assets/project-diagrams/quickmeal/1.png';
import image2 from '@/assets/project-diagrams/quickmeal/2.png';
import image3 from '@/assets/project-diagrams/quickmeal/3.png';
import image4 from '@/assets/project-diagrams/quickmeal/4.png';
import image5 from '@/assets/project-diagrams/quickmeal/5.png';

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
  title: 'QuickMeal',
  category: 'Mobile App',
  description: `QuickMeal is a cross-platform open source mobile app that allows registered users to look for restaurants in a specific area and see their locations on the map and check their services and other restaurant's details!`,
  outcomes: [
    '100% pixel-perfect development from Figma designs.',
    'Enabled users to search for restaurants in their areas on the map.',
    'Created a scalable design system for the brand identity using TailwindCSS and Styled Components.',
  ],
  features: [
    'Implemented a global state management system using React Context API.',
    'Implemented quick access to certain data using Expo Async Storage.',
    'Implemented user authentication and database using Firebase and Firestore.',
    'Implemented Google/Apple Maps using React Native Maps.',
    'Implemented Navigation between different tabs and sub-tabs.',
    'Implemented a scalable design structure for the brand identity that allows for instant style changes for colors and fonts and spacing on the entire application. Thanks to Styled Components and Themes.',
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
      <p className="mb-6">{project.description}</p>
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
          React Native, Expo, TypeScript, React Native Paper, Styled Components,
          Firebase, Firestore.
        </p>
      </div>
    </div>
  );
}
