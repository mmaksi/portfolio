import AboutMe from '@/components/about-me';
import Hero from '@/components/hero';
import { TabsMenu } from '@/components/tabs';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <TabsMenu />
    </div>
  );
}
