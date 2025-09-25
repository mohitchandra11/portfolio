import React, { useRef, useEffect } from 'react';

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

export default ParticleCanvas;
