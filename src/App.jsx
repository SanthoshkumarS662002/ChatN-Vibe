import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ChatProvider, useChat } from './contexts/ChatContext';
import MainLayout from './components/layout/MainLayout';
import ChatControls from './components/layout/ChatControls';
import Footer from './components/layout/Footer';
import AgeGateModal from './components/modals/AgeGateModal';
import ReportModal from './components/modals/ReportModal';
import { useMatch } from './hooks/useMatch';
import MessageBubble from './components/chat/MessageBubble';
import ChatInput from './components/chat/ChatInput';
import { containsProfanity } from './utils/profanityFilter';
import { getRandomQuestion } from './utils/icebreakerQuestions';
import Home from './components/layout/Home';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import Cookies from './components/pages/Cookies';
import Contact from './components/pages/Contact';
import SafeChatGuide from './components/pages/SafeChatGuide';
import LogoShowcase from './components/LogoShowcase';
import Header from './components/layout/Header';
import LegalLayout from './components/layout/LegalLayout';
import ScrollToTop from './components/ScrollToTop';
import { db } from './firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

// Inner component to use hooks that require providers
const ChatApp = () => {
  const [hasConsent, setHasConsent] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);
  const [icebreakerCooldown, setIcebreakerCooldown] = useState(0);
  const [isBanned, setIsBanned] = useState(false);

  const { user, signIn } = useAuth();
  const { sessionId, messages, isMatching, startMatching, endChat, sendMessage, partnerTyping, partner } = useChat();
  const { findMatch, cancelMatch } = useMatch();
  const messagesEndRef = useRef(null);

  // Check for ban status
  useEffect(() => {
    if (!user) return;

    const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        if (data.mitigationStatus === 'banned') {
          setIsBanned(true);
          // If in a chat, end it
          if (sessionId) {
            endChat();
          }
        }
      }
    });

    return () => unsubscribe();
  }, [user, sessionId]);

  useEffect(() => {
    const consent = localStorage.getItem('chatnvibe-age-consent');
    if (consent) {
      setHasConsent(true);
      setShowAgeGate(false);
      signIn().catch(console.error);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, partnerTyping]); // Scroll when typing status changes too

  const handleAgeAccept = async () => {
    localStorage.setItem('chatnvibe-age-consent', new Date().toISOString());
    setHasConsent(true);
    setShowAgeGate(false);
    await signIn();
  };

  const handleAgeDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleStartChat = async () => {
    await findMatch();
  };

  const handleNewChat = async () => {
    // End current chat if exists
    if (sessionId) {
      await endChat();
    }
    // Small delay to ensure cleanup
    await new Promise(resolve => setTimeout(resolve, 500));
    // Start new match immediately
    await findMatch();
  };

  const handleSendMessage = async (text) => {
    if (containsProfanity(text)) {
      alert("Your message contains inappropriate content.");
      return;
    }
    await sendMessage(text);
  };

  const handleIcebreaker = async () => {
    if (icebreakerCooldown > 0) return;

    const question = getRandomQuestion();
    await sendMessage(`🎲 ${question}`, null, false, true); // Add icebreaker flag

    // Start 60-second cooldown
    setIcebreakerCooldown(60);
    const interval = setInterval(() => {
      setIcebreakerCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleReport = () => {
    setShowReportModal(true);
  };

  const handleReportSubmitted = async () => {
    // Just end the chat. This will clear sessionId locally for the reporter
    // and take them to the Home screen.
    await endChat();
  };

  if (isBanned) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center shadow-lg">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Account Suspended</h2>
          <p className="text-muted-foreground mb-6">
            Your account has been suspended due to multiple reports of community guidelines violations.
          </p>
          <div className="text-sm text-muted-foreground/60">
            If you believe this is a mistake, please contact support.
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showAgeGate && (
        <AgeGateModal onAccept={handleAgeAccept} onDecline={handleAgeDecline} />
      )}
      {showReportModal && (
        <ReportModal
          onClose={() => setShowReportModal(false)}
          onReportSubmitted={handleReportSubmitted}
        />
      )}

      <MainLayout>
        {sessionId ? (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            {/* Top Ad - Fixed */}
            <div className="w-full px-4 pt-2 flex-none">
              <div className="ad-top w-full h-[60px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs text-muted-foreground rounded-lg border border-border/50">
                Ad Space (Top)
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto min-h-0">
              <div className="text-center text-muted-foreground my-4 text-sm">
                You are connected! Say hello.
              </div>
              {messages.map((msg) => (
                <MessageBubble key={msg.id} message={msg} />
              ))}

              {partnerTyping && (
                <div className="flex justify-start mb-4 px-4">
                  <div className="bg-card border border-input rounded-2xl px-4 py-2 text-xs text-muted-foreground italic animate-pulse">
                    {partner?.displayName || 'Stranger'} is typing...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Bottom Ad - Fixed - Reduced spacing */}
            <div className="w-full px-4 pt-1 pb-1 flex-none">
              <div className="ad-bottom w-full h-[50px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs text-muted-foreground rounded-lg border border-border/50">
                Ad Space (Bottom)
              </div>
            </div>

            <div className="flex-none">
              <ChatInput
                onSendMessage={handleSendMessage}
              />
            </div>

            <div className="flex-none">
              <ChatControls
                onNewChat={handleNewChat}
                onIcebreaker={handleIcebreaker}
                onReport={handleReport}
                icebreakerCooldown={icebreakerCooldown}
              />
            </div>

            <div className="flex-none">
              <Footer />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col h-full overflow-hidden">
            <Home onStartChat={handleStartChat} isMatching={isMatching} />
            <div className="flex-none">
              <Footer />
            </div>
          </div>
        )}
      </MainLayout>
    </>
  );
};



function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <ChatProvider>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<ChatApp />} />
              <Route path="/terms" element={<LegalLayout><Terms /></LegalLayout>} />
              <Route path="/privacy" element={<LegalLayout><Privacy /></LegalLayout>} />
              <Route path="/cookies" element={<LegalLayout><Cookies /></LegalLayout>} />
              <Route path="/contact" element={<LegalLayout><Contact /></LegalLayout>} />
              <Route path="/safety-guide" element={<LegalLayout><SafeChatGuide /></LegalLayout>} />
              <Route path="/logo-test" element={<LogoShowcase />} />
            </Routes>
          </ThemeProvider>
        </ChatProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
