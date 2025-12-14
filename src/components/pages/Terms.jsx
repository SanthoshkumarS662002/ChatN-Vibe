import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Chat
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
                    <p className="text-muted-foreground mb-8">Last Updated: December 5, 2024</p>

                    <section className="mb-8">
                        <p className="text-lg mb-4">
                            Welcome to ChatN'Vibe! By using our platform, you agree to these Terms of Use. Please read them carefully.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Age Requirement</h2>
                        <p className="mb-4">
                            ChatN'Vibe is strictly for users <strong>21 years and older</strong>. By entering, you confirm you meet this requirement.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Anonymous Chat Platform</h2>
                        <p className="mb-4">
                            ChatN'Vibe allows users to chat anonymously with strangers. We do not verify user identities. You interact at your own risk.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                        <p className="mb-2">You agree NOT to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Share explicit sexual content, nudity, or pornographic material</li>
                            <li>Request or send sexual images</li>
                            <li>Engage in harassment, threats, or abusive behavior</li>
                            <li>Impersonate others</li>
                            <li>Attempt to collect personal data</li>
                            <li>Conduct illegal activities</li>
                            <li>Spam or misuse the matching system</li>
                        </ul>
                        <p className="font-medium text-red-500">Violations may lead to account/session ban.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Prohibited Content</h2>
                        <p className="mb-2">The following are strictly prohibited on ChatN'Vibe:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Sexual, graphic, or explicit content</li>
                            <li>Minors in any context</li>
                            <li>Hate speech, violence, threats</li>
                            <li>Illegal activities of any kind</li>
                            <li>Sharing personal identifiable information (PII)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Matching & Chat Behavior</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Chats are matched randomly.</li>
                            <li>We do not guarantee:
                                <ul className="list-circle pl-6 mt-2 space-y-1">
                                    <li>Match availability</li>
                                    <li>User behavior</li>
                                    <li>Accuracy or truthfulness of user information</li>
                                    <li>Continuous uptime</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Safety Reporting</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Users can report inappropriate behavior via the Report button.</li>
                            <li>We may review messages only for safety and moderation.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Limited Liability</h2>
                        <p className="mb-2">ChatN'Vibe is not responsible for:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>User behavior</li>
                            <li>Harm caused by interactions</li>
                            <li>Loss of data</li>
                            <li>Unauthorized access</li>
                        </ul>
                        <p className="mb-4">You use the service at your own discretion and risk.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
                        <p className="mb-4">
                            We may update these Terms at any time. Changes become effective immediately once posted.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                        <p className="mb-4">
                            We reserve the right to block or remove any user who violates these Terms without prior notice.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                        <p className="mb-4">
                            These Terms are governed by the applicable laws of India.
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default Terms;
