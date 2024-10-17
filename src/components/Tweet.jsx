// Tweet.jsx
import React from 'react';
import '../styles/Tweet.css';
import LikesAndTimestamp from './LikesAndTimestamp';

function Tweet({ tweetId, content, likeCount, retweetCount, replyCount, createdAt, avatar }) {
    return (
        <div className="tweet-wrapper">
            <div className="tweet-avatar-content-wrapper">
                <img className="avatar" src={avatar} alt="User Avatar" />
                <div className="tweet-content">
                    <p>{content}</p>
                </div>
            </div>
            <LikesAndTimestamp 
                likeCount={likeCount} 
                retweetCount={retweetCount} 
                replyCount={replyCount} 
                createdAt={createdAt} 
            />
        </div>
    );
}

export default React.memo(Tweet);
