// Twitter.jsx
import React, { useState, useCallback } from 'react';
import { TweetContext } from '../context/tweetContext';
import AddTweet from './AddTweet';
import TweetList from './TweetList';
import SidebarLeft from './SidebarLeft';
import RightSidebar from './RightSidebar';
import '../styles/Twitter.css';

const initialDummyTweets = [
    { id: 0, content: 'We have a new Twitter called Threads', likeCount: 3, createdAt: new Date(), avatar: 'https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg' },
    { id: 1, content: 'Hello, I’m new here', likeCount: 4, createdAt: new Date(), avatar: 'https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg' },
    { id: 2, content: 'What should we post?', likeCount: 2, createdAt: new Date(), avatar: 'https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg' }
];

function Twitter() {
    const [tweets, setTweets] = useState(initialDummyTweets);

    const handleEditTweet = useCallback((tweet) => {
        setTweets(tweets => 
            tweets.map((currentTweet) => {
                if (currentTweet.id === tweet.id) {
                    return tweet;
                } else {
                    return currentTweet;
                }
            })
        );
    }, []);

    return (
        <TweetContext.Provider value={{ tweets, setTweets }}>
            <div className="twitter-layout">
                <SidebarLeft />
                <div className="main-content">
                    <AddTweet />
                    <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
                </div>
                <RightSidebar />
            </div>
        </TweetContext.Provider>
    );
}

export default Twitter;
