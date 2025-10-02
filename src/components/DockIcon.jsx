import React, { useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const DockIcon = ({ link, activeSection, mousePosition, isHoveringDock, onClick }) => {
    const ref = useRef(null);
    const { x } = mousePosition;

    const distance = ref.current ? Math.abs(x - (ref.current.getBoundingClientRect().left + ref.current.clientWidth / 2)) : Infinity;
    const distanceSpring = useSpring(distance, { stiffness: 400, damping: 15 });
    
    const scale = useTransform(distanceSpring, [0, 100], [1.3, 1]);

    const isActive = activeSection === link.id;
    
    // Determine if the component should be a button (action) or an anchor (link)
    const Component = (!!onClick && !link.href) ? motion.button : motion.a;

    return (
        <div className="relative group">
            <Component
                ref={ref}
                href={link.href || (onClick ? undefined : `#${link.id}`)}
                onClick={onClick}
                aria-label={link.label}
                {...(link.download && { download: true })}
                style={{ scale: isHoveringDock ? scale : 1 }}
                className={`flex aspect-square cursor-pointer items-center justify-center rounded-full transition-colors duration-300 w-[42px] h-[42px] focus:outline-none
                    ${isActive 
                        ? 'bg-gradient-to-r from-blue-500/80 to-purple-500/80 border border-blue-500/50' 
                        : 'hover:bg-white/10'
                    }`
                }
            >
                <div className={`transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {link.icon}
                </div>
            </Component>
            
            {/* Tooltip */}
            <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold rounded whitespace-nowrap z-[9999] opacity-0 group-hover:opacity-100 transition-all duration-200">
                {link.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[4px] border-transparent border-t-gray-900 dark:border-t-white"></div>
            </div>
        </div>
    );
};

export default DockIcon;

