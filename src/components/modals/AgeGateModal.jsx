import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

const AgeGateModal = ({ onAccept, onDecline }) => {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-card border border-input rounded-2xl shadow-2xl p-6 space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
                        <ShieldAlert className="w-8 h-8 text-red-600 dark:text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold">Age Verification</h2>
                    <p className="text-muted-foreground">
                        You must be <strong>21 years or older</strong> to use ChatN'Vibe.
                        This site contains user-generated content and is intended for adults only.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={onAccept}
                        className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        I am 21+ (Enter)
                    </button>
                    <button
                        onClick={onDecline}
                        className="w-full py-3 px-4 bg-input hover:bg-input/80 text-foreground font-medium rounded-xl transition-colors hover:bg-accent"
                    >
                        I am under 21 (Exit)
                    </button>
                </div>

                <p className="text-xs text-center text-muted-foreground/60">
                    By entering, you agree to our{' '}
                    <Link to="/terms" className="underline hover:text-primary transition-colors">
                        Terms of Service
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" className="underline hover:text-primary transition-colors">
                        Privacy Policy
                    </Link>.
                </p>
            </div>
        </div>
    );
};

export default AgeGateModal;
