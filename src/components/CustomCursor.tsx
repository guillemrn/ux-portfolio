import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [cursorSize, setCursorSize] = useState(20);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.classList.contains('cursor-pointer') ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.cursor-pointer')
            ) {
                setCursorSize(80);
                setIsHovering(true);
            } else {
                setCursorSize(20);
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full border border-brand-dark/20 pointer-events-none z-9999 hidden md:flex items-center justify-center transition-colors duration-300"
            style={{
                width: cursorSize,
                height: cursorSize,
                x: mouseX,
                y: mouseY,
                left: -cursorSize / 2,
                top: -cursorSize / 2,
                borderColor: isHovering ? 'var(--color-brand-accent)' : 'rgba(5, 46, 28, 0.2)'
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        >
            <AnimatePresence>
                {isHovering && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="text-[10px] font-sans font-black uppercase text-brand-accent tracking-tighter"
                    >
                        Ver
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// Need to import AnimatePresence inside the component's file or use it from framer-motion
import { AnimatePresence } from 'framer-motion';
