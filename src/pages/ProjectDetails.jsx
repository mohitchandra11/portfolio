import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData.jsx';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectsData.find(p => p.id === id);
        setProject(foundProject);
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
                <p>Project not found.</p>
                <Link to="/" className="ml-4 text-indigo-600 hover:underline">Go Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white pt-24 pb-12 px-6 sm:px-12 md:px-24">
            <Link to="/#projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-8">
                <ArrowLeft size={20} className="mr-2" /> Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-10">
                    <img src={project.img} alt={project.title} className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-10">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {Array.isArray(project.cat) ? (
                                    project.cat.map(c => (
                                        <span key={c} className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">{c}</span>
                                    ))
                                ) : (
                                    <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">{project.cat}</span>
                                )}
                            </div>
                            <h1 className="text-3xl sm:text-5xl font-bold text-white">{project.title}</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                                {project.fullDesc || project.desc}
                            </p>
                        </div>

                        {project.keyFeatures && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                                <ul className="space-y-3">
                                    {project.keyFeatures.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                            <span className="mt-1.5 w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-xl font-bold mb-4">Technologies</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies && project.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {project.status === 'building' ? (
                                <div className="flex items-center justify-center p-6 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800 rounded-xl">
                                    <p className="text-yellow-700 dark:text-yellow-400 font-semibold text-lg flex items-center gap-3">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                                        </span>
                                        Currently Building
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition shadow-lg ${project.liveUrl === '#' ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed text-gray-500' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20'}`}
                                        onClick={e => project.liveUrl === '#' && e.preventDefault()}
                                    >
                                        <ExternalLink size={20} />
                                        View Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition border ${project.githubUrl === '#' ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed border-gray-200 dark:border-gray-700' : 'bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700'}`}
                                        onClick={e => project.githubUrl === '#' && e.preventDefault()}
                                    >
                                        <Github size={20} />
                                        View Source
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
