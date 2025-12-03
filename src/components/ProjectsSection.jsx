import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { projectsData } from '../data/portfolioData.jsx';

const ProjectsSection = () => {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'All') {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(projectsData.filter(p =>
                Array.isArray(p.cat) ? p.cat.includes(category) : p.cat === category
            ));
        }
    };

    return (
        <section id="projects" className="py-20 md:py-24 relative">
            <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px]">
                <SectionHeader title="Projects" subtitle="Featured Work" />
                <motion.div className="flex justify-center flex-wrap gap-4 mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    {['All', 'Web', 'ML', 'AI'].map(cat => <button key={cat} onClick={() => handleFilter(cat)} className={`px-4 py-2 rounded-md transition ${activeFilter === cat ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'}`}>{cat}</button>)}
                </motion.div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((p, i) =>
                        <div key={p.id || p.title + i} className="group">
                            <Link
                                to={`/project/${p.id}`}
                                className="block"
                            >
                                <motion.div
                                    className="bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative overflow-hidden h-48 flex-shrink-0">
                                        <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold">{p.title}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-grow h-[2.5rem]">{p.desc}</p>
                                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                                            <div className="flex gap-2 flex-wrap">
                                                {Array.isArray(p.cat) ? (
                                                    p.cat.map(c => (
                                                        <span key={c} className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-full font-medium">{c}</span>
                                                    ))
                                                ) : (
                                                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-full font-medium">{p.cat}</span>
                                                )}
                                            </div>
                                            <div className="flex gap-3">
                                                {p.status === 'building' ? (
                                                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                                                        <span className="relative flex h-2 w-2 mr-1">
                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                                                        </span>
                                                        Building
                                                    </span>
                                                ) : (
                                                    <>
                                                        <a
                                                            href={p.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Github size={20} />
                                                        </a>
                                                        <a
                                                            href={p.liveUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <ExternalLink size={20} />
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

