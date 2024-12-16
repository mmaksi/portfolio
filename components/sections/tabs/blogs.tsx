import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import productionSetup from '@/assets/blog/docker.avif';
import errorHandling from '@/assets/blog/error hadnling.avif';
import ssr from '@/assets/blog/ssr.avif';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: StaticImageData;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title:
      'How To Handle Errors in Node.js & TypeScript Like a Senior Developer',
    description:
      'In this article I will show you how to use TypeScript to write consistent and DRY error handling logic using the concept of abstract classes. This...',
    date: 'Dec 28, 2023',
    readTime: '5 min read',
    image: errorHandling,
    url: 'https://markmaksi.hashnode.dev/how-to-handle-errors-in-nodejs-typescript-like-a-senior-developer',
  },
  {
    id: 2,
    title:
      'Build a React.js CI pipeline: Learn Docker, Docker Compose, GitHub Actions',
    description:
      "It's easy to setup a local development environment on your Windows or MacOS machine, but unfortunately, servers run on Linux systems. This difference...",
    date: 'Jul 23, 2024',
    readTime: '7 min read',
    image: productionSetup,
    url: 'https://markmaksi.hashnode.dev/react-ci-pipeline',
  },
  {
    id: 3,
    title: 'How To Write SSR in a Kubernetes Cluster? - Next.js as Example',
    description:
      'When writing Server-Side Rendering logic in Next.js in a microservices architecture in Kubernetes, there are two interesting situations we face that I...',
    date: 'Apr 30, 2024',
    readTime: '10 min read',
    image: ssr,
    url: 'https://markmaksi.hashnode.dev/ssr-in-kubernetes',
  },
];

export default function BlogPosts() {
  return (
    <div className="container mx-auto pt-2">
      <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link href={post.url} key={post.id}>
            <div
              key={post.id}
              className="border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <div className="text-sm text-gray-500 mb-4">
                  <span>{post.date}</span> • <span>{post.readTime}</span>
                </div>
                <p className="text-foreground mb-4">{post.description}</p>
                <Link
                  href={`${post.url}`}
                  className="text-blue-600 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
