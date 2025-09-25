import React, { useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const DockIcon = ({ link, activeSection, mousePosition, isHoveringDock }) => {
    const ref = useRef(null);
    const { x } = mousePosition;
    const distance = ref.current ? Math.abs(x - (ref.current.getBoundingClientRect().left + ref.current.clientWidth / 2)) : Infinity;
    const distanceSpring = useSpring(distance, { stiffness: 400, damping: 20 });
    const scaleOnHover = useTransform(distanceSpring, [0, 100], [1.5, 1]);
    const scale = isHoveringDock ? scaleOnHover : 1;

    return (
        <motion.a
            ref={ref}
            href={link.href || `#${link.id}`}
            aria-label={link.label}
            className={`relative group p-3 rounded-full transition-colors ${activeSection === link.id ? 'bg-indigo-600 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}
            style={{ scale: activeSection === link.id ? undefined : scale }}
            {...(link.download && { download: true })}
            animate={activeSection === link.id ? { scale: [1, 1.15, 1], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } } : {}}
        >
            {link.icon}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-gray-800">
                {link.label}
            </span>
        </motion.a>
    );
};

export default DockIcon;
    