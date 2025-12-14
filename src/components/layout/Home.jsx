import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Heart, Shield } from 'lucide-react';

const Home = ({ onStartChat, isMatching }) => {
    const { user, updateDisplayName } = useAuth();
    const [name, setName] = useState(user?.displayName?.split(' ')[0] || ''); // Try to parse name without emoji
    const [gender, setGender] = useState('');

    const handleStart = async () => {
        let finalName = name.trim();
        if (gender) {
            const genderEmoji = gender.split(' ')[1]; // Extract emoji
            finalName = finalName ? `${finalName} ${genderEmoji}` : `Anonymous ${genderEmoji}`;
        }

        if (finalName) {
            await updateDisplayName(finalName);
        }
        onStartChat();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isMatching) {
            handleStart();
        }
    };

    return (
        <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-center space-y-8 max-w-md mx-auto animate-in fade-in duration-500">
                {/* Logo/Title */}
                <div className="space-y-4">
                    <div className="flex items-center justify-center gap-4">
                        <Heart className="w-16 h-16 text-primary animate-pulse" />
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                            ChatN'Vibe
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        Anonymous chat for adults.
                        <br />
                        Connect instantly. No login required.
                    </p>
                </div>

                {/* Name Input */}
                <div className="space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter your display name (optional)"
                        className="w-full px-4 py-3 rounded-xl bg-input border-2 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground/50 hover:bg-input/80"
                        disabled={isMatching}
                    />

                    {/* Gender Selection */}
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { label: 'Man ♂️', value: 'Man ♂️' },
                            { label: 'Woman ♀️', value: 'Woman ♀️' },
                            { label: 'Other 🌈', value: 'Other 🌈' }
                        ].map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setGender(option.value)}
                                className={`py-2 px-1 rounded-lg text-sm font-medium transition-all ${gender === option.value
                                    ? 'bg-primary/20 text-primary border-2 border-primary'
                                    : 'bg-card border border-input hover:border-primary/50 hover:bg-accent'
                                    }`}
                                disabled={isMatching}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleStart}
                        disabled={isMatching || !gender}
                        className="w-full py-4 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground rounded-2xl font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isMatching ? (
                            <span className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Searching for someone...
                            </span>
                        ) : (
                            'Start Chatting'
                        )}
                    </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-4 bg-card rounded-xl border border-input hover:border-primary/50 transition-colors shadow-sm cursor-default hover:scale-[1.02]">
                        <span className="block font-bold text-2xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">100%</span>
                        <span className="text-muted-foreground">Anonymous</span>
                    </div>
                    <div className="p-4 bg-card rounded-xl border border-input hover:border-primary/50 transition-colors shadow-sm cursor-default hover:scale-[1.02]">
                        <span className="block font-bold text-2xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">21+</span>
                        <span className="text-muted-foreground">Adults Only</span>
                    </div>
                </div>

                {/* Safe Chat Link - Below Features */}
                <div className="flex justify-center pt-2">
                    <Link to="/safety-guide" className="group inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-1.5 rounded-full border border-border/50 hover:border-primary/30 hover:bg-primary/5">
                        <Shield className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                        <span>Safe Chatting Guide</span>
                    </Link>
                </div>

                {/* Disclaimer */}
                <div className="text-xs text-muted-foreground/70 space-y-1">
                    <p>
                        By starting a chat, you agree to our{' '}
                        <Link to="/terms" className="underline hover:text-primary transition-colors">Terms of Use</Link>
                        {' '}and{' '}
                        <Link to="/privacy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>.
                    </p>
                    <p>Please be respectful and follow community guidelines.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
