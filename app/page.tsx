import AboutMe from '@/components/sections/about-me';
import Technologies from '@/components/sections/technologies';
import { TabsMenu } from '@/components/sections/tabs/tabs';
import Hero from '@/components/sections/hero';
import Podcast from '@/components/sections/podcast';
import { AnimatedTestimonials } from '@/components/sections/testimonials';
import image1 from '@/assets/testimonials/chams.jpeg';
import image2 from '@/assets/testimonials/timo.jpeg';
import image3 from '@/assets/testimonials/tappbrothers.jpg';
import image4 from '@/assets/testimonials/andrew.jpeg';
import More from '@/components/sections/More';

const testimonials = [
  {
    quote:
      '"I have known Mark for over 10 years. Mark joined one of our online fitness challenges early in its inception. He, with his passion to help others, took a leadership role in this fitness community. For years he’s stayed with our company and helped grow our community. During this time, He won several our fitness challenges. This is an award voted by the members of the community to the person who displays the highest qualities of fitness, leadership, and inspiration. Mark is a leader!" ',
    name: 'Thomas Tapp',
    designation: 'Co-Founder of Tapp Brothers LLC',
    src: image3,
  },
  {
    quote:
      '"I had the privilege of mentoring Mark for several years in his journey to become a Fullstack Developer, and I have been consistently impressed with his professionalism, skillset, and insatiable curiosity for learning. Mark has a solid foundation in a wide range of technology stacks. He is not simply competent with these tools; rather, he is great at leveraging their strengths to produce elegant, efficient, and robust solutions."',
    name: 'Timo Helasvuo',
    designation: 'Project Manager',
    src: image2,
  },
  {
    quote: '"Mark is a disciplined engineer who delivers."',
    name: 'Chams Eddine Larbi',
    designation: 'Project Manager',
    src: image1,
  },
  {
    quote:
      '"Mark is a great content creator for developers. He has a talent for making advanced topics simple and engaging."',
    name: 'Andrew Petrov',
    designation: 'CTO at Cybionyx Inc.',
    src: image4,
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Podcast />
      <AboutMe />
      <AnimatedTestimonials testimonials={testimonials} />
      <TabsMenu />
      <Technologies />
      <More />
    </div>
  );
}
