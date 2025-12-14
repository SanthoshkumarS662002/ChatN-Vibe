import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, AlertTriangle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Chat
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <section>
                                <p className="text-lg mb-4">
                                    If you have questions, issues, or wish to report a policy violation, please reach out to us.
                                </p>
                            </section>

                            <section className="bg-card border border-input rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-semibold m-0">Email Support</h2>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    We typically respond within 3-5 business days.
                                </p>
                                <a
                                    href="mailto:support@chatnvibe.com"
                                    className="text-primary hover:underline font-medium text-lg"
                                >
                                    support@chatnvibe.com
                                </a>
                            </section>

                            <section className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-red-500/10 rounded-full">
                                        <AlertTriangle className="w-6 h-6 text-red-500" />
                                    </div>
                                    <h2 className="text-xl font-semibold m-0 text-red-600 dark:text-red-400">Safety Concerns</h2>
                                </div>
                                <p className="text-muted-foreground mb-0">
                                    For urgent safety concerns or to report abusive behavior during a chat, please use the <strong>Report</strong> button directly within the chat interface for immediate action.
                                </p>
                            </section>
                        </div>

                        <div className="bg-card border border-input rounded-2xl p-6">
                            <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-input rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-input rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        className="w-full bg-input rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20 min-h-[120px] resize-none"
                                        placeholder="How can we help?"
                                    ></textarea>
                                </div>
                                <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity">
                                    Send Message
                                </button>
                                <p className="text-xs text-muted-foreground text-center">
                                    This form is currently a demo. Please use email for contact.
                                </p>
                            </form>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Contact;
