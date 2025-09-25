import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu } from 'lucide-react';
import { portfolioOwner } from '../data/portfolioData';

const Header = ({ handleThemeTransition, theme, onMenuToggle }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {portfolioOwner.name}
                </motion.div>
                <div className="flex items-center gap-4">
                     <button onClick={handleThemeTransition} aria-label="Toggle Theme" title="Toggle Theme" className="relative group p-2 rounded-full transition-colors text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={onMenuToggle} aria-label="Open Menu" className="md:hidden p-2 rounded-full transition-colors text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800">
                        <Menu size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

