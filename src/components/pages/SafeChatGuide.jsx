import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const SafeChatGuide = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Chat
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-10 h-10 text-primary" />
                        <h1 className="text-3xl font-bold m-0">Safe Chatting Guide</h1>
                    </div>

                    <p className="text-muted-foreground mb-8">Last Updated: December 11, 2024</p>

                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
                        <p className="text-lg font-medium mb-0">
                            At ChatN’Vibe, your safety and comfort come first. This guide will help you chat confidently, protect your privacy, and recognize unsafe behavior. Please read carefully before using the platform.
                        </p>
                    </div>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">🔞 1. Age Requirement — 21+ Only</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>ChatN’Vibe is strictly for adults aged 21 and above.</li>
                            <li>Never allow minors to use this platform on your device.</li>
                            <li>If someone appears underage, end the chat immediately and report it.</li>
                            <li>Using this app as a minor violates our Terms and may lead to legal action.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">🔐 2. Protect Your Personal Information</h2>
                        <div className="bg-card border border-input rounded-xl p-6">
                            <p className="font-semibold mb-2">Never share:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Your real name</li>
                                    <li>Phone number</li>
                                    <li>Home or work address</li>
                                    <li>Email ID</li>
                                </ul>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Social media profiles</li>
                                    <li>Workplace details</li>
                                    <li>Photos, IDs, or documents</li>
                                    <li>Bank or UPI information</li>
                                </ul>
                            </div>
                            <p className="mt-4 font-medium text-primary">
                                Remember: Once you share something, you cannot take it back. Stay anonymous to stay safe.
                            </p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-red-600 dark:text-red-400">🚫 3. Avoid Meeting in Person</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>ChatN’Vibe is designed for online conversations only.</li>
                            <li>Do NOT meet strangers you’ve met on the platform.</li>
                            <li>Do NOT share live locations or routes.</li>
                            <li>Do NOT send transportation or ride-hailing details.</li>
                        </ul>
                        <p className="font-bold">In-person meetings with strangers can be extremely risky. Your safety {'>'} curiosity.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">🕵️ 4. Watch Out for Suspicious Behavior</h2>
                        <p className="mb-2 font-medium">End the chat immediately if someone:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Pressures you to reveal personal info</li>
                            <li>Asks for money, gifts, or favors</li>
                            <li>Asks for private photos or explicit content</li>
                            <li>Sends unsolicited sexual or inappropriate messages</li>
                            <li>Tries to move you to other platforms (WhatsApp, Instagram, Snapchat, etc.)</li>
                            <li>Pretends to be someone they’re not</li>
                            <li>Tries to manipulate or guilt-trip you</li>
                        </ul>
                        <p className="font-medium italic">Trust your instincts. If something feels off → disconnect + report.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">⚠️ 5. Beware of Scams & Phishing</h2>
                        <p className="mb-2">Some scammers pretend to flirt or connect emotionally before asking for:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>UPI transfers / Wallet payments</li>
                            <li>Gift cards</li>
                            <li>Money for emergencies or “private calls”</li>
                            <li>NSFW content</li>
                        </ul>
                        <p className="font-medium">
                            Remember: No genuine person will ask you for money on a stranger chat app. Never click unknown links or download files.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">♥ 6. Your Mental Health Matters</h2>
                        <p className="mb-2">Chat responsibly. If a conversation makes you feel:</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>Anxious, Triggered, Disrespected, Uncomfortable, or Drained</li>
                        </ul>
                        <p className="mb-2">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>End the chat</li>
                            <li>Block the user</li>
                            <li>Take a break</li>
                            <li>Seek support from trusted friends or professionals</li>
                        </ul>
                        <p>This platform is for positive, respectful adult conversations only.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">🚸 7. Parental & Household Guidance</h2>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>If you are a parent or share devices with family members, ensure minors cannot access ChatN’Vibe.</li>
                            <li>Use device locks, app restrictions, and enable safe browsing tools.</li>
                            <li>We do NOT allow minors under any circumstances.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">🧑‍⚖️ 8. Report Violations Immediately</h2>
                        <p className="mb-2">Use the Report button whenever you see:</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>Abuse, Threats, Harassment</li>
                            <li>Underage users</li>
                            <li>Scam attempts</li>
                            <li>Inappropriate content</li>
                            <li>Any violation of our Terms</li>
                        </ul>
                        <p>Reporting helps keep the community safe.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">🤝 9. Respect & Consent</h2>
                        <p className="mb-2">Always follow respectful communication: No pressure, No harassment, No manipulation, No unwanted advances, No explicit content, No disrespect.</p>
                        <p className="font-medium">Everyone deserves a safe space.</p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">🛡 10. ChatN’Vibe’s Commitment to Safety</h2>
                        <p className="mb-2">We aim to provide:</p>
                        <ul className="list-disc pl-6 space-y-1 mb-4">
                            <li>Anonymous chat without storing sensitive data</li>
                            <li>Community moderation</li>
                            <li>Strict 21+ environment</li>
                            <li>Safety-first design</li>
                            <li>Reporting & flagging tools</li>
                            <li>No sharing of explicit or harmful content</li>
                        </ul>
                        <p className="font-medium">Your well-being is our top priority.</p>
                    </section>

                    <section className="mb-8 p-6 bg-secondary/20 rounded-2xl text-center">
                        <h2 className="text-2xl font-semibold mb-4">💬 11. Final Reminder</h2>
                        <p className="text-lg mb-4">
                            ChatN’Vibe is meant for fun, friendly, and meaningful conversations—not unsafe exchanges.
                        </p>
                        <p className="text-xl font-bold text-primary">
                            Stay anonymous. Stay aware. Stay respectful. Stay safe. ❤️
                        </p>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default SafeChatGuide;
