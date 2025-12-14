import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun, Heart } from 'lucide-react';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const getIcon = () => {
        if (theme === 'light') return <Moon className="w-5 h-5" />;
        if (theme === 'dark') return <Heart className="w-5 h-5 text-pink-500" />;
        return <Sun className="w-5 h-5" />;
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm border-input">
            <div className="container flex items-center justify-between h-14 px-4 mx-auto max-w-4xl">
                <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <Heart className="w-6 h-6 text-primary" />
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent tracking-tight">
                        ChatN'Vibe
                    </span>
                </Link>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-input transition-colors"
                    aria-label="Toggle theme"
                >
                    {getIcon()}
                </button>
            </div>
        </header>
    );
};

export default Header;
