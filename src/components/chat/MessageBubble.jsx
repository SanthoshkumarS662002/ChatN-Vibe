import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { format } from 'date-fns';

const MessageBubble = ({ message }) => {
    const { user } = useAuth();
    const isSelf = message.fromUserId === user?.uid;

    const formatTime = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return format(date, 'HH:mm');
    };

    // Common classes for animation
    const animationClasses = "animate-in slide-in-from-bottom-2 fade-in duration-300";

    // System message
    if (message.isSystem) {
        return (
            <div className="flex justify-center mb-4 animate-in fade-in duration-300">
                <span className="text-sm text-muted-foreground italic">
                    {message.text}
                </span>
            </div>
        );
    }

    // Icebreaker styling
    if (message.isIcebreaker) {
        return (
            <div className={`flex mb-4 w-full ${animationClasses} ${isSelf ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${isSelf ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                    {!isSelf && (
                        <span className="text-xs text-muted-foreground px-2">
                            {message.displayName || 'Stranger'}
                        </span>
                    )}

                    <div className="rounded-2xl px-4 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 backdrop-blur-sm">
                        <p className="text-sm font-medium whitespace-pre-wrap break-words">
                            {message.text}
                        </p>
                    </div>

                    <span className="text-xs text-muted-foreground/70 px-2">
                        {formatTime(message.createdAt)}
                    </span>
                </div>
            </div>
        );
    }

    // Regular message styling
    return (
        <div className={`flex mb-4 w-full ${animationClasses} ${isSelf ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] md:max-w-[60%] flex flex-col gap-1 ${isSelf ? 'items-end' : 'items-start'}`}>
                {!isSelf && (
                    <span className="text-xs text-muted-foreground px-2">
                        {message.displayName || 'Stranger'}
                    </span>
                )}

                <div
                    className={`rounded-2xl px-4 py-2 shadow-sm ${isSelf
                            ? 'bg-primary text-primary-foreground rounded-tr-sm'
                            : 'bg-card border border-border text-card-foreground rounded-tl-sm'
                        }`}
                >
                    <p className="text-[15px] leading-relaxed break-words whitespace-pre-wrap">
                        {message.text}
                    </p>
                </div>

                <span className={`text-[10px] px-1 ${isSelf ? 'text-right' : 'text-left'} text-muted-foreground/70`}>
                    {formatTime(message.createdAt)}
                </span>
            </div>
        </div>
    );
};

export default MessageBubble;
