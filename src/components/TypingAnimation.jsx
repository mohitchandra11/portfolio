import React, { useState, useEffect } from 'react';

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

export default TypingAnimation;
