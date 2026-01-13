import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Our Services | Bluelupin Technologies',
    description: 'Explore our comprehensive range of AI-native software development services.',
};

const services = [
    {
        title: 'AI Solutions',
        description: 'Custom AI development, machine learning models, intelligent automation, and AI integration services to transform your business.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        href: '/ai-solutions',
        features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
        gradient: 'from-[#4facfe] to-[#00f2fe]',
    },
    {
        title: 'Digital Experience',
        description: 'Modern web and mobile applications with exceptional user experiences that engage and convert.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        href: '/services/digital-experience',
        features: ['Web Applications', 'Mobile Apps', 'Progressive Web Apps', 'UI/UX Design'],
        gradient: 'from-[#a855f7] to-[#6366f1]',
    },
    {
        title: 'ERP Automation',
        description: 'Streamline operations with intelligent enterprise resource planning solutions and workflow automation.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        href: '/services/erp-automation',
        features: ['Process Automation', 'Workflow Optimization', 'Integration Services', 'Custom ERP Solutions'],
        gradient: 'from-[#f97316] to-[#eab308]',
    },
    {
        title: 'Blitz - MVP Development',
        description: 'Rapid MVP development to validate ideas and bring your products to market faster.',
        icon: (
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        href: '/blitz',
        features: ['Rapid Prototyping', 'MVP Development', 'Product Strategy', 'Go-to-Market Support'],
        gradient: 'from-[#ec4899] to-[#f43f5e]',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-96 lg:py-[400px] text-center border-b border-white/[0.08]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                        Our Services
                    </span>
                    <h1 className="text-[48px] md:text-[64px] font-bold text-white mt-4 mb-6 leading-[1.1]">
                        Solutions That{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Scale
                        </span>
                    </h1>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[550px] mx-auto leading-relaxed">
                        From AI integration to digital transformation, we build solutions that drive real business impact.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="pb-96">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="group p-8 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl hover:border-[#4facfe]/30 transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center text-white/70 flex-shrink-0`}>
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[22px] font-semibold text-white group-hover:text-[#4facfe] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#8b8b9e] text-[14px] mt-3 leading-[1.7]">
                                            {service.description}
                                        </p>

                                        <ul className="mt-6 grid grid-cols-2 gap-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-[#5c5c70] text-[13px]">
                                                    <span className="w-1.5 h-1.5 bg-[#4facfe] rounded-full flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 flex items-center gap-2 text-[#4facfe] text-[14px] font-medium group-hover:gap-4 transition-all">
                                            <span>Learn more</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-96 bg-[#0a0a14] border-t border-b border-white/[0.08]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                            Our Process
                        </span>
                        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                            How We{' '}
                            <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                                Work
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', description: 'Understanding your goals and requirements' },
                            { step: '02', title: 'Strategy', description: 'Crafting the perfect solution approach' },
                            { step: '03', title: 'Development', description: 'Building with agile methodologies' },
                            { step: '04', title: 'Launch', description: 'Deploying and supporting your solution' },
                        ].map((phase) => (
                            <div key={phase.step} className="text-center">
                                <div className="text-[48px] font-bold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent mb-4">
                                    {phase.step}
                                </div>
                                <h3 className="text-[18px] font-semibold text-white mb-2">{phase.title}</h3>
                                <p className="text-[#8b8b9e] text-[13px]">{phase.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-96 border-b border-white/[0.08]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-6 leading-tight">
                        Ready to start your{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            project
                        </span>
                        ?
                    </h2>
                    <p className="text-[#8b8b9e] text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed">
                        Let's discuss how our services can help transform your business.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-1"
                    >
                        Get Started
                    </Link>
                </div>
            </section>
        </>
    );
}
