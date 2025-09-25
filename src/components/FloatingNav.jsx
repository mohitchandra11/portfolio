import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { navLinks } from '../data/portfolioData.jsx';
import DockIcon from './DockIcon';

const FloatingNav = ({ activeSection, mousePosition, handleThemeTransition, theme }) => {
    const [isHoveringDock, setIsHoveringDock] = useState(false);
    return (
        <motion.nav
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
            onHoverStart={() => setIsHoveringDock(true)}
            onHoverEnd={() => setIsHoveringDock(false)}
        >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full flex items-end gap-1 p-2 shadow-lg">
                {navLinks.map((link) => (
                    <React.Fragment key={link.id}>
                        <DockIcon link={link} activeSection={activeSection} mousePosition={mousePosition} isHoveringDock={isHoveringDock} />
                        {link.id === 'contact' && <span className="text-gray-400 dark:text-gray-600 mx-1 self-center h-6 border-l border-gray-300 dark:border-gray-700"></span>}
                    </React.Fragment>
                ))}
                <span className="text-gray-400 dark:text-gray-600 mx-1 self-center h-6 border-l border-gray-300 dark:border-gray-700"></span>
                <button onClick={handleThemeTransition} aria-label="Toggle Theme" title="Toggle Theme" className="relative group p-3 rounded-full transition-colors self-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white">
                    {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-gray-800">
                        Toggle Theme
                    </span>
                </button>
            </div>
        </motion.nav>
    );
};

export default FloatingNav;
