// App.js
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Twitter from './components/Twitter';
import './index.css'; // Make sure this is imported

function App() {
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <div className={isDarkTheme ? 'dark-theme' : ''}>
            <Twitter />
        </div>
    );
}

export default App;
