import React, { useEffect, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const [cursorSize, setCursorSize] = useState(20);
    const [isHovering, setIsHovering] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Theme detection
            const themedParent = target.closest('[data-theme]') as HTMLElement;
            if (themedParent) {
                const newTheme = themedParent.getAttribute('data-theme') as 'light' | 'dark';
                setTheme(newTheme);
            }

            // Hover interaction (Ver)
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

    // Border and Background logic
    // Light bg -> Dark Green cursor
    // Dark bg -> Cream cursor
    // Hover -> Neon Border & Bg
    const getBorderColor = () => {
        if (isHovering) return 'var(--color-brand-accent)';
        return theme === 'light' ? 'var(--color-brand-dark)' : 'var(--color-brand-cream)';
    };

    const getBgColor = () => {
        if (isHovering) return 'rgba(41, 208, 103, 0.7)'; // Brand accent with opacity
        return 'transparent';
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full border pointer-events-none z-9999 hidden md:flex items-center justify-center"
            style={{
                width: cursorSize,
                height: cursorSize,
                x: mouseX,
                y: mouseY,
                left: -cursorSize / 2,
                top: -cursorSize / 2,
                borderColor: getBorderColor(),
                backgroundColor: getBgColor(),
                borderWidth: isHovering ? 0 : 1.5,
                transition: 'border-color 0.3s ease, background-color 0.3s ease, border-width 0.3s ease'
            }}
        >
            <AnimatePresence>
                {isHovering && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="text-[10px] font-sans font-black uppercase text-brand-dark tracking-tighter"
                    >
                        Ver
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
