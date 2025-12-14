import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Cookies = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Chat
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-3xl font-bold mb-2">Cookie Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: December 5, 2024</p>

                    <section className="mb-8">
                        <p className="text-lg mb-4">
                            ChatN'Vibe uses cookies/local storage to improve your experience.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. What We Store</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Theme mode (light/dark)</li>
                            <li>Age-gate confirmation</li>
                            <li>Display name preference</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Third-Party Cookies</h2>
                        <p className="mb-2">Firebase and Google Analytics may set cookies related to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Performance</li>
                            <li>Usage statistics</li>
                            <li>App stability</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Why We Use Them</h2>
                        <p className="mb-2">Cookies help us:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Remember preferences</li>
                            <li>Improve functionality</li>
                            <li>Analyze traffic and improve UX</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
                        <p className="mb-4">
                            You may disable cookies via your browser settings. However, some features (like saving your theme or age verification) may not work properly.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default Cookies;
