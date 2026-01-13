'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

// Simple input sanitization
const sanitizeInput = (input: string): string => {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .trim();
};

// Email validation
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');
    const [lastSubmitTime, setLastSubmitTime] = useState(0);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Rate limiting
        const now = Date.now();
        if (now - lastSubmitTime < 3000) {
            return;
        }
        setLastSubmitTime(now);

        // Validation
        if (!email.trim()) {
            setError('Email is required');
            return;
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        setStatus('submitting');

        const sanitizedEmail = sanitizeInput(email);

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log('Newsletter subscription:', sanitizedEmail);
            setStatus('success');
            setEmail('');
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="max-w-[500px] mx-auto text-center">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <p className="text-green-400 font-medium mb-1">You're subscribed!</p>
                    <p className="text-[#8b8b9e] text-[13px]">Thanks for joining our newsletter.</p>
                </div>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-[#4facfe] text-[13px] hover:underline"
                >
                    Subscribe another email
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-[500px] mx-auto">
            {status === 'error' && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-[13px] text-center">
                    Something went wrong. Please try again.
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-8">
                <div className="flex-1">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                        }}
                        placeholder="Enter your email"
                        className={`w-full px-5 py-4 bg-white/[0.03] border rounded-xl text-white text-[14px] placeholder-[#5c5c70] focus:outline-none focus:border-[#4facfe]/50 transition-all ${error ? 'border-red-500/50' : 'border-white/[0.08]'
                            }`}
                    />
                    {error && (
                        <p className="mt-1 text-red-400 text-[12px] text-left">{error}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[14px] font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                >
                    {status === 'submitting' ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            ...
                        </span>
                    ) : (
                        'Subscribe'
                    )}
                </button>
            </form>
        </div>
    );
}
