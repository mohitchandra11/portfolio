import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { navLinks } from '../data/portfolioData.jsx';

const MobileNav = ({ isOpen, onClose }) => {
    const activeLinkClass = "bg-indigo-600 text-white";
    const inactiveLinkClass = "hover:bg-gray-200 dark:hover:bg-gray-800";

    const resumeLink = navLinks.find(link => link.id === 'resume');
    const mainLinks = navLinks.filter(link => link.id !== 'resume');

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.nav
                        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 z-50 p-8 flex flex-col"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-xl font-bold uppercase tracking-widest text-indigo-500">Navigation</h2>
                            <button onClick={onClose} aria-label="Close Menu" className="p-2 -mr-2">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Sections</h3>
                                <ul className="space-y-2">
                                    {mainLinks.map(link => (
                                        <li key={link.id}>
                                            <a href={`#${link.id}`} onClick={onClose} className={`flex items-center gap-4 p-3 rounded-lg transition-colors w-full text-left ${window.location.hash === `#${link.id}` ? activeLinkClass : inactiveLinkClass}`}>
                                                {link.icon}
                                                <span className="font-medium">{link.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 uppercase mt-10 mb-4">Quick Actions</h3>
                                {resumeLink && (
                                     <a href={resumeLink.href} download={resumeLink.download} className="flex items-center gap-4 p-4 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors w-full text-left">
                                        {resumeLink.icon}
                                        <span>{resumeLink.label}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.nav>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;
