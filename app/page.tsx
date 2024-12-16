import AboutMe from '@/components/sections/about-me';
import Technologies from '@/components/sections/technologies';
import { TabsMenu } from '@/components/sections/tabs/tabs';
import Hero from '@/components/sections/hero';
import Podcast from '@/components/sections/podcast';

export default function Home() {
  return (
    <div>
      <Hero />
      <Podcast />
      <AboutMe />
      <TabsMenu />
      <Technologies />
    </div>
  );
}
