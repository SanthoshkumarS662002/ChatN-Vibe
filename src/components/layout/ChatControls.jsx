import React from 'react';
import { MessageSquarePlus, Dices, Flag } from 'lucide-react';

const ChatControls = ({ onNewChat, onIcebreaker, onReport, icebreakerCooldown }) => {
    return (
        <div className="border-t border-input bg-card/80 backdrop-blur-sm pb-safe pt-2">
            <div className="container mx-auto max-w-4xl px-4 pb-2 flex gap-2">
                <button
                    onClick={onNewChat}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <MessageSquarePlus className="w-4 h-4 animate-pulse" />
                    <span className="hidden sm:inline">New Chat</span>
                </button>

                <button
                    onClick={onIcebreaker}
                    disabled={icebreakerCooldown > 0}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <Dices className={`w-4 h-4 ${icebreakerCooldown === 0 ? 'group-hover:rotate-12 transition-transform' : ''}`} />
                    <span className="hidden sm:inline">
                        {icebreakerCooldown > 0 ? `${icebreakerCooldown}s` : 'Icebreaker'}
                    </span>
                </button>

                <button
                    onClick={onReport}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <Flag className="w-4 h-4" />
                    <span className="hidden sm:inline">Report</span>
                </button>
            </div>
        </div>
    );
};

export default ChatControls;
