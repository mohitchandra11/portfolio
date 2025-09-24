import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  Home,
  Code,
  Lightbulb,
  Send,
  Award,
  Download,
  Sun,
  Moon,
} from "lucide-react";

//===========================================================================
// --- 📁 data/portfolioData.js ---
// In a real project, this would be in src/data/portfolioData.js
//===========================================================================

const skillIcons = {
    'Statistics & Probability': <i className="fa-solid fa-chart-line text-green-400 text-lg"></i>,
    'Mathematics': <i className="fa-solid fa-flask text-blue-400 text-lg"></i>,
    'Machine Learning': <i className="fa-solid fa-brain text-purple-500 text-lg"></i>,
    'Data Visualization': <i className="fa-solid fa-chart-pie text-yellow-500 text-lg"></i>,
    'A/B Testing': <i className="fa-solid fa-vial text-pink-500 text-lg"></i>,
    'Python': <i className="fa-brands fa-python text-yellow-400 text-lg"></i>,
    'C++': <i className="fa-solid fa-code text-blue-500 text-lg"></i>,
    'MySQL': <i className="fa-solid fa-database text-blue-400 text-lg"></i>,
    'Data Warehousing': <i className="fa-solid fa-warehouse text-green-400 text-lg"></i>,
    'Pandas': <i className="fa-solid fa-table-columns text-green-400 text-lg"></i>,
    'NumPy': <i className="fa-solid fa-calculator text-blue-400 text-lg"></i>,
    'Matplotlib': <i className="fa-solid fa-chart-line text-orange-400 text-lg"></i>,
    'Seaborn': <i className="fa-solid fa-chart-bar text-cyan-400 text-lg"></i>,
    'Plotly': <i className="fa-solid fa-chart-pie text-pink-400 text-lg"></i>,
    'Tableau / Power BI': <i className="fa-solid fa-chart-simple text-blue-600 text-lg"></i>,
    'Scikit-Learn': <i className="fa-solid fa-cogs text-orange-500 text-lg"></i>,
    'TensorFlow': <i className="fa-solid fa-brain text-orange-400 text-lg"></i>,
    'PyTorch': <i className="fa-solid fa-microchip text-red-500 text-lg"></i>,
    'HTML': <i className="fa-brands fa-html5 text-orange-500 text-lg"></i>,
    'CSS': <i className="fa-brands fa-css3-alt text-blue-500 text-lg"></i>,
    'JS': <i className="fa-brands fa-js-square text-yellow-400 text-lg"></i>,
    'React': <i className="fa-brands fa-react text-sky-400 text-lg"></i>,
    'Vite': <i className="fa-solid fa-bolt-lightning text-purple-400 text-lg"></i>,
    'Git': <i className="fa-brands fa-git-alt text-red-500 text-lg"></i>,
    'GitHub / GitLab': <i className="fa-brands fa-github text-white text-lg"></i>,
    'Jupyter Notebook': <i className="fa-brands fa-python text-orange-400 text-lg"></i>,
    'Anaconda Navigator': <i className="fa-brands fa-python text-green-500 text-lg"></i>,
};

const skillSet = [
    { category: "Core Data Science", icon: <i className="fa-solid fa-atom text-blue-400 w-6 h-6"></i>, skills: ["Statistics & Probability", "Mathematics", "Machine Learning", "Data Visualization", "A/B Testing"] },
    { category: "Programming & Databases", icon: <i className="fa-solid fa-code text-green-400 w-6 h-6"></i>, skills: ["Python", "C++", "MySQL", "Data Warehousing"] },
    { category: "Analysis & Processing", icon: <i className="fa-solid fa-magnifying-glass-chart text-yellow-400 w-6 h-6"></i>, skills: ["Pandas", "NumPy"] },
    { category: "Visualization", icon: <i className="fa-solid fa-palette text-orange-400 w-6 h-6"></i>, skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau / Power BI"] },
    { category: "ML Libraries", icon: <i className="fa-solid fa-robot text-red-400 w-6 h-6"></i>, skills: ["Scikit-Learn", "TensorFlow", "PyTorch"] },
    { category: "Front-End Development", icon: <i className="fa-brands fa-uncharted text-pink-400 w-6 h-6"></i>, skills: ["HTML", "CSS", "JS", "React", "Vite"] },
    { category: "Tools & Version Control", icon: <i className="fa-solid fa-tools text-red-500 w-6 h-6"></i>, skills: ["Git", "GitHub / GitLab", "Jupyter Notebook", "Anaconda Navigator"] },
].map(category => ({
    ...category,
    skills: category.skills.map(skill => ({ name: skill, icon: skillIcons[skill] }))
}));

const socialLinks = [
    { name: 'LinkedIn Profile', icon: <Linkedin size={20} />, url: '#', color: 'bg-blue-600' },
    { name: 'GitHub Profile', icon: <Github size={20} />, url: '#', color: 'bg-gray-700' },
    { name: 'Send Email', icon: <Mail size={20} />, url: 'mailto:jane.doe@example.com', color: 'bg-red-500' },
    { name: 'Download Resume', icon: <Download size={20} />, url: '#', download: true, color: 'bg-green-500' },
];

const educationData = [
    { title: 'B.Tech in Computer Science', school: 'University of Technology', duration: '2018 - 2022', description: 'Specialized in AI and Data Science.' },
    { title: 'MPC Intermediate', school: 'Educare Junior College', duration: '2016 - 2018', description: 'Studied Mathematics, Physics, and Chemistry.' },
    { title: 'SSC', school: 'Educare High School', duration: '2015 - 2016', description: 'Completed 10th standard with a strong academic record.' },
];

const projectsData = [
    { title: "VisionAI", desc: "An AI-powered real-time object detection system.", img: "https://placehold.co/400x300/1e1b4b/ffffff?text=VisionAI", cat: 'AI' },
    { title: "AI Chatbot", desc: "A smart web app with advanced AI chat functions.", img: "https://placehold.co/400x300/4c1d95/ffffff?text=AI+Chatbot", cat: 'AI' },
    { title: "Diabetes Predictor", desc: "Predicts diabetes likelihood using machine learning.", img: "https://placehold.co/400x300/be123c/ffffff?text=Health+ML", cat: 'ML' },
    { title: "Portfolio Website", desc: "A responsive personal portfolio built with React.", img: "https://placehold.co/400x300/047857/ffffff?text=Portfolio", cat: 'Web' },
];

const certificationsData = [
    { title: "Certified Application Developer", issuer: "ServiceNow • 2025", img: "https://placehold.co/400x300/1e3a8a/ffffff?text=Certificate" },
    { title: "Certified System Administrator", issuer: "ServiceNow • 2025", img: "https://placehold.co/400x300/312e81/ffffff?text=Certificate" },
    { title: "IBM Data Analyst", issuer: "IBM • 2025", img: "https://placehold.co/400x300/0369a1/ffffff?text=Certificate" },
];

const internshipsData = [
    { title: "Web Development", duration: "May 2024 - June 2024", img: "https://placehold.co/400x300/4338ca/ffffff?text=Web+Dev" },
    { title: "Cybersecurity & Ethical Hacking", duration: "May 2024 - June 2024", img: "https://placehold.co/400x300/b91c1c/ffffff?text=Cybersecurity" },
    { title: "AWS Cloud Workshop", duration: "Aug 2024", img: "https://placehold.co/400x300/f97316/ffffff?text=AWS+Cloud" },
];

const navLinks = [
    { id: 'about', label: 'Home', icon: <Home size={22} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={22} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={22} /> },
    { id: 'projects', label: 'Projects', icon: <Lightbulb size={22} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={22} /> },
    { id: 'internships', label: 'Internships', icon: <Briefcase size={22} /> },
    { id: 'contact', label: 'Contact', icon: <Send size={22} /> },
    { id: 'resume', label: 'Download Resume', icon: <Download size={22} />, href: '#', download: true },
];

const roles = ["Developer", "Designer", "Engineer", "Data Scientist"];


//===========================================================================
// --- 📁 hooks/useMousePosition.js ---
// In a real project, this would be in src/hooks/useMousePosition.js
//===========================================================================

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    useEffect(() => {
        const updateMousePosition = ev => setMousePosition({ x: ev.clientX, y: ev.clientY });
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);
    return mousePosition;
};


//===========================================================================
// --- 📁 components/ParticleCanvas.jsx ---
//===========================================================================

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        class Particle {
            constructor(x, y) { this.x = x; this.y = y; this.size = Math.random() * 2 + 1; this.speedX = Math.random() * 2 - 1; this.speedY = Math.random() * 2 - 1; this.color = `rgba(129, 140, 248, ${Math.random() * 0.5 + 0.2})`; }
            update() { this.x += this.speedX; this.y += this.speedY; if (this.size > 0.1) this.size -= 0.03; }
            draw() { ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
        }

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            for (let i = 0; i < 3; i++) particles.push(new Particle(x, y));
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationFrameId;
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].size <= 0.2) { particles.splice(i, 1); i--; }
            }
            animationFrameId = requestAnimationFrame(animateParticles);
        }
        animateParticles();

        window.addEventListener('resize', resizeCanvas);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        }
    }, []);
    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};


//===========================================================================
// --- 📁 components/TypingAnimation.jsx ---
//===========================================================================

const TypingAnimation = ({ roles }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const typingSpeed = 150, deletingSpeed = 75, delay = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];
            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
            if (!isDeleting && text === fullText) setTimeout(() => setIsDeleting(true), delay);
            else if (isDeleting && text === '') { setIsDeleting(false); setLoopNum(loopNum + 1); }
        };
        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles]);

    return <span className="border-r-2 border-indigo-500 dark:border-indigo-400 pr-1">{text}</span>;
};


//===========================================================================
// --- 📁 components/Carousel.jsx ---
//===========================================================================

const Carousel = ({ items }) => (
    <div className="relative">
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
            {items}
        </div>
    </div>
);


//===========================================================================
// --- 📁 components/DockIcon.jsx ---
//===========================================================================

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


//===========================================================================
// --- 📁 components/FloatingNav.jsx ---
//===========================================================================

const FloatingNav = ({ activeSection, mousePosition, handleThemeTransition, theme }) => {
    const [isHoveringDock, setIsHoveringDock] = useState(false);
    return (
        <motion.nav
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
            onHoverStart={() => setIsHoveringDock(true)}
            onHoverEnd={() => setIsHoveringDock(false)}
        >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-full flex items-end gap-1 p-2 shadow-lg">
                {navLinks.map((link) => (
                    <React.Fragment key={link.id}>
                        <DockIcon link={link} activeSection={activeSection} mousePosition={mousePosition} isHoveringDock={isHoveringDock} />
                        {link.id === 'contact' && <span className="text-gray-400 dark:text-gray-600 mx-1 self-center h-6 border-l border-gray-300 dark:border-gray-700"></span>}
                    </React.Fragment>
                ))}
                <span className="text-gray-400 dark:text-gray-600 mx-1 self-center h-6 border-l border-gray-300 dark:border-gray-700"></span>
                <button onClick={handleThemeTransition} aria-label="Toggle Theme" title="Toggle Theme" className="relative group p-3 rounded-full transition-colors self-center text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white">
                    {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-gray-800">
                        Toggle Theme
                    </span>
                </button>
            </div>
        </motion.nav>
    );
};


//===========================================================================
// --- 📁 components/HeroSection.jsx ---
//===========================================================================

const HeroSection = () => (
    <section id="about" className="min-h-screen px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden">
        <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl -z-10"
            animate={{ x: [0, 20, 0], y: [0, -20, 0]}}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
             className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl -z-10"
             animate={{ x: [0, -20, 0], y: [0, 20, 0]}}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}    
        />
        <motion.div className="flex-1 text-center md:text-left relative z-20" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xl text-indigo-600 dark:text-indigo-300">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-extrabold my-2"><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">Mohit Chandra <p className="text-xl text-indigo-600 dark:text-indigo-300">Joshi</p> </span></h1>
            <h2 className="text-3xl md:text-4xl font-semibold"><TypingAnimation roles={roles} /></h2>
            
            <div class="mt-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
    <ul class="list-disc list-inside space-y-2">
        <li>A passionate Data Scientist transforming data into actionable insights and building intelligent solutions.</li>
        <li>Craft beautiful, responsive websites with modern technologies and a passion for creating engaging user experiences.</li>
    </ul>
</div>
            
            <div className="mt-12 flex justify-center md:justify-start items-center gap-4">
                {socialLinks.map(link =>
                    <a key={link.name} href={link.url} aria-label={link.name} target="_blank" rel="noopener noreferrer" className={`relative group p-3 rounded-full text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${link.color}`} {...(link.download && { download: true })}>
                        {link.icon}
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-gray-800">{link.name}</span>
                    </a>
                )}
            </div>
        </motion.div>
        <motion.div className="flex-1 flex justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-400/30 to-pink-400/30 dark:from-indigo-500/30 dark:to-pink-500/30 rounded-full blur-2xl opacity-75 animate-pulse"></div>
                <motion.div className="absolute w-20 h-20 bg-indigo-400/30 dark:bg-indigo-500/30 rounded-full -top-4 -left-4" animate={{ y: [0, 10, 0], x: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}></motion.div>
                <motion.div className="absolute w-24 h-24 bg-pink-400/30 dark:bg-pink-500/30 rounded-full -bottom-4 -right-4" animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}></motion.div>
                <motion.img src="pfp.png" alt="Jane Doe Profile" className="relative w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-gray-800 shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
            </div>
        </motion.div>
    </section>
);


//===========================================================================
// --- 📁 components/SectionHeader.jsx ---
// (A new reusable component for consistent section titles)
//===========================================================================

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


//===========================================================================
// --- 📁 components/SkillsSection.jsx ---
//===========================================================================

const SkillsSection = () => (
    <section id="skills" className="py-20 md:py-24">
        <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px]">
            <SectionHeader title="Skills" subtitle="Technical Expertise" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillSet.map((category, i) => (
                    <motion.div key={category.category} className="bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 p-6 backdrop-blur-sm" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                        <h3 className="flex items-center gap-3 text-xl font-bold mb-4">{category.icon}<span>{category.category}</span></h3>
                        <ul className="space-y-2">
                            {category.skills.map(skill => (
                                <li key={skill.name} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);


//===========================================================================
// --- 📁 components/EducationSection.jsx ---
//===========================================================================

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
                            <div className="md:flex-1"><div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"><p className="text-sm text-indigo-600 dark:text-indigo-400">{item.duration}</p><h3 className="text-lg font-bold mt-1">{item.title}</h3><p className="text-sm font-semibold text-gray-500 dark:text-gray-400">{item.school}</p><p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{item.description}</p></div></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);


//===========================================================================
// --- 📁 components/ProjectsSection.jsx ---
//===========================================================================

const ProjectsSection = () => {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [activeFilter, setActiveFilter] = useState('All');

    const handleFilter = (category) => {
        setActiveFilter(category);
        if (category === 'All') setFilteredProjects(projectsData);
        else setFilteredProjects(projectsData.filter(p => p.cat === category));
    };

    return (
        <section id="projects" className="py-20 md:py-24">
            <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px]">
                <SectionHeader title="Projects" subtitle="Featured Work" />
                <motion.div className="flex justify-center flex-wrap gap-4 mt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    {['All', 'Web', 'ML', 'AI'].map(cat => <button key={cat} onClick={() => handleFilter(cat)} className={`px-4 py-2 rounded-md transition ${activeFilter === cat ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700'}`}>{cat}</button>)}
                </motion.div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((p, i) =>
                        <motion.div key={p.title + i} className="bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group backdrop-blur-sm" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                            <div className="relative overflow-hidden">
                                <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">{p.cat}</span>
                            </div>
                            <div className="p-6"><h3 className="text-xl font-bold">{p.title}</h3><p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{p.desc}</p></div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};


//===========================================================================
// --- 📁 components/CertificationsSection.jsx ---
//===========================================================================

const CertificationsSection = () => (
    <section id="certifications" className="py-20 md:py-24">
        <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px]">
            <SectionHeader title="Certifications" subtitle="Professional Achievements" />
            <div className="mt-12">
                <Carousel items={certificationsData.map((cert, i) => (
                    <motion.div key={i} className="flex-shrink-0 w-80 snap-center bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden backdrop-blur-sm" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                        <img src={cert.img} alt={cert.title} className="w-full h-40 object-cover" />
                        <div className="p-4"><h3 className="font-bold">{cert.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p></div>
                    </motion.div>
                ))} />
            </div>
        </div>
    </section>
);


//===========================================================================
// --- 📁 components/InternshipsSection.jsx ---
//===========================================================================

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


//===========================================================================
// --- 📁 components/ContactSection.jsx ---
//===========================================================================

const ContactSection = () => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [isGenerating, setIsGenerating] = useState(false);
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(''); setFormSuccess('');
        if (!contactForm.name || !contactForm.email || !contactForm.message) {
            setFormError("Please fill out all fields before sending.");
            setTimeout(() => setFormError(''), 3000);
            return;
        }
        console.log("Form submitted successfully:", contactForm);
        setFormSuccess("Thank you for your message! I'll get back to you soon.");
        setContactForm({ name: '', email: '', message: '' });
        setTimeout(() => setFormSuccess(''), 5000);
    };

    const handleAutowriteMessage = async () => {
        if (!contactForm.name) {
            setFormError("Please enter your name first.");
            setTimeout(() => setFormError(''), 3000);
            return;
        }
        setFormError(''); setIsGenerating(true);

        const systemPrompt = "You are a helpful assistant. Your task is to help a user write a professional and friendly message to a portfolio owner named Jane Doe.";
        const userQuery = `My name is ${contactForm.name}, and I'm reaching out after being impressed by Jane's portfolio. Please write a professional and friendly message to Jane Doe for me. If I've already started writing a message below, use it as context and complete it or improve it, focusing on professional networking or potential collaboration. If the message is empty, write a general message expressing admiration for their skills in both data science and web development and asking if they are open to connecting. Here is my draft (it might be empty):\n\n${contactForm.message}`;

        try {
            const apiKey = "";
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
            const payload = { contents: [{ parts: [{ text: userQuery }] }], systemInstruction: { parts: [{ text: systemPrompt }] }, };
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API call failed with status: ${response.status}`);
            const result = await response.json();
            const candidate = result.candidates?.[0];
            if (candidate && candidate.content?.parts?.[0]?.text) {
                setContactForm(prev => ({ ...prev, message: candidate.content.parts[0].text }));
            } else {
                setFormError("Sorry, couldn't generate a message. Please try again.");
                setTimeout(() => setFormError(''), 3000);
            }
        } catch (error) {
            console.error("Error generating message:", error);
            setFormError("An error occurred. Please check the console.");
            setTimeout(() => setFormError(''), 3000);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-24">
            <div className="container mx-auto px-[26px] sm:px-[50px] md:px-[98px] max-w-6xl text-center">
                <SectionHeader title="Get In Touch" subtitle="Let's build something together" />
                <motion.p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                    Let's connect! Feel free to reach out for collaborations or just a friendly chat.
                </motion.p>
                <div className="mt-12 text-left grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        {socialLinks.slice(0, 3).map(link => (
                            <div key={link.name} className="flex items-start gap-4 p-4 mb-4 bg-white/50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 backdrop-blur-sm">
                                <span className="text-indigo-600 dark:text-indigo-400 mt-1">{link.icon}</span>
                                <div>
                                    <h3 className="font-semibold">{link.name.replace(' Profile', '').replace('Send ', '')}</h3>
                                    <a href={link.url} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-all">{link.name === 'Send Email' ? link.url.replace('mailto:', '') : `Connect on ${link.name.replace(' Profile', '')}`}</a>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <motion.form className="space-y-4" onSubmit={handleSubmit} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <input type="text" name="name" placeholder="Your Name" value={contactForm.name} onChange={handleInputChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <input type="email" name="email" placeholder="Your Email" value={contactForm.email} onChange={handleInputChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <textarea name="message" placeholder="Your Message" rows="5" value={contactForm.message} onChange={handleInputChange} className="w-full p-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                        {formError && <p className="text-red-500 text-sm text-center">{formError}</p>}
                        {formSuccess && <p className="text-green-500 text-sm text-center">{formSuccess}</p>}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button type="submit" className="flex-1 p-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition">Send Message</button>
                            <button type="button" onClick={handleAutowriteMessage} disabled={isGenerating} className="flex-1 flex items-center justify-center gap-2 p-3 bg-pink-500 text-white rounded-md font-semibold hover:bg-pink-600 transition disabled:bg-pink-400 disabled:cursor-not-allowed">
                                {isGenerating ? (<><motion.div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} /><span>Generating...</span></>) : ("✨ Autowrite Message")}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};


//===========================================================================
// --- 📁 App.jsx ---
// This is the main component that ties everything together.
//===========================================================================

export default function App() {
    const [activeSection, setActiveSection] = useState('about');
    const [theme, setTheme] = useState('dark');
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
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [theme]);
    
    // Effect for scroll-based active section highlighting
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
            <div className="relative z-10">
                <main className="pb-24">
                    <HeroSection />
                    <SkillsSection />
                    <EducationSection />
                    <ProjectsSection />
                    <CertificationsSection />
                    <InternshipsSection />
                    <ContactSection />
                </main>
                <FloatingNav 
                    activeSection={activeSection} 
                    mousePosition={mousePosition} 
                    handleThemeTransition={handleThemeTransition} 
                    theme={theme} 
                />
            </div>
        </div>
    );
}


