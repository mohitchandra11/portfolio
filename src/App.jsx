import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import ParticleCanvas from "./components/ParticleCanvas.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

export default function App() {
    const [theme, setTheme] = useState('dark');
    const [ripple, setRipple] = useState(null);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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

    const handleThemeTransition = (event) => {
        const { clientX, clientY } = event;
        setRipple({ x: clientX, y: clientY, id: Date.now() });
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Router>
            <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-200 antialiased font-sans overflow-x-hidden min-h-screen">
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

                <Routes>
                    <Route path="/" element={<Home theme={theme} handleThemeTransition={handleThemeTransition} />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                </Routes>
            </div>
        </Router>
    );
}
