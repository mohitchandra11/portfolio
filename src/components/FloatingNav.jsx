import React, { useState } from 'react';
import { navLinks } from '../data/portfolioData.jsx';
import DockIcon from './DockIcon.jsx';
import { Sun, Moon } from 'lucide-react';

const FloatingNav = ({ 
    activeSection, 
    mousePosition, 
    handleThemeTransition, 
    theme, 
    resumeJustDownloaded, 
    onResumeDownload,
    onResetResumeStatus 
}) => {
    const [isHoveringDock, setIsHoveringDock] = useState(false);

    const mainLinks = navLinks.filter(link => link.id !== 'resume');
    const resumeLink = navLinks.find(link => link.id === 'resume');
    
    // Determine the tooltip text based on the download state
    const resumeTooltipText = resumeJustDownloaded ? 'Resume Downloaded!' : 'Download Resume';

    const handleMouseLeave = () => {
        setIsHoveringDock(false);
        // Reset the download status when the mouse leaves the entire nav bar
        onResetResumeStatus();
    };

    return (
        <nav 
            className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            onMouseEnter={() => setIsHoveringDock(true)}
            onMouseLeave={handleMouseLeave}
        >
            <div className="mx-auto flex h-[60px] w-max items-center gap-3 rounded-2xl bg-gray-900/60 px-4 py-3 backdrop-blur-lg border border-white/10 shadow-2xl">
                {mainLinks.map((link) => (
                    <DockIcon 
                        key={link.id}
                        link={link} 
                        activeSection={activeSection} 
                        mousePosition={mousePosition}
                        isHoveringDock={isHoveringDock}
                    />
                ))}
                
                <div className="w-px h-6 bg-gray-300/50 self-center mx-1"></div>
                
                {resumeLink && (
                     <DockIcon 
                        key={resumeLink.id}
                        link={{...resumeLink, label: resumeTooltipText }}
                        activeSection={null}
                        mousePosition={mousePosition}
                        isHoveringDock={isHoveringDock}
                        onClick={onResumeDownload}
                    />
                )}
                
                <div className="w-px h-6 bg-gray-300/50 self-center mx-1"></div>

                <DockIcon 
                    link={{ 
                        id: 'theme-toggle', 
                        label: 'Toggle Theme', 
                        icon: theme === 'dark' 
                            ? <Sun size={20} className="text-amber-500" /> 
                            : <Moon size={20} /> 
                    }}
                    activeSection={null}
                    mousePosition={mousePosition}
                    isHoveringDock={isHoveringDock}
                    onClick={handleThemeTransition}
                />
            </div>
        </nav>
    );
};

export default FloatingNav;

