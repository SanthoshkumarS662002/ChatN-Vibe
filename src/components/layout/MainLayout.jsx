import React from 'react';
import Header from './Header';

const MainLayout = ({ children }) => {
    return (
        <div className="h-screen bg-background text-foreground flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 container mx-auto max-w-4xl flex flex-col relative overflow-hidden">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
