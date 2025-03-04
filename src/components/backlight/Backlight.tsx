import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./Backlight.scss"

const Backlight: React.FC = () => {
    const backlight = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        if (backlight.current) {
            gsap.to(backlight.current, {
                x: mouseX - backlight.current.offsetWidth / 2,
                y: mouseY - backlight.current.offsetHeight / 2,
                duration: 0.1,
                ease: 'power1.out',
            });
        }
    };

    const handleMouseLeave = () => {
        if (backlight.current) {
            gsap.to(backlight.current, {
                width: 500,
                height: 500,
                opacity: 0.2,
                duration: 0.2,
                ease: 'power2.out',
            });
        }
    };

    useEffect(() => {
        const initMouseEffect = () => {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseleave', handleMouseLeave);
        };

        const timer = setTimeout(() => {
            if (backlight.current) {
                gsap.set(backlight.current, {
                    width: 500,
                    height: 500,
                    opacity: 0.2,
                    boxShadow: '0 0 100px rgba(121, 88, 73, 0.5)',
                });
            }
            initMouseEffect();
        }, 500);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return <div ref={backlight} className="backlight"></div>;
};

export default Backlight;
