import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-brand-dark shadow-sm backdrop-blur-sm ${className}`}>
            {children}
        </span>
    );
};
