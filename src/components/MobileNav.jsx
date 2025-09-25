import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { navLinks } from '../data/portfolioData.jsx';

const MobileNav = ({ isOpen, onClose, activeSection }) => {
    const resumeLink = navLinks.find(link => link.id === 'resume');
    const mainLinks = navLinks.filter(link => link.id !== 'resume');

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.nav
                        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 z-50 p-6 flex flex-col md:hidden"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <div className="flex justify-between items-center mb-10">
                            {/* Added dot and styling to Navigation title */}
                            <h2 className="text-lg font-bold flex items-center">
                                <span className="text-indigo-500 text-3xl mr-2">•</span>
                                <span className="uppercase tracking-widest">Navigation</span>
                            </h2>
                            <button onClick={onClose} aria-label="Close Menu" className="p-2 -mr-2">
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                {/* Added vertical bar and styling to SECTIONS */}
                                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4 flex items-center">
                                    <span className="w-1 h-4 bg-indigo-500 rounded-full mr-3"></span>
                                    SECTIONS
                                </h3>
                                <ul className="space-y-2">
                                    {mainLinks.map(link => (
                                        <li key={link.id}>
                                            <a href={`#${link.id}`} onClick={onClose} className={`flex items-center gap-4 p-3 rounded-lg transition-colors w-full text-left ${activeSection === link.id ? 'bg-indigo-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                                                {React.cloneElement(link.icon, { size: 20 })}
                                                <span className="font-medium">{link.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mt-10">
                                {/* Added vertical bar and styling to QUICK ACTIONS */}
                                <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4 flex items-center">
                                     <span className="w-1 h-4 bg-green-500 rounded-full mr-3"></span>
                                    QUICK ACTIONS
                                </h3>
                                {resumeLink && (
                                     <a href={resumeLink.href} download={resumeLink.download} className="group flex flex-col p-4 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-500 hover:text-green-400 transition-colors w-full text-left">
                                        <div className="flex items-center gap-4 font-semibold">
                                            {React.cloneElement(resumeLink.icon, { size: 20 })}
                                            <span>{resumeLink.label}</span>
                                        </div>
                                        {/* Added subtitle */}
                                        <p className="text-xs text-green-500/70 mt-1 ml-9 group-hover:text-green-400/70">PDF • Updated Recently</p>
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

