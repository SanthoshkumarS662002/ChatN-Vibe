import React, { useState, useRef, useEffect } from 'react';
import { Smile, Send } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';
import { useChat } from '../../contexts/ChatContext';

const ChatInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const textareaRef = useRef(null);
    const { setTyping } = useChat();
    const typingTimeoutRef = useRef(null);

    const handleTyping = () => {
        setTyping(true);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setTyping(false);
        }, 2000);
    };

    const handleSend = () => {
        if (message.trim()) {
            onSendMessage(message.trim());
            setMessage('');
            setShowEmojiPicker(false);
            setTyping(false);

            // Keep focus to prevent keyboard from closing on mobile
            requestAnimationFrame(() => {
                textareaRef.current?.focus();
            });

            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleEmojiClick = (emojiData) => {
        setMessage((prev) => prev + emojiData.emoji);
        setShowEmojiPicker(false);
        textareaRef.current?.focus();
    };

    return (
        <div className="border-t border-input bg-card">
            <div className="container mx-auto max-w-4xl px-4 py-2">
                {showEmojiPicker && (
                    <div className="mb-2">
                        <EmojiPicker onEmojiClick={handleEmojiClick} width="100%" height={350} />
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="p-2 hover:bg-input rounded-full transition-transform hover:scale-110 active:scale-95 flex-none"
                        type="button"
                    >
                        <Smile className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                    </button>

                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                            handleTyping();
                        }}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        className="flex-1 bg-input rounded-full px-4 py-2.5 resize-none outline-none focus:ring-2 focus:ring-primary/50 transition-all max-h-32 text-foreground placeholder:text-muted-foreground/50 hover:bg-input/80 min-h-[44px] flex items-center"
                        rows={1}
                        style={{ lineHeight: '1.5' }}
                    />

                    <button
                        onClick={handleSend}
                        disabled={!message.trim()}
                        className="p-2.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md hover:shadow-primary/20 flex-none"
                        type="button"
                    >
                        <Send className="w-5 h-5 translate-x-0.5 translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
