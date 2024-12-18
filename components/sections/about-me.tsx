import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-gradient-to-b from-top to-bottom rounded-lg mx-6 py-10 mt-16 p-8 lg:px-16 lg:mx-16">
      <div className="flex justify-center items-start">
        <Image
          src="https://pbs.twimg.com/profile_images/1836116652137627648/GGYr1o8x_400x400.jpg"
          alt="Profile Image"
          width={170}
          height={170}
          className="rounded-full lg:w-[600px]"
        />
      </div>
      <div className="flex flex-col gap-4 lg:justify-start lg:items-start justify-center items-center">
        <h3 className="text-3xl font-bold leading-tight">ABOUT ME</h3>
        <p>
          Hello there! I&rsquo;m Mark, a professional JavaScript Engineer.
          I&rsquo;m dedicated to building performant, scalable web applications
          to businesses of different niches that can change society. I am an
          active content creator for the developers community.
        </p>
        <p>
          I believe that not until one begins to write till they discover
          one&rsquo;s ignorance. Thus, I am deeply passionate about technical
          writing. The technical articles I&rsquo;ve written are deep, precise,
          and professional. I take great pride in knowing that my technical
          writings have reached a global audience, with over 40,000 views
          worldwide. Many of my blog posts are also in video format on YouTube
          with over 560+ subscribers.
        </p>
        <div className="flex flex-row gap-7 mt-8">
          <Link
            href="https://x.com/markmaksi_"
            className="border-foreground hover:border-b-2 transition-border duration-75 ease-linear"
          >
            X
          </Link>
          <Link
            href="markmaksi.hashnode.dev"
            className="border-foreground hover:border-b-2 transition-border duration-75 ease-linear"
          >
            Articles
          </Link>
          <Link
            href="https://www.youtube.com/@markmaksi"
            className="border-foreground hover:border-b-2 transition-border duration-75 ease-linear"
          >
            YouTube
          </Link>
          <Link
            href="https://github.com/mmaksi"
            className="border-foreground hover:border-b-2 transition-border duration-75 ease-linear"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
