import kanbanImage from '@/assets/kanban.png';
import astcImage from '@/assets/astc.png';
import uaefmaImage from '@/assets/uaefma.png';
import { StaticImageData } from 'next/image';

import Deno from '@/assets/logos/deno.png';
import Docker from '@/assets/logos/docker.png';
import Express from '@/assets/logos/express.png';
import Git from '@/assets/logos/git.png';
import Jira from '@/assets/logos/jira.png';
import Mongo from '@/assets/logos/mongo.png';
import Nestjs from '@/assets/logos/nestjs.svg';
import Nextjs from '@/assets/logos/nextjs.png';
import Nodejs from '@/assets/logos/nodejs.png';
import Notion from '@/assets/logos/notion.png';
import Postgres from '@/assets/logos/postgres.png';
import Prisma from '@/assets/logos/prisma.png';
import Python from '@/assets/logos/python.png';
import ReactLogo from '@/assets/logos/react.png';
import Tailwindcss from '@/assets/logos/tailwindcss.png';
import Typescript from '@/assets/logos/typescript.png';

interface Project {
  id: number;
  title: string;
  categories: string[];
  imageUrl: StaticImageData;
  url: string;
  background?: string;
  text?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ASTC Dubai',
    url: 'https://www.astc.com',
    categories: ['Web Development'],
    imageUrl: astcImage,
    text: 'background',
    background: 'foreground',
  },
  {
    id: 2,
    title: 'UAEFMA Dubai',
    url: 'https://www.uaefma.com',
    categories: ['Web Development'],
    imageUrl: uaefmaImage,
    text: 'foreground',
    background: 'background',
  },
  {
    id: 3,
    title: 'Kanban Task Management System',
    url: '/projects/kanban',
    categories: ['Web Development'],
    imageUrl: kanbanImage,
    text: 'background',
    background: 'foreground',
  },
  {
    id: 4,
    title: 'Event Exchange',
    url: '/projects/event-exchange',
    categories: ['Personal Business'],
    imageUrl: kanbanImage,
    text: 'background',
    background: 'foreground',
  },
  {
    id: 5,
    title: 'TechFAQs',
    url: '/projects/techfaqs',
    categories: ['Web Development'],
    imageUrl: kanbanImage,
    text: 'background',
    background: 'foreground',
  },
];

export const technologies = [
  {
    name: 'Typescript',
    icon: Typescript,
  },
  {
    name: 'Nextjs',
    icon: Nextjs,
  },
  {
    name: 'React',
    icon: ReactLogo,
  },
  {
    name: 'Tailwindcss',
    icon: Tailwindcss,
  },
  {
    name: 'Nodejs',
    icon: Nodejs,
  },
  {
    name: 'Express.js',
    icon: Express,
  },
  {
    name: 'Nestjs',
    icon: Nestjs,
  },
  {
    name: 'Deno',
    icon: Deno,
  },
  {
    name: 'PostgreSQL',
    icon: Postgres,
  },
  {
    name: 'MongoDB',
    icon: Mongo,
  },
  {
    name: 'Prisma',
    icon: Prisma,
  },
  {
    name: 'Docker',
    icon: Docker,
  },
  {
    name: 'Python',
    icon: Python,
  },
  {
    name: 'Git',
    icon: Git,
  },
  {
    name: 'Jira',
    icon: Jira,
  },
  {
    name: 'Notion',
    icon: Notion,
  },
];
