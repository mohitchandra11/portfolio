import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import useMousePosition from "./hooks/useMousePosition.js";

// Component Imports
import Header from "./components/Header.jsx";
import MobileNav from "./components/MobileNav.jsx";
import ParticleCanvas from "./components/ParticleCanvas.jsx";
import FloatingNav from "./components/FloatingNav.jsx";
import HeroSection from "./components/HeroSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import CertificationsSection from "./components/CertificationsSection.jsx";
import InternshipsSection from "./components/InternshipsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ripple, setRipple] = useState(null);
    // New state to track if the download just happened
    const [resumeJustDownloaded, setResumeJustDownloaded] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const mousePosition = useMousePosition();

    // ... (other useEffect hooks remain the same) ...
     useEffect(() => {
        const fontLink = document.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap";
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);
        const faLink = document.createElement('link');
        faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
        faLink.rel = 'stylesheet';
        document.head.appendChild(faLink);
        return () => { document.head.removeChild(fontLink); document.head.removeChild(faLink); };
    }, []);

    useEffect(() => {
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [theme]);
    
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section[id]"));
        const handleScroll = () => {
            const middleOfViewport = window.scrollY + window.innerHeight / 2;
            let newActiveSection = 'about';
            for (const section of sections) {
                if (section.offsetTop <= middleOfViewport) newActiveSection = section.id;
                else break;
            }
            setActiveSection(newActiveSection);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);


    const handleThemeTransition = (event) => {
        const { clientX, clientY } = event;
        setRipple({ x: clientX, y: clientY, id: Date.now() });
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };
    
    // Sets the download status to true on click
    const handleResumeDownload = () => {
        setResumeJustDownloaded(true);
    };

    // Resets the download status
    const resetResumeDownloadStatus = () => {
        setResumeJustDownloaded(false);
    };

    return (
        <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-200 antialiased font-sans overflow-x-hidden">
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50" style={{ scaleX }} />
            {theme === 'dark' && <ParticleCanvas />}
            {ripple && (
                <motion.div key={ripple.id} className="fixed rounded-full z-[100] pointer-events-none border-2 border-indigo-500/50"
                    style={{ left: ripple.x, top: ripple.y, x: "-50%", y: "-50%" }}
                    initial={{ width: 0, height: 0, opacity: 0.5 }}
                    animate={{ width: "200vmax", height: "200vmax", opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    onAnimationComplete={() => setRipple(null)} />
            )}
            <Header 
                handleThemeTransition={handleThemeTransition} 
                theme={theme} 
                onMenuClick={() => setIsMenuOpen(true)}
            />
            <MobileNav 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)}
                activeSection={activeSection}
            />

            <div className="relative z-10">
                <main className="pt-20 md:pt-0 pb-24 md:pb-0">
                    <HeroSection />
                    <SkillsSection />
                    <EducationSection />
                    <ProjectsSection />
                    <CertificationsSection />
                    <InternshipsSection />
                    <ContactSection />
                </main>
                <div className="hidden md:block">
                    <FloatingNav 
                        activeSection={activeSection} 
                        mousePosition={mousePosition} 
                        handleThemeTransition={handleThemeTransition} 
                        theme={theme} 
                        resumeJustDownloaded={resumeJustDownloaded}
                        onResumeDownload={handleResumeDownload}
                        onResetResumeStatus={resetResumeDownloadStatus}
                    />
                </div>
            </div>
        </div>
    );
}

