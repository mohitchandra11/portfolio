import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import Carousel from './Carousel';
import { internshipsData } from '../data/portfolioData.jsx';

const InternshipsSection = () => (
    <section id="internships" className="py-20 md:py-24">
        <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px]">
            <SectionHeader title="Internships" subtitle="Professional Experience" />
            <div className="mt-12">
                <Carousel items={internshipsData.map((item, i) => (
                    <motion.div key={i} className="flex-shrink-0 w-80 snap-center bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden backdrop-blur-sm" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                        <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                        <div className="p-4"><h3 className="font-bold">{item.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{item.duration}</p></div>
                    </motion.div>
                ))} />
            </div>
        </div>
    </section>
);

export default InternshipsSection;
