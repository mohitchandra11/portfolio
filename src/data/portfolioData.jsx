import React from 'react';
import { Briefcase, Download, GraduationCap, Home, Code, Lightbulb, Send, Award, Star, Linkedin, Github, Mail } from "lucide-react";

//===========================================================================
// --- 📁 data/portfolioData.js ---
// In a real project, this would be in src/data/portfolioData.js
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

const SvgIcon = ({ children }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        {children}
    </svg>
);

export const skillIcons = {
    'Statistics & Probability': <i className="fa-solid fa-chart-line text-green-400 text-lg"></i>,
    'Mathematics': <i className="fa-solid fa-flask text-blue-400 text-lg"></i>,
    'Machine Learning': <i className="fa-solid fa-brain text-purple-500 text-lg"></i>,
    'Data Visualization': <i className="fa-solid fa-chart-pie text-yellow-500 text-lg"></i>,
    'A/B Testing': <i className="fa-solid fa-vial text-pink-500 text-lg"></i>,
    'Python': <i className="fa-brands fa-python text-yellow-400 text-lg"></i>,
    'C++': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 147.8" className="w-5 h-5">
            <path fill="#00599C" d="M64 0l63.5 36.8v74L64 147.8 0.5 110.8v-74z" />
            <path fill="#004482" d="M127.5 36.8v74L64 147.8V73.8z" />
            <path fill="#659AD2" d="M64 0l63.5 36.8L64 73.8 0.5 36.8z" />
            <path fill="#fff" d="M82.5 58.6c-2.4-4.2-5.4-7.3-9-9.2-3.7-2-8-3-13-3-7.6 0-13.5 2.3-17.8 7s-6.3 11.2-6.3 19.7 2.1 15.3 6.3 19.9 10.2 7 17.9 7c4.9 0 9.2-1 12.9-3 3.6-2 6.6-5.2 9-9.5l-9.8-5.7c-1.6 2.9-3.2 5-5 6.2s-3.8 1.8-6.2 1.8c-3.4 0-6-1.2-7.9-3.7-1.9-2.4-2.9-6.2-2.9-11.4s1-8.9 2.9-11.2c1.9-2.4 4.6-3.6 8-3.6 2.4 0 4.5.6 6.2 1.7 1.8 1.2 3.4 3.1 5 5.9l9.7-5.8z" />
            <path fill="#fff" d="M93.9 72.2h-3.7v-3.7h-3.7v3.7h-3.7v3.7h3.7v3.7h3.7v-3.7h3.7v-3.7zm14.8 0H105v-3.7h-3.7v3.7h-3.7v3.7h3.7v3.7H105v-3.7h3.7v-3.7z" />
        </svg>
    ),
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
    'Tailwind': <i className="fa-solid fa-wind text-sky-400 text-lg"></i>,
    'Git': <i className="fa-brands fa-git-alt text-red-500 text-lg"></i>,
    'GitHub / GitLab': <i className="fa-brands fa-github text-white text-lg"></i>,
    'Jupyter Notebook': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 94" className="w-5 h-5">
            <path fill="#F37626" d="M42 0C18.8 0 0 18.8 0 42v10c0 23.2 18.8 42 42 42s42-18.8 42-42V42C84 18.8 65.2 0 42 0z" />
            <path fill="#FFF" d="M42 6a36 36 0 00-36 36v10a36 36 0 0036 36 36 36 0 0036-36V42A36 36 0 0042 6z" />
            <circle cx="21" cy="47" r="8" fill="#D8D8D8" />
            <circle cx="63" cy="47" r="8" fill="#D8D8D8" />
            <path fill="#D8D8D8" d="M42 81a26 26 0 0026-26H16a26 26 0 0026 26z" />
        </svg>
    ),
    'Anaconda Navigator': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5">
            <circle cx="128" cy="128" r="128" fill="#34A853" />
            <path fill="#FFFFFF" d="M128 21.33c-58.9 0-106.67 47.77-106.67 106.67S69.1 234.67 128 234.67 234.67 186.9 234.67 128 186.9 21.33 128 21.33zm0 20.27c47.73 0 86.4 38.67 86.4 86.4s-38.67 86.4-86.4 86.4-86.4-38.67-86.4-86.4 38.67-86.4 86.4-86.4z" />
            <path fill="#FFFFFF" d="M128 64c-35.35 0-64 28.65-64 64h21.33c0-23.56 19.1-42.67 42.67-42.67S170.67 104.44 170.67 128H192c0-35.35-28.65-64-64-64zm0 42.67c-11.78 0-21.33 9.55-21.33 21.33h42.66c0-11.78-9.55-21.33-21.33-21.33z" />
        </svg>
    ),
    'VS Code': (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5">
            <path fill="#007ACC" d="M228.8 74.48l-43.2-43.2c-4.2-4.2-11-4.2-15.2 0L27.2 174.48c-4.2 4.2-4.2 11 0 15.2l43.2 43.2c4.2 4.2 11 4.2 15.2 0L228.8 89.68c4.2-4.2 4.2-11 0-15.2z" />
            <path fill="#005A9E" d="M170.4 31.28l-143.2 143.2 43.2 43.2 143.2-143.2z" />
            <path fill="#FFFFFF" d="M136.8 190.48l-33.6-12.8-32 32 32-32-12.8-33.6 46.4-46.4-33.6-12.8 32-32 46.4 46.4-12.8 33.6 32 32z" />
        </svg>
    ),
    'Vercel': <i className="fa-solid fa-cloud-arrow-up text-white text-lg"></i>,
    'CMD': <i className="fa-solid fa-terminal text-green-400 text-lg"></i>,
};

export const skillSet = [
    { category: "Core Data Science", icon: <i className="fa-solid fa-atom text-blue-400 w-6 h-6"></i>, skills: ["Statistics & Probability", "Mathematics", "Machine Learning", "Data Visualization", "A/B Testing"] },
    { category: "Programming & Databases", icon: <i className="fa-solid fa-code text-green-400 w-6 h-6"></i>, skills: ["Python", "C++", "MySQL", "Data Warehousing"] },
    { category: "Analysis & Processing", icon: <i className="fa-solid fa-magnifying-glass-chart text-yellow-400 w-6 h-6"></i>, skills: ["Pandas", "NumPy"] },
    { category: "Visualization", icon: <i className="fa-solid fa-palette text-orange-400 w-6 h-6"></i>, skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau / Power BI"] },
    { category: "ML Libraries", icon: <i className="fa-solid fa-robot text-red-400 w-6 h-6"></i>, skills: ["Scikit-Learn", "TensorFlow", "PyTorch"] },
    { category: "Front-End Development", icon: <i className="fa-brands fa-uncharted text-pink-400 w-6 h-6"></i>, skills: ["HTML", "CSS", "JS", "React", "Vite", "Tailwind"] },
    { category: "Tools & Version Control", icon: <i className="fa-solid fa-tools text-red-500 w-6 h-6"></i>, skills: ["Git", "GitHub / GitLab", "Jupyter Notebook", "Anaconda Navigator", "VS Code", "Vercel", "CMD"] },
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
    {
        id: "aegis-health-ai",
        title: "Aegis Health AI",
        desc: "AI-Powered Health Assistant with real-time medical guidance.",
        img: "/aegis-health-ai.png",
        cat: ['Web', 'AI'],
        fullDesc: "Designed and developed a full-stack MERN health chatbot application that functions as a virtual medical assistant. The system leverages Google's Gemini 2.5 Flash model to provide real-time, empathetic medical guidance with \"grounding\" (deep search) capabilities for verifiable information. It features a secure, responsive interface with voice-to-text interaction, emergency detection, and persistent chat history.",
        technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "JWT", "Google OAuth 2.0"],
        keyFeatures: [
            "Intelligent Virtual Doctor: Real-time streaming responses with grounded web searches.",
            "Voice-First Interface: Speech-to-Text/Text-to-Speech integration.",
            "Emergency Detection: Analyzes input for emergency keywords to prompt urgent care.",
            "Secure Authentication: Email/password and Google Sign-In support.",
            "User Dashboard: Manage profile and view consultation history.",
            "Guest Access: Anonymous access to limited features."
        ],
        liveUrl: "https://health-chat-bot-two.vercel.app/",
        githubUrl: "https://github.com/mohitchandra11/healthChatBot"
    },
    { id: "vision-ai", title: "VisionAI", desc: "An AI-powered real-time object detection system.", img: "https://placehold.co/400x300/1e1b4b/ffffff?text=VisionAI", cat: 'AI', fullDesc: "Real-time object detection system.", technologies: ["Python", "OpenCV", "TensorFlow"], keyFeatures: ["Real-time detection"], liveUrl: "#", githubUrl: "#" },

    { id: "diabetes-predictor", title: "Diabetes Predictor", desc: "Predicts diabetes likelihood using machine learning.", img: "https://placehold.co/400x300/be123c/ffffff?text=Health+ML", cat: 'ML', fullDesc: "ML model for diabetes prediction.", technologies: ["Python", "Scikit-Learn", "Pandas"], keyFeatures: ["Prediction model"], liveUrl: "#", githubUrl: "#" },
    {
        id: "portfolio-website",
        title: "Portfolio Website",
        desc: "Modern, responsive portfolio showcasing projects and skills with interactive UI.",
        img: "/portfolio-preview.png",
        cat: 'Web',
        fullDesc: "Designed and built a responsive personal portfolio website using React and Tailwind CSS to showcase my projects and technical skills. The application features a modern, dark-themed UI with smooth animations powered by Framer Motion. It includes dynamic project filtering, a dedicated project details page, and a fully responsive layout optimized for all devices.",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Lucide React"],
        keyFeatures: ["Responsive Design", "Dark Mode Support", "Smooth Animations", "Project Filtering", "Dynamic Routing"],
        liveUrl: "https://portfolio-mohit-chandra-joshi11.vercel.app/",
        githubUrl: "https://github.com/mohitchandra11/portfolio"
    },
    {
        id: "my-goal-tracker",
        title: "My Goal Tracker",
        desc: "Comprehensive web application designed to help users define, track, and visualize their personal goals, habits, and tasks.",
        img: "/my-tracker.png",
        cat: ['Web'],
        fullDesc: "My Goal Tracker (also referred to as MyTracker) is a comprehensive web application designed to help users define, track, and visualize their personal goals, habits, and tasks. It combines a modern, brutalist-inspired aesthetic with robust tracking capabilities for different types of activities.\n\nThe application allows users to organize their life into high-level Goals (Categories), which are broken down into specific Subtopics. These subtopics can be tracked in three distinct ways: as daily Habits (done/not done), Cumulative progress (numerical values like pages read), or specific Task Lists. The application provides a rich dashboard for visualizing progress over time and a dedicated management section for configuring goals and logging data.",
        technologies: ["Next.js 15+", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "NextAuth.js", "Recharts", "Lucide React"],
        keyFeatures: [
            "Interactive Dashboard: Daily Progress Line Chart, Subtopic Progress Circles.",
            "Comprehensive Management Suite: Manage Categories, Subtopics, and Tasks.",
            "Diverse Tracking Methods: Habits, Cumulative Progress, and Task Lists.",
            "Brutalist & Modern Design: Bold typography, high-contrast elements, glassmorphism.",
            "Data Visualization: Visualizes consistency and progress over time."
        ],
        liveUrl: "#",
        githubUrl: "#",
        status: "building"
    },
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
    { id: 'about', label: 'Home', icon: <SvgIcon><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></SvgIcon> },
    { id: 'skills', label: 'Skills', icon: <SvgIcon><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></SvgIcon> },
    { id: 'education', label: 'Education', icon: <SvgIcon><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></SvgIcon> },
    { id: 'projects', label: 'Projects', icon: <SvgIcon><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path></SvgIcon> },
    { id: 'certifications', label: 'Certifications', icon: <SvgIcon><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></SvgIcon> },
    { id: 'internships', label: 'Internships', icon: <SvgIcon><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></SvgIcon> },
    { id: 'contact', label: 'Contact', icon: <SvgIcon><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></SvgIcon> },
    { id: 'resume', label: 'Download Resume', icon: <SvgIcon><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></SvgIcon>, href: portfolioOwner.resumeUrl, download: true },
];

export const roles = ["Developer", "Designer", "Engineer", "Data Scientist"];

