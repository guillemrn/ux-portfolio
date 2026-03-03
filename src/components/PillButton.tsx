import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface PillButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
    children: React.ReactNode;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}

export const PillButton: React.FC<PillButtonProps> = ({
    variant = 'primary',
    children,
    iconLeft,
    iconRight,
    className = '',
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-sans font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent cursor-pointer gap-2 select-none';

    const variants = {
        primary: 'bg-brand-dark text-white hover:bg-brand-dark/90',
        secondary: 'bg-brand-cream text-brand-dark hover:bg-brand-cream/80',
        outline: 'bg-transparent border border-brand-dark text-brand-dark hover:bg-brand-dark/5',
        accent: 'bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20',
        ghost: 'bg-transparent text-brand-dark/60 hover:text-brand-dark hover:bg-brand-dark/5 border border-transparent'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            className={`${baseStyles} ${variants[variant]} ${className} `}
            {...props}
        >
            {iconLeft && (
                <motion.span
                    initial={false}
                    whileHover={{ x: -2 }}
                    className="flex items-center justify-center"
                >
                    {iconLeft}
                </motion.span>
            )}

            <span className="relative">
                {children}
            </span>

            {iconRight && (
                <motion.span
                    initial={false}
                    animate={variant === 'accent' ? { y: [0, 4, 0] } : {}}
                    transition={variant === 'accent' ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
                    whileHover={{ x: 2, y: 2 }}
                    className="flex items-center justify-center"
                >
                    {iconRight}
                </motion.span>
            )}
        </motion.button>
    );
};
