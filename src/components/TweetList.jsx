import React from 'react';
import Tweet from "./Tweet";
import '../styles/TweetList.css';

function TweetList({ tweets, onEditTweet }) {
    return (
        <ul className="tweet-list">
            {
                tweets.map((tweet) => (
                    <li className="tweet-like-wrapper" key={tweet.id}>
                        <Tweet 
                            tweetId={tweet.id}
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            retweetCount={tweet.retweetCount}
                            replyCount={tweet.replyCount}
                            createdAt={tweet.createdAt.toString()} 
                            avatar={tweet.avatar} 
                            onEdit={onEditTweet}
                        />
                    </li>
                ))
            }
        </ul>
    );
}

export default TweetList;