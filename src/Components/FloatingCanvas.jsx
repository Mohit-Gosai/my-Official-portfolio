import React, { useRef, useEffect } from 'react';

const FloatingCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set dimensions
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Object Configuration
        const objects = [];
        const numberOfObjects = 4; // You can change this to 3 or 5

        for (let i = 0; i < numberOfObjects; i++) {
            objects.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dx: (Math.random() - 0.5) * 4, // Random speed -2 to 2
                dy: (Math.random() - 0.5) * 4,
                radius: Math.random() * 100 + 100, // Random radius between 100-200
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            objects.forEach((obj) => {
                // Create Gradient for each individual object
                const gradient = ctx.createRadialGradient(obj.x, obj.y, 0, obj.x, obj.y, obj.radius);
                
                // Using your Maroon (128, 0, 0) with slight transparency
                gradient.addColorStop(0, 'rgba(128, 0, 0, 0.2)');
                gradient.addColorStop(1, 'transparent');

                ctx.beginPath();
                ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Bounce Logic
                if (obj.x + obj.radius > canvas.width || obj.x - obj.radius < 0) obj.dx = -obj.dx;
                if (obj.y + obj.radius > canvas.height || obj.y - obj.radius < 0) obj.dy = -obj.dy;

                // Update Position
                obj.x += obj.dx;
                obj.y += obj.dy;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 bg-black" />;
};

export default FloatingCanvas;