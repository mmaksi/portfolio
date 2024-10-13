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
import image1 from '@/assets/project-diagrams/event-exchange/1.png';
import image2 from '@/assets/project-diagrams/event-exchange/2.png';
import image3 from '@/assets/project-diagrams/event-exchange/3.png';
import image4 from '@/assets/project-diagrams/event-exchange/4.png';

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
  title: 'Event Exchange',
  category: 'Web Application',
  description: `A web application that allows event creators to sell tickets.
    The application is under development, and you can track my development journey
    on GitHub down below. 👇`,
  outcomes: [
    `Achieved 100% responsiveness on all devices by using mobile-first development.`,
    `Achieved scalability by using microservices architecture.`,
    `Improved code quality by automating testing using a CI pipeline 
      and Test-driven development TDD approach.`,
    `Saved 80% of file storage costs by moving from mongoDB to AWS S3.`,
    `Saved server's CPU power by integrating a highly secure 
      file upload system without touching the server.`,
    `Prevented scamming by implementing rate limiting and a secure 
      authentication and authorization using JWT, 
      Express.js, Nodemailer and Passport.js (to be added).`,
    `Created clean and scalable codebase by building a common module to centralize 
      app-level operations like 
      error handling, user detection, messages exchange among the entire application and 
      published it to the NPM registry.`,
    `Saved endless of hours and achieved seamless developer experience by utilizing 
      TypeScript in the NATS JetStream message broker 
      to make coding predictable and error-free.`,
    `Achieved consistent API responses by building a smart error handling middleware
      using TypeScript and OOP.`,
  ],
  features: [
    'Login using Google OAuth, email/password.',
    'Allow users to see all events in different categories.',
    'Allow signed-in users to create tickets and edit them.',
    'Allow signed-in users to sell and buy tickets.',
    'More features coming soon...',
  ],
  images: [image1, image2, image3, image4],
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
      <ul className="list-none pl-5 mb-6">
        <li>
          <Link
            className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-2 before:w-2 before:bg-white before:rounded-full mb-3 text-blue-500 hover:underline"
            href="https://github.com/mmaksi/kanban"
          >
            Codebase on GitHub
          </Link>
        </li>
        <li>
          {/* <Link
            className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-2 before:w-2 before:bg-white before:rounded-full mb-3 text-blue-500 hover:underline"
            href="https://markmaksi-kantask.vercel.app"
          >
          </Link> */}
          Live Demo coming soo!
        </li>
      </ul>
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
              className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full mb-3"
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
              className="relative pl-6 before:absolute before:left-0 before:top-1 before:h-2 before:w-2 before:bg-blue-500 before:rounded-full mb-3"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Tech Stack</h2>
        <p className="list-none pl-5 mb-6">
          Next.js, Node.js, TypeScript, MongoDB, TailwindCSS, NATS JetStream,
          AWS S3, GitHub Actions, Docker, Kubernetes, DigitalOcean
        </p>
      </div>
    </div>
  );
}
