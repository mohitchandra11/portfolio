import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { navLinks } from '../data/portfolioData.jsx';

const MobileNav = ({ isOpen, onClose, activeSection }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#0a0a0a] z-50 flex flex-col p-6 border-l border-gray-800"
                        initial={{ x: '100%' }}
                        animate={{ x: '0%' }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                    >
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="flex items-center gap-2 text-md font-bold uppercase tracking-widest text-gray-300">
                                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                Navigation
                            </h2>
                            <button onClick={onClose} className="p-2 text-gray-400 rounded-full hover:text-white hover:bg-gray-800 transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                        
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4 flex items-center">
                                    <span className="w-4 h-px bg-gray-700 mr-3"></span>
                                    SECTIONS
                                </h3>
                                <ul className="space-y-1">
                                    {navLinks.filter(l => l.id !== 'resume').map(link => (
                                        <li key={link.id}>
                                            <a 
                                               href={`#${link.id}`} 
                                               onClick={onClose} 
                                               className={`relative flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium
                                                    ${activeSection === link.id 
                                                        ? 'text-white' 
                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                                                    }`
                                                }
                                            >
                                                {activeSection === link.id && (
                                                    <motion.div
                                                        layoutId="mobile-active-link"
                                                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 z-0"
                                                    />
                                                )}
                                                <span className="relative z-10">{link.icon}</span>
                                                <span className="relative z-10">{link.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mt-8">
                                <h3 className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-4 flex items-center">
                                    <span className="w-4 h-px bg-gray-700 mr-3"></span>
                                    QUICK ACTIONS
                                </h3>
                                <a 
                                   href={navLinks.find(l => l.id === 'resume')?.href} 
                                   download 
                                   className="relative flex items-center justify-center gap-3 w-full bg-green-600/20 border border-green-600 text-green-300 p-3 rounded-lg font-semibold hover:bg-green-600/30 hover:text-white transition-all duration-200 group overflow-hidden"
                                >
                                     <span className="absolute left-0 top-0 h-full w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <Download size={18} />
                                        <span>Download Resume</span>
                                    </span>
                                </a>
                                <p className="text-xs text-gray-600 text-center mt-2 font-medium">PDF • Updated Recently</p>
                            </div>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileNav;

