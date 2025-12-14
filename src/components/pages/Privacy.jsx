import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Chat
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: December 5, 2024</p>

                    <section className="mb-8">
                        <p className="text-lg mb-4">
                            Your privacy matters to us. This policy explains what data we collect and how we use it.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
                                <h3 className="font-semibold text-green-600 dark:text-green-400 mb-2">We collect:</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Anonymous session IDs</li>
                                    <li>Display name (optional)</li>
                                    <li>Age confirmation (21+)</li>
                                    <li>Chat messages (stored temporarily for moderation/safety)</li>
                                    <li>Reports submitted by users</li>
                                    <li>Device info (non-identifiable analytics)</li>
                                    <li>Theme preference (localStorage)</li>
                                </ul>
                            </div>
                            <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20">
                                <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">We do NOT collect:</h3>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Real names</li>
                                    <li>Phone numbers</li>
                                    <li>Email addresses</li>
                                    <li>Photos of users</li>
                                    <li>Any sexual or explicit media</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
                        <p className="mb-2">We use collected data to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Enable anonymous chat</li>
                            <li>Match users</li>
                            <li>Moderate safety violations</li>
                            <li>Improve user experience</li>
                            <li>Prevent abuse and spam</li>
                            <li>Analyze basic usage metrics</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
                        <p className="mb-2">ChatN'Vibe uses:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Firebase Firestore (database)</li>
                            <li>Firebase Authentication (anonymous login)</li>
                            <li>Firebase Analytics / GA4 (optional)</li>
                        </ul>
                        <p className="mb-4">These services may collect metadata for security and performance.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li><strong>Messages:</strong> temporarily retained for moderation</li>
                            <li><strong>Reports:</strong> retained for safety</li>
                            <li><strong>Non-personal metadata:</strong> analytics retention</li>
                            <li>No personal user profile is stored</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                        <p className="mb-4">
                            We use Firebase security rules and storage protections to prevent unauthorized access.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Cookies & Local Storage</h2>
                        <p className="mb-2">We store:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Age verification</li>
                            <li>Display name</li>
                            <li>Theme preference</li>
                        </ul>
                        <p className="mb-4">These are stored locally and not shared with us.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. User Rights</h2>
                        <p className="mb-2">You may request:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Data deletion</li>
                            <li>Access to what limited data exists</li>
                            <li>Blocking of abusive users</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Changes</h2>
                        <p className="mb-4">
                            We may update this Privacy Policy anytime.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default Privacy;
