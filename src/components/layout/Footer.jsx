import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full border-t border-input bg-card/50 backdrop-blur-sm py-4 md:py-6 mt-auto">
            <div className="container mx-auto max-w-4xl px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] md:text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary opacity-80" />
                    <span className="font-semibold text-foreground/80 tracking-tight">ChatN'Vibe</span>
                </div>

                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                    <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
                    <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                    <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
                    <Link to="/safety-guide" className="hover:text-primary transition-colors">Safety</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <div className="opacity-60 hidden md:block">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>
                {/* Mobile copyright simplified or hidden to save space? Let's keep it minimal */}
                <div className="opacity-60 md:hidden scale-90">
                    &copy; 2025
                </div>
            </div>
        </footer>
    );
};

export default Footer;
