import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader.jsx';
import { skillSet } from '../data/portfolioData.jsx';

const SkillsSection = () => (
    <section id="skills" className="py-20 md:py-24">
        <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px]">
            <SectionHeader title="Skills" subtitle="Technical Expertise" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillSet.map((category, i) => (
                    <motion.div key={category.category} className="bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 backdrop-blur-sm" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                        <h3 className="flex items-center gap-3 text-xl font-bold mb-4">{category.icon}<span>{category.category}</span></h3>
                        <ul className="space-y-2">
                            {category.skills.map(skill => (
                                <li key={skill.name} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;

