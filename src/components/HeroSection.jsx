import React from 'react';
import { motion } from 'framer-motion';
import { portfolioOwner, socialLinks, roles } from '../data/portfolioData.jsx';
import TypingAnimation from './TypingAnimation.jsx';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => (
    <section id="about" className="min-h-screen px-6 sm:px-12 md:px-24 flex flex-col-reverse md:flex-row items-center justify-center gap-12 relative overflow-hidden pt-20 md:pt-0">
        <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl -z-10"
            animate={{ x: [0, 20, 0], y: [0, -20, 0]}}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl -z-10"
            animate={{ x: [0, -20, 0], y: [0, 20, 0]}}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}   
        />
        <motion.div className="flex-1 text-center md:text-left relative z-20" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xl text-indigo-600 dark:text-indigo-300">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-extrabold my-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                    {portfolioOwner.name} 
                    <span className="block md:inline text-xl text-indigo-600 dark:text-indigo-300">({portfolioOwner.lastName})</span>
                </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold"><TypingAnimation roles={roles} /></h2>
            
            <div className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 space-y-2">
                <p>A passionate Data Scientist transforming data into actionable insights and building intelligent solutions.</p>
                <p>Crafting beautiful, responsive websites with modern technologies and a passion for creating engaging user experiences.</p>
            </div>
            
            <div className="mt-12 flex justify-center md:justify-start items-center gap-4">
                {socialLinks.map(link =>
                    <a key={link.name} href={link.url} aria-label={link.name} target="_blank" rel="noopener noreferrer" className={`relative group p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.color}`} {...(link.download && { download: true })}>
                        {link.icon}
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-gray-800">{link.name}</span>
                    </a>
                )}
            </div>
        </motion.div>
        <motion.div className="flex-1 flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400/30 to-pink-400/30 dark:from-indigo-500/30 dark:to-pink-500/30 rounded-full blur-2xl opacity-75 animate-pulse"></div>
                <motion.div className="absolute w-20 h-20 bg-indigo-400/30 dark:bg-indigo-500/30 rounded-full -top-4 -left-4" animate={{ y: [0, 10, 0], x: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}></motion.div>
                <motion.div className="absolute w-24 h-24 bg-pink-400/30 dark:bg-pink-500/30 rounded-full -bottom-4 -right-4" animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}></motion.div>
                <motion.img src="pfp.png" alt={`${portfolioOwner.name} Profile`} className="relative w-full h-full object-cover rounded-full border-2 border-blue-800 dark:border-blue-800 shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            </div>
        </motion.div>
         <motion.a href="#skills" className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
        >
            <span className="text-xs">Scroll Down</span>
            <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown size={20} />
            </motion.div>
        </motion.a>
    </section>
);

export default HeroSection;

