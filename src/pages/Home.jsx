import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import useMousePosition from "../hooks/useMousePosition.js";

// Component Imports
import Header from "../components/Header.jsx";
import MobileNav from "../components/MobileNav.jsx";
import FloatingNav from "../components/FloatingNav.jsx";
import HeroSection from "../components/HeroSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import EducationSection from "../components/EducationSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import CertificationsSection from "../components/CertificationsSection.jsx";
import InternshipsSection from "../components/InternshipsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

const Home = ({ theme, handleThemeTransition }) => {
    const [activeSection, setActiveSection] = useState('about');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [resumeJustDownloaded, setResumeJustDownloaded] = useState(false);
    const mousePosition = useMousePosition();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

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

    const handleResumeDownload = () => {
        setResumeJustDownloaded(true);
    };

    const resetResumeDownloadStatus = () => {
        setResumeJustDownloaded(false);
    };

    return (
        <>
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
        </>
    );
};

export default Home;
