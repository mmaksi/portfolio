import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Projects from './projects';
import BlogPosts from './blogs';
import Videos from './videos';

export function TabsMenu() {
  return (
    <Tabs defaultValue="projects" className="mx-6 lg:mx-16">
      <TabsList className="grid w-full grid-cols-3 bg-top">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="blog">Articles</TabsTrigger>
        <TabsTrigger value="youtube">YouTube</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
      <TabsContent value="blog">
        <BlogPosts />
      </TabsContent>
      <TabsContent value="youtube">
        <Videos />
      </TabsContent>
    </Tabs>
  );
}
