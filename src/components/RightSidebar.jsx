import React from 'react';
import '../styles/RightSidebar.css';

function RightSidebar() {
    return (
        <aside className="sidebar-right">
            <div className="trending-section">
                <h3>Trending</h3>
                <ul className="trending-list">
                    <li className="trending-item">#XIsGreat</li>
                    <li className="trending-item">#ReactJS</li>
                    <li className="trending-item">#FrontendDev</li>
                </ul>
            </div>
            <div className="follow-suggestions">
                <h3>Who to follow</h3>
                <ul className="suggestions-list">
                    <li className="suggestion-item">User 1</li>
                    <li className="suggestion-item">User 2</li>
                    <li className="suggestion-item">User 3</li>
                </ul>
            </div>
        </aside>
    );
}

export default RightSidebar;