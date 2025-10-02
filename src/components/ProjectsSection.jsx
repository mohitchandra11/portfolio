import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { projectsData } from '../data/portfolioData.jsx';

const ProjectsSection = () => {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'All') setFilteredProjects(projectsData);
        else setFilteredProjects(projectsData.filter(p => p.cat === category));
    };

    return (
        <section id="projects" className="py-20 md:py-24">
            <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px]">
                <SectionHeader title="Projects" subtitle="Featured Work" />
                <motion.div className="flex justify-center flex-wrap gap-4 mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    {['All', 'Web', 'ML', 'AI'].map(cat => <button key={cat} onClick={() => handleFilter(cat)} className={`px-4 py-2 rounded-md transition ${activeFilter === cat ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'}`}>{cat}</button>)}
                </motion.div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((p, i) =>
                        <motion.div key={p.title + i} className="bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group backdrop-blur-sm" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                            <div className="relative overflow-hidden">
                                <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{p.cat}</span>
                            </div>
                            <div className="p-6"><h3 className="text-xl font-bold">{p.title}</h3><p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{p.desc}</p></div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

