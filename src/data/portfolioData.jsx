import React from 'react';
import {
    Home,
    Code,
    GraduationCap,
    Lightbulb,
    Award,
    Briefcase,
    Send,
    Linkedin,
    Github,
    Mail,
    Download,
} from "lucide-react";

//===========================================================================
// --- 📁 data/portfolioData.jsx ---
// This file contains all the portfolio content.
//===========================================================================

export const portfolioOwner = {
    name: "Mohit Chandra",
    lastName: "Joshi",
    email: "mohit.joshi@example.com",
    resumeUrl: "/mohit-chandra-joshi-resume.pdf", // Example URL, replace with your actual resume link
    socials: {
        linkedin: "https://www.linkedin.com/in/mohit-chandra-joshi/", // Example URL
        github: "https://github.com/mohit-chandra-joshi", // Example URL
    },
};

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

export const skillSet = [
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

export const socialLinks = [
    { name: 'LinkedIn Profile', icon: <Linkedin size={20} />, url: portfolioOwner.socials.linkedin, color: 'bg-blue-600' },
    { name: 'GitHub Profile', icon: <Github size={20} />, url: portfolioOwner.socials.github, color: 'bg-gray-700' },
    { name: 'Send Email', icon: <Mail size={20} />, url: `mailto:${portfolioOwner.email}`, color: 'bg-red-500' },
    { name: 'Download Resume', icon: <Download size={20} />, url: portfolioOwner.resumeUrl, download: true, color: 'bg-green-500' },
];

export const educationData = [
    { title: 'B.Tech in Computer Science', school: 'University of Technology', duration: '2018 - 2022', description: 'Specialized in AI and Data Science.' },
    { title: 'MPC Intermediate', school: 'Educare Junior College', duration: '2016 - 2018', description: 'Studied Mathematics, Physics, and Chemistry.' },
    { title: 'SSC', school: 'Educare High School', duration: '2015 - 2016', description: 'Completed 10th standard with a strong academic record.' },
];

export const projectsData = [
    { title: "VisionAI", desc: "An AI-powered real-time object detection system.", img: "https://placehold.co/400x300/1e1b4b/ffffff?text=VisionAI", cat: 'AI' },
    { title: "AI Chatbot", desc: "A smart web app with advanced AI chat functions.", img: "https://placehold.co/400x300/4c1d95/ffffff?text=AI+Chatbot", cat: 'AI' },
    { title: "Diabetes Predictor", desc: "Predicts diabetes likelihood using machine learning.", img: "https://placehold.co/400x300/be123c/ffffff?text=Health+ML", cat: 'ML' },
    { title: "Portfolio Website", desc: "A responsive personal portfolio built with React.", img: "https://placehold.co/400x300/047857/ffffff?text=Portfolio", cat: 'Web' },
];

export const certificationsData = [
    { title: "Certified Application Developer", issuer: "ServiceNow • 2025", img: "https://placehold.co/400x300/1e3a8a/ffffff?text=Certificate" },
    { title: "Certified System Administrator", issuer: "ServiceNow • 2025", img: "https://placehold.co/400x300/312e81/ffffff?text=Certificate" },
    { title: "IBM Data Analyst", issuer: "IBM • 2025", img: "https://placehold.co/400x300/0369a1/ffffff?text=Certificate" },
];

export const internshipsData = [
    { title: "Web Development", duration: "May 2024 - June 2024", img: "https://placehold.co/400x300/4338ca/ffffff?text=Web+Dev" },
    { title: "Cybersecurity & Ethical Hacking", duration: "May 2024 - June 2024", img: "https://placehold.co/400x300/b91c1c/ffffff?text=Cybersecurity" },
    { title: "AWS Cloud Workshop", duration: "Aug 2024", img: "https://placehold.co/400x300/f97316/ffffff?text=AWS+Cloud" },
];

export const navLinks = [
    { id: 'about', label: 'Home', icon: <Home size={22} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={22} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={22} /> },
    { id: 'projects', label: 'Projects', icon: <Lightbulb size={22} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={22} /> },
    { id: 'internships', label: 'Internships', icon: <Briefcase size={22} /> },
    { id: 'contact', label: 'Contact', icon: <Send size={22} /> },
    { id: 'resume', label: 'Download Resume', icon: <Download size={22} />, href: portfolioOwner.resumeUrl, download: true },
];

export const roles = ["Developer", "Designer", "Engineer", "Data Scientist"];