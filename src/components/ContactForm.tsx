'use client';

import { useState, FormEvent } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    service: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}

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

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>('idle');
    const [lastSubmitTime, setLastSubmitTime] = useState(0);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Please tell us about your project';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Rate limiting - prevent submissions within 3 seconds
        const now = Date.now();
        if (now - lastSubmitTime < 3000) {
            return;
        }
        setLastSubmitTime(now);

        if (!validateForm()) {
            return;
        }

        setStatus('submitting');

        // Sanitize all inputs
        const sanitizedData = {
            firstName: sanitizeInput(formData.firstName),
            lastName: sanitizeInput(formData.lastName),
            email: sanitizeInput(formData.email),
            company: sanitizeInput(formData.company),
            service: formData.service,
            message: sanitizeInput(formData.message),
        };

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Log sanitized data (in production, this would be sent to an API)
            console.log('Form submitted:', sanitizedData);

            setStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                service: '',
                message: '',
            });
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-[22px] font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-[#8b8b9e] text-[14px] mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-[#4facfe] text-[14px] font-medium hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl p-8">
            <h3 className="text-[22px] font-semibold text-white mb-6">Send us a message</h3>

            {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-[14px]">
                    Something went wrong. Please try again.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label htmlFor="firstName" className="block text-[#8b8b9e] text-[13px] mb-2 font-medium">
                            First Name <span className="text-[#ef4444]">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            className={`w-full px-4 py-3.5 bg-white/[0.03] border rounded-xl text-white text-[14px] placeholder-[#5c5c70] focus:outline-none focus:border-[#4facfe]/50 focus:bg-white/[0.05] transition-all duration-200 ${errors.firstName ? 'border-red-500/50' : 'border-white/[0.08]'
                                }`}
                            placeholder="John"
                        />
                        {errors.firstName && (
                            <p className="mt-1 text-red-400 text-[12px]">{errors.firstName}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-[#8b8b9e] text-[13px] mb-2 font-medium">
                            Last Name <span className="text-[#ef4444]">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            className={`w-full px-4 py-3.5 bg-white/[0.03] border rounded-xl text-white text-[14px] placeholder-[#5c5c70] focus:outline-none focus:border-[#4facfe]/50 focus:bg-white/[0.05] transition-all duration-200 ${errors.lastName ? 'border-red-500/50' : 'border-white/[0.08]'
                                }`}
                            placeholder="Doe"
                        />
                        {errors.lastName && (
                            <p className="mt-1 text-red-400 text-[12px]">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-[#8b8b9e] text-[13px] mb-2 font-medium">
                        Work Email <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full px-4 py-3.5 bg-white/[0.03] border rounded-xl text-white text-[14px] placeholder-[#5c5c70] focus:outline-none focus:border-[#4facfe]/50 focus:bg-white/[0.05] transition-all duration-200 ${errors.email ? 'border-red-500/50' : 'border-white/[0.08]'
                            }`}
                        placeholder="john@company.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-red-400 text-[12px]">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="company" className="block text-[#8b8b9e] text-[13px] mb-2 font-medium">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] placeholder-[#5c5c70] focus:outline-none focus:border-[#4facfe]/50 focus:bg-white/[0.05] transition-all duration-200"
                        placeholder="Your company name"
                    />
                </div>

                <div>
                    <label htmlFor="service" className="block text-[#8b8b9e] text-[13px] mb-2 font-medium">
                        Service Interested In
                    </label>
                    <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-[14px] focus:outline-none focus:border-[#4facfe]/50 focus:bg-white/[0.05] transition-all duration-200 appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                            backgroundPosition: 'right 12px center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '20px',
                        }}
                    >
                        <option value="" className="bg-[#0e1018]">Select a service</option>
                        <option value="ai-solutions" className="bg-[#0e1018]">AI Solutions</option>
                        <option value="digital-experience" className="bg-[#0e1018]">Digital Experience</option>
                        <option value="erp-automation" className="bg-[#0e1018]">ERP Automation</option>
                        <option value="blitz" className="bg-[#0e1018]">Blitz (MVP Development)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-[#8b8b9e] text-[13px] mb-2 font-medium">
                        Tell us about your project <span className="text-[#ef4444]">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={`w-full px-4 py-3.5 bg-white/[0.03] border rounded-xl text-white text-[14px] placeholder-[#5c5c70] focus:outline-none focus:border-[#4facfe]/50 focus:bg-white/[0.05] transition-all duration-200 resize-none ${errors.message ? 'border-red-500/50' : 'border-white/[0.08]'
                            }`}
                        placeholder="Describe your project requirements..."
                    />
                    {errors.message && (
                        <p className="mt-1 text-red-400 text-[12px]">{errors.message}</p>
                    )}
                </div>

                {/* Honeypot field for spam prevention */}
                <input
                    type="text"
                    name="website"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                />

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-[0_4px_20px_rgba(79,172,254,0.3)]"
                >
                    {status === 'submitting' ? (
                        <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
}
