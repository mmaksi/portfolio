import AboutMe from '@/components/sections/about-me';
import Technologies from '@/components/sections/technologies';
import { TabsMenu } from '@/components/sections/tabs/tabs';
import Hero from '@/components/sections/hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <TabsMenu />
      <Technologies />
    </div>
  );
}
