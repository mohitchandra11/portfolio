import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import useMousePosition from "/src/hooks/useMousePosition.js";

// Component Imports
import Header from "/src/components/Header.jsx";
import MobileNav from "/src/components/MobileNav.jsx";
import ParticleCanvas from "/src/components/ParticleCanvas.jsx";
import FloatingNav from "/src/components/FloatingNav.jsx";
import HeroSection from "/src/components/HeroSection.jsx";
import SkillsSection from "/src/components/SkillsSection.jsx";
import EducationSection from "/src/components/EducationSection.jsx";
import ProjectsSection from "/src/components/ProjectsSection.jsx";
import CertificationsSection from "/src/components/CertificationsSection.jsx";
import InternshipsSection from "/src/components/InternshipsSection.jsx";
import ContactSection from "/src/components/ContactSection.jsx";

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ripple, setRipple] = useState(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const mousePosition = useMousePosition();

    // Effect for loading fonts and icons
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

    // Effect for theme management
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    
    // Effect to block body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { // Cleanup function
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);
    
    // Effect for scroll-based active section highlighting
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll("section[id]"));
        const handleScroll = () => {
            const middleOfViewport = window.scrollY + window.innerHeight / 2;
            let newActiveSection = 'about';
            for (const section of sections) {
                if (section.offsetTop <= middleOfViewport) {
                    newActiveSection = section.id;
                } else {
                    break;
                }
            }
            setActiveSection(newActiveSection);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleThemeTransition = (event) => {
        const { clientX, clientY } = event;
        setRipple({ x: clientX, y: clientY, id: Date.now() });
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
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
                <main className="pb-24 md:pb-0">
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
                    />
                </div>
            </div>
        </div>
    );
}

