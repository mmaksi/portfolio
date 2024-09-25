import { projects } from '@/constants';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <section>
      <div className="container mx-auto px-4 pt-8">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <Link href={project.url}>
                <CardContent className="p-0 relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold text-center px-4">
                      {project.title}
                    </h3>
                  </div>
                  {project.categories.map((category) => (
                    <Badge
                      key={category}
                      className={`absolute top-2 left-2 bg-${project.background} text-${project.text}`}
                    >
                      {category}
                    </Badge>
                  ))}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
