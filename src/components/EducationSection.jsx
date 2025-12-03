import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeader from '/src/components/SectionHeader.jsx';
import { educationData } from '/src/data/portfolioData.jsx';

const EducationSection = () => (
    <section id="education" className="py-20 md:py-24">
        <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px] max-w-6xl">
            <SectionHeader title="Education" subtitle="Academic Journey" />
            <div className="relative mt-16">
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
                {educationData.map((item, index) => (
                    <motion.div key={index} className="relative pl-12 md:pl-0 mb-12" initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className={`flex items-start md:items-center md:gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className="md:flex-1"></div>
                            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 bg-gray-50 dark:bg-gray-900 border-2 border-indigo-500 rounded-full w-10 h-10 flex items-center justify-center z-10"><GraduationCap /></div>
                            <div className="md:flex-1">
                                <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                                    <p className="text-sm text-indigo-600 dark:text-indigo-400">{item.duration}</p>
                                    <div className="flex justify-between items-start sm:items-center gap-2">
                                        <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                                        {item.grade && (
                                            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-2 py-1 rounded whitespace-nowrap mt-1 sm:mt-0">
                                                {item.grade}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.school}</p>
                                    <ul className="mt-2 text-gray-600 dark:text-gray-300 text-sm list-disc list-inside space-y-1">
                                        {item.descBullets ? item.descBullets.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        )) : (
                                            <li>{item.description}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default EducationSection;

