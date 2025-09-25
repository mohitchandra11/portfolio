import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center">
        <motion.div className="flex justify-center items-center gap-x-4 md:gap-x-6" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-500 rounded-full"></span>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text" style={{ fontFamily: "'Orbitron', sans-serif" }}>{title}</h2>
            <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-purple-600 rounded-full"></span>
        </motion.div>
        <motion.div className="h-1 w-40 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-3 rounded-full" initial={{ width: 0 }} whileInView={{ width: '10rem' }} transition={{ delay: 0.3 }} viewport={{ once: true }}></motion.div>
        <motion.p className="text-gray-500 dark:text-gray-400 mt-4 uppercase tracking-[0.3em] text-sm" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>{subtitle}</motion.p>
    </div>
);

export default SectionHeader;
