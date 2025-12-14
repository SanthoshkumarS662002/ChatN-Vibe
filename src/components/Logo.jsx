import React from 'react';

const Logo = ({ className = "w-12 h-12" }) => {
    return (
        <svg
            viewBox="0 0 32 32"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="heartGrad" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <filter id="heartGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <path
                d="M16 28C16 28 3 20.5 3 11.5C3 7.5 6 4.5 10 4.5C12.5 4.5 14.5 5.5 16 7.5C17.5 5.5 19.5 4.5 22 4.5C26 4.5 29 7.5 29 11.5C29 20.5 16 28 16 28Z"
                fill="url(#heartGrad)"
                filter="url(#heartGlow)"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Logo;
