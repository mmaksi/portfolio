import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import image1 from '@/assets/project-diagrams/sitemap-alert/dashboard.jpg';
import image2 from '@/assets/project-diagrams/sitemap-alert/big-o.jpg';
import image3 from '@/assets/project-diagrams/sitemap-alert/email.jpg';

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
  title: 'Sitemap Alert',
  category: 'Web App',
  description: `The aim of the project is to allow users to monitor up to 15 websites and track what pages are added every week and report that through an e-mail.`,
  outcomes: [
    'Saved the client 50 times server CPU power by implementing proper data structures.',
    'Saved 50% of the client’s budget by deploying the application to AWS EC2 and S3 bucket instead of Vercel infrastructure.',
    'Enabled secure HTTPS connections by creating an SSL certificate and an NGINX reverse proxy.',
    'Enabled weekly emails reports by using Mailgun, Node.js and cron jobs',
  ],
  features: [
    'Stored sitemaps files using S3 bucket.',
    'Deployed to EC2 behind an NGINX reverse proxy.',
    'Enabled server SSL certificate.',
    'Enabled sitemap extraction and comparison using Node.js.',
    "Sending weekly email reports about changes in competitors' sitemaps.",
  ],
  images: [image1, image2, image3],
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
      <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
      <p className="mb-6">{project.description}</p>
      <p>
        I built a simple UI with proper error handling using Next.js and Shadcn.
      </p>
      <div className="my-6 lg:mx-16">
        <Image src={image1} alt={`Image1`} width={1920} height={1080} />
      </div>
      <h2 className="text-2xl font-semibold mb-2">
        How I saved 50x of the CPU Power
      </h2>
      <div className="flex flex-col gap-4">
        <p>
          My job was to compare the sitemap pages of certain websites every
          single day and collect the new pages that were added to every website.
        </p>
        <p>
          An average developer without knowledge of data structures would create
          2 arrays of each website and compare them.
        </p>
        <p>
          Doing so will require 10K operations to be executed if you have 100
          pages. The reason is because the big O notation in this case would be
          O(n^2) where “n” is the number of pages on the website.
        </p>
        <p>
          My solution was using sets instead of arrays because that operation
          becomes O(n) instead of O(n^2) with sets. This reduces the number of
          operations from 10K to 200. Thus, I saved 50 operations on the server
          power for every user.
        </p>
      </div>
      <div className="lg:mx-80 my-6">
        <Image src={image2} alt={`Image2`} width={1920} height={1080} />
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-semibold mb-2">E-mail Report</h2>
        <p>
          The report landed in spam because the client did not pay for the full
          service in the time of screenshot.
        </p>
        <div className="lg:mx-80 my-6">
          <Image src={image3} alt={`Image3`} width={1920} height={1080} />
        </div>
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
          Next.js, Node.js, TypeScript, Prisma, MySQL, TailwindCSS, AWS EC2, AWS
          S3 Bucket, Mailgun, NGINX, cron jobs
        </p>
      </div>
    </div>
  );
}
