
import React, { useState, useContext } from 'react';
import { TweetContext } from '../context/tweetContext';
import '../styles/AddTweet.css';

const AddTweet = () => {
    const [content, setContent] = useState('');
    const { setTweets } = useContext(TweetContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            setTweets((prevTweets) => [
                ...prevTweets,
                { id: prevTweets.length, content, likeCount: 0, createdAt: new Date(), avatar: 'https://i.pinimg.com/736x/96/91/28/9691288a3fadba6a8e6173d4eea20488.jpg' }
            ]);
            setContent('');
        }
    };

    return (
        <div className="add-tweet-container">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What's happening?"
                        className="tweet-input"
                    />
                </div>
                <div className="footer">
                    <button type="submit" className="tweet-submit" disabled={!content.trim()}>
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTweet;