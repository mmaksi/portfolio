import kanbanImage from '@/assets/kanban.png';
import astcImage from '@/assets/astc.png';
import uaefmaImage from '@/assets/uaefma.png';
import { StaticImageData } from 'next/image';

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
