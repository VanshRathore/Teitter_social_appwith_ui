import React, { useState } from 'react';
import '../styles/LikesAndTimestamp.css';

// Function to calculate time difference
const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) return `${interval} years ago`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} hours ago`;
    interval = Math.floor(seconds / 60);
    return `${interval} minutes ago`;
};

function LikesAndTimestamp({ likeCount, retweetCount, replyCount, createdAt }) {
    const [likes, setLikes] = useState(likeCount);
    const [isLiked, setIsLiked] = useState(false);
    
    const createdAtDate = new Date(createdAt);

    const toggleLike = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className="likes-timestamp-wrapper">
            <div className="like-section" onClick={toggleLike}>
                <span className={`like-icon ${isLiked ? 'liked' : ''}`}>❤️</span>
                <span className="like-count">{likes}</span>
            </div>
            <div className="retweet-section">
                <span className="retweet-icon">🔁</span>
                <span className="retweet-count">{retweetCount}</span>
            </div>
            <div className="reply-section">
                <span className="reply-icon">💬</span>
                <span className="reply-count">{replyCount}</span>
            </div>
            <div className="created-at">
                {timeSince(createdAtDate)}
            </div>
        </div>
    );
}

export default React.memo(LikesAndTimestamp);
