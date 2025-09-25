import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu } from 'lucide-react';
import { portfolioOwner } from '../data/portfolioData.jsx';

const Header = ({ onMenuClick, handleThemeTransition, theme }) => {
    return (
        // This div hides the entire header on medium screens and up (md:hidden)
        <div className="md:hidden sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <header className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#about" className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text">
                    {portfolioOwner.name}
                </a>
                <div className="flex items-center gap-2">
                    {/* Added background and padding for a "boxed" look */}
                    <button onClick={handleThemeTransition} aria-label="Toggle Theme" title="Toggle Theme" className="p-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    {/* Added background and padding for a "boxed" look */}
                    <button onClick={onMenuClick} aria-label="Open Menu" title="Open Menu" className="p-2 rounded-lg transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
                        <Menu size={20} />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;

