import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Concept 1: Modern Digital Heart (Neomorphic/Apple Style)
const LogoFluid = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="10" y1="90" x2="90" y2="10" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="50%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <path
            d="M50 88C50 88 12 65 12 38C12 24 22 15 34 15C42 15 47 20 50 25C53 20 58 15 66 15C78 15 88 24 88 38C88 65 50 88 50 88Z"
            fill="url(#grad1)"
            stroke="url(#grad1)"
            strokeWidth="3"
            filter="url(#glow)"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Concept 2: Infinity Heart (Minimalist Line Art)
const LogoInfinity = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad2" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
        </defs>
        <path
            d="M50 35C50 35 35 15 20 15C10 15 5 25 5 35C5 55 50 85 50 85C50 85 95 55 95 35C95 25 90 15 80 15C65 15 50 35 50 35Z"
            stroke="url(#grad2)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M25 25C25 25 35 35 50 50"
            stroke="url(#grad2)"
            strokeWidth="4"
            strokeLinecap="round"
            className="opacity-50"
        />
    </svg>
);

// Concept 3: Chat Bubble Heart (Tech/Startup)
const LogoChat = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad3" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
        </defs>
        <path
            d="M50 90L35 75H25C14 75 5 66 5 55V35C5 24 14 15 25 15H75C86 15 95 24 95 35V55C95 66 86 75 75 75H65L50 90Z"
            fill="url(#grad3)"
            opacity="0.1"
        />
        <path
            d="M50 65C50 65 25 50 25 38C25 32 30 28 35 28C40 28 45 32 50 35C55 32 60 28 65 28C70 28 75 32 75 38C75 50 50 65 50 65Z"
            fill="url(#grad3)"
            stroke="white"
            strokeWidth="2"
        />
    </svg>
);

// Concept 4: Geometric Heart (Sharp & Modern)
const LogoGeometric = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad4" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
        </defs>
        <path
            d="M50 20L35 10L20 20L15 35L20 50L50 85L80 50L85 35L80 20L65 10L50 20Z"
            fill="url(#grad4)"
            opacity="0.9"
        />
        <path
            d="M50 20L35 10L20 20L15 35L20 50L50 85L80 50L85 35L80 20L65 10L50 20Z"
            stroke="url(#grad4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// Concept 5: Dual Hearts (Connection Theme)
const LogoDualHearts = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad5" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
        </defs>
        <path
            d="M35 50C35 50 15 35 15 23C15 17 19 12 25 12C30 12 33 16 35 20C37 16 40 12 45 12C51 12 55 17 55 23C55 35 35 50 35 50Z"
            fill="url(#grad5)"
            opacity="0.8"
        />
        <path
            d="M65 50C65 50 45 35 45 23C45 17 49 12 55 12C60 12 63 16 65 20C67 16 70 12 75 12C81 12 85 17 85 23C85 35 65 50 65 50Z"
            fill="url(#grad5)"
        />
        <circle cx="50" cy="50" r="8" fill="url(#grad5)" />
    </svg>
);

// Concept 6: Pulse Heart (Dynamic & Energetic)
const LogoPulse = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad6" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
        </defs>
        <path
            d="M10 50L25 50L35 30L45 70L55 30L65 50L90 50"
            stroke="url(#grad6)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <circle cx="50" cy="50" r="25" stroke="url(#grad6)" strokeWidth="3" opacity="0.3" />
        <circle cx="50" cy="50" r="15" fill="url(#grad6)" opacity="0.5" />
    </svg>
);

// Concept 7: Origami Heart (Elegant & Sophisticated)
const LogoOrigami = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad7" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
        </defs>
        <path d="M50 15L30 25L20 45L30 65L50 85L70 65L80 45L70 25L50 15Z" fill="url(#grad7)" opacity="0.3" />
        <path d="M50 15L30 25L50 45L70 25L50 15Z" fill="url(#grad7)" opacity="0.6" />
        <path d="M50 45L30 65L50 85L70 65L50 45Z" fill="url(#grad7)" />
        <path d="M50 15L70 25L80 45L70 65L50 85L30 65L20 45L30 25L50 15Z" stroke="url(#grad7)" strokeWidth="2" />
    </svg>
);

// Concept 8: Minimalist Dot Heart (Ultra Clean)
const LogoDotHeart = ({ className = "w-24 h-24" }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad8" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
        </defs>
        <circle cx="30" cy="30" r="12" fill="url(#grad8)" />
        <circle cx="70" cy="30" r="12" fill="url(#grad8)" />
        <path
            d="M15 35C15 35 20 50 50 80C80 50 85 35 85 35"
            stroke="url(#grad8)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
        />
    </svg>
);

const LogoShowcase = () => {
    const { theme, toggleTheme } = useTheme();

    const logos = [
        { Component: LogoFluid, title: "1. Fluid Neon", desc: "Modern, glossy, high-end. Apple/iOS design language." },
        { Component: LogoInfinity, title: "2. Infinity Line", desc: "Minimalist, clean, vector. Scales perfectly." },
        { Component: LogoChat, title: "3. Chat Bubble", desc: "Friendly, tech-focused. Clear meaning." },
        { Component: LogoGeometric, title: "4. Geometric", desc: "Sharp, modern, crystalline. Bold statement." },
        { Component: LogoDualHearts, title: "5. Dual Hearts", desc: "Connection theme. Two people chatting." },
        { Component: LogoPulse, title: "6. Pulse", desc: "Dynamic, energetic. Heartbeat of conversation." },
        { Component: LogoOrigami, title: "7. Origami", desc: "Elegant, sophisticated. Folded paper art." },
        { Component: LogoDotHeart, title: "8. Dot Heart", desc: "Ultra minimal. Clean and simple." }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-foreground transition-colors duration-300">
            <h1 className="text-3xl font-bold mb-4">Logo Concepts</h1>
            <p className="text-muted-foreground mb-8">8 Premium Neon-Style Options</p>

            <button onClick={toggleTheme} className="mb-12 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-opacity">
                Toggle Theme (Current: {theme.toUpperCase()})
            </button>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
                {logos.map(({ Component, title, desc }, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-card border border-input rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="mb-4 p-4">
                            <Component className="w-32 h-32 drop-shadow-2xl" />
                        </div>
                        <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
                        <p className="text-center text-muted-foreground text-xs leading-relaxed">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center text-muted-foreground max-w-2xl">
                <p className="text-sm">These are pure SVG components. No blurry images. 100% scalable.</p>
                <p className="mt-2 font-semibold">Which number do you prefer? (1-8)</p>
            </div>
        </div>
    );
};

export default LogoShowcase;
export { LogoFluid, LogoInfinity, LogoChat, LogoGeometric, LogoDualHearts, LogoPulse, LogoOrigami, LogoDotHeart };
