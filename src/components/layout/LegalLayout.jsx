import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LegalLayout = ({ children }) => (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
    </div>
);

export default LegalLayout;
