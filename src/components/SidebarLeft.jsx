
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/SidebarLeft.css';

function SidebarLeft() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <aside className="sidebar-left">
            <div className="sidebar-logo">Social</div>
            
            <nav className="sidebar-menu">
                <ul>
                    <li className="sidebar-item active">Home</li>
                    <li className="sidebar-item">Explore</li>
                    <li className="sidebar-item">Notifications</li>
                    <li className="sidebar-item">Messages</li>
                    <li className="sidebar-item">Bookmarks</li>
                    <li className="sidebar-item">Lists</li>
                    <li className="sidebar-item">Profile</li>
                    <li className="sidebar-item">More</li>
                </ul>
                <button onClick={toggleTheme} className="theme-toggle-button">
                Toggle Theme
                </button>
            </nav>
        </aside>
    );
}

export default SidebarLeft;
