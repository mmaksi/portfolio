import { Button } from '@/components/ui/button';
import YouTubeComment from './youtube-comment';
import { Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="flex lg:min-h-dvh pt-10 px-6 lg:px-16 lg:py-16">
      <div className="flex lg:flex-row gap-8 flex-col">
        <div className="flex-0 lg:w-3/5 md:w-full">
          <p className="text-xl font-bold mb-10">Mark Maksi</p>
          <h1 className="text-4xl font-bold leading-tight">
            Creating Web Applications and Websites from Frontend to Backend
          </h1>
          <p className="text-xl text-gray-400 my-8">
            Software developer specialized in web development from simple
            websites to large scale applications. Authored 22 technical articles
            with 30,000+ views, and educatonal content with over 500 subscribers
            on YouTube.
          </p>
          <Button className="flex text-lg p-5 items-center gap-2 bg-foreground text-background hover:text-foreground hover:bg-background hover:border-2 hover:border-foreground">
            <Mail className="w-6 h-6" />
            <span className="text-base">Get in Touch</span>
          </Button>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <YouTubeComment
              username="@paolahinostroza6659"
              time="6 months ago"
              likes={4}
              comment="Good video!! You've saved me. I've been awake for 24 hours and I have to submit a project in a couple of hours for a job interview. Greetings from Argentina!"
              avatar="https://img.freepik.com/free-photo/close-up-young-person-barbeque_23-2149271990.jpg"
              width={10}
            />
            <YouTubeComment
              time="5 months ago"
              likes={1}
              username="@kim92se64"
              comment="To be honest I never seen such a great tutorial on YouTube in terms of Docker especially when it comes to -i for STDIN and -t for STDOUT commands expalined in a very short video!!! Awesome work! Regards from Pakistan!"
              avatar="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              width={36}
            />
            <YouTubeComment
              time="5 months ago"
              likes={1}
              username="@kim92se64"
              comment="Great video! You touched almost every aspect of error handling in Node.js and TypeScript. Creating an abtract class for custom errors is a fantastic idea! 🎉"
              avatar="https://c8.alamy.com/comp/2RMDEK9/selfie-beach-and-man-with-a-smile-for-travel-social-media-and-profile-picture-with-freedom-sea-african-male-person-and-portrait-with-photo-with-2RMDEK9.jpg"
              width={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
