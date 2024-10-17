import { createContext } from 'react';

const initialDummyTweets = [
  { 
    id: 0, 
    content: 'We have a new Twitter called Threads', 
    likeCount: 3, 
    createdAt: new Date(),
    avatar: 'https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg' 
  },
  { 
    id: 1, 
    content: 'Hello, I’m new here', 
    likeCount: 4, 
    createdAt: new Date(),
    avatar: 'https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg' 
  },
  { 
    id: 2, 
    content: 'What should we post?', 
    likeCount: 2, 
    createdAt: new Date(),
    avatar: 'https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg' 
  }
];

export const TweetContext = createContext(initialDummyTweets);