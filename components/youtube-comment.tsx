import { ThumbsUp, MessageSquare } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

interface IProps {
  username: string;
  time: string;
  likes: number;
  comment: string;
  avatar: string;
  width: number;
}

const YouTubeComment: React.FC<IProps> = ({
  username,
  time,
  likes,
  comment,
  avatar,
}) => {
  return (
    <Card className="bg-background">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="flex justify-center items-center">
            <Image
              src={avatar}
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full" // Tailwind class for rounded image
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-500 text-xs">
              <h3>{username}</h3>
              <span>{time}</span>
            </div>
            <p className="text-sm text-foreground">{comment}</p>
            <div className="flex items-center space-x-4 text-foreground">
              <button className="flex items-center space-x-1">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-xs">{likes}</span>
              </button>
              <button className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs">Reply</span>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default YouTubeComment;
