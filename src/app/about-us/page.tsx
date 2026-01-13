import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Bluelupin Technologies',
    description: 'Learn about Bluelupin Technologies journey, our leadership team, and our commitment to excellence in AI-native software development.',
};

// Photo Gallery Component - Scrolling images
const PhotoGallery = () => {
    const photos = [
        { id: 1, alt: 'Team celebration' },
        { id: 2, alt: 'Diwali celebration' },
        { id: 3, alt: 'Team gathering' },
        { id: 4, alt: 'Office event' },
        { id: 5, alt: 'Team photo' },
        { id: 6, alt: 'Award ceremony' },
    ];

    return (
        <div className="overflow-hidden py-8">
            <div className="flex gap-4 animate-scroll-gallery">
                {[...photos, ...photos].map((photo, index) => (
                    <div
                        key={index}
                        className="w-[200px] h-[150px] flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a365d]/30 to-[#0d2137]/20 border border-white/[0.06]"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-[#4facfe]/10 to-transparent flex items-center justify-center">
                            <span className="text-[#5c5c70] text-xs">Photo {photo.id}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Journey Timeline Component
const JourneyTimeline = () => {
    const milestones = [
        { year: '2013', title: 'Founded', description: 'Started with a vision to transform businesses through technology' },
        { year: '2015', title: 'First Enterprise Client', description: 'Partnered with major enterprises for digital transformation' },
        { year: '2018', title: 'AI Integration', description: 'Began integrating AI solutions into our service offerings' },
        { year: '2020', title: 'Global Expansion', description: 'Extended services to international markets including US' },
        { year: '2023', title: 'AI-Native Focus', description: 'Became a fully AI-native development company' },
    ];

    return (
        <section className="py-96 border-b border-white/[0.08]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                        Our Journey
                    </span>
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                        A Decade of{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Innovation
                        </span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#4facfe] via-[#2563eb] to-transparent hidden lg:block" />

                    <div className="space-y-12 lg:space-y-16">
                        {milestones.map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className="inline-block p-6 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl">
                                        <span className="text-[#4facfe] text-[28px] font-bold">{milestone.year}</span>
                                        <h3 className="text-[20px] font-semibold text-white mt-2">{milestone.title}</h3>
                                        <p className="text-[#8b8b9e] text-[14px] mt-2 max-w-[280px]">{milestone.description}</p>
                                    </div>
                                </div>
                                <div className="w-4 h-4 bg-[#4facfe] rounded-full border-4 border-[#080810] z-10 hidden lg:block shadow-[0_0_20px_rgba(79,172,254,0.5)]" />
                                <div className="flex-1 hidden lg:block" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Stats Section
const StatsSection = () => {
    const stats = [
        { number: '10+', label: 'Years Experience' },
        { number: '100+', label: 'Projects Delivered' },
        { number: '50+', label: 'Happy Clients' },
        { number: '98%', label: 'Client Retention' },
    ];

    return (
        <section className="py-96 bg-[#0a0a14] border-b border-white/[0.08]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-[48px] lg:text-[56px] font-bold bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-[#8b8b9e] text-[14px]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Leadership Section
const LeadershipSection = () => {
    const leaders = [
        {
            name: 'Founder & CEO',
            role: 'Visionary Leader',
            description: 'Leading the company with a focus on AI-native solutions and digital transformation.',
        },
        {
            name: 'CTO',
            role: 'Technology Head',
            description: 'Driving technical excellence and innovation across all projects.',
        },
        {
            name: 'VP of Engineering',
            role: 'Engineering Lead',
            description: 'Ensuring delivery of high-quality software solutions.',
        },
    ];

    return (
        <section className="py-96 border-b border-white/[0.08]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                        Leadership
                    </span>
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                        Meet Our{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Leaders
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {leaders.map((leader) => (
                        <div
                            key={leader.name}
                            className="p-8 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl text-center hover:border-[#4facfe]/30 transition-all duration-300"
                        >
                            <div className="w-24 h-24 bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/5 rounded-full mx-auto mb-6 flex items-center justify-center border border-white/[0.06]">
                                <svg className="w-12 h-12 text-[#4facfe]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-[18px] font-semibold text-white">{leader.name}</h3>
                            <p className="text-[#4facfe] text-[13px] mt-1 mb-4">{leader.role}</p>
                            <p className="text-[#8b8b9e] text-[14px] leading-relaxed">{leader.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Values Section
const ValuesSection = () => {
    const values = [
        { title: 'Innovation', description: 'Constantly pushing boundaries with cutting-edge solutions', icon: '💡' },
        { title: 'Excellence', description: 'Delivering the highest quality in everything we do', icon: '⭐' },
        { title: 'Partnership', description: 'Building lasting relationships with our clients', icon: '🤝' },
        { title: 'Integrity', description: 'Operating with transparency and honesty', icon: '🎯' },
    ];

    return (
        <section className="py-96 bg-[#0a0a14] border-b border-white/[0.08]">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
                        Our Values
                    </span>
                    <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
                        What Drives{' '}
                        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">
                            Us
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="p-6 bg-gradient-to-b from-[#0e1018]/50 to-transparent border border-white/[0.04] rounded-2xl text-center"
                        >
                            <div className="text-[40px] mb-4">{value.icon}</div>
                            <h3 className="text-[17px] font-semibold text-white mb-2">{value.title}</h3>
                            <p className="text-[#8b8b9e] text-[13px] leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-96 lg:py-[400px] text-center border-b border-white/[0.08]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <h1 className="text-[48px] md:text-[64px] font-bold text-white mb-4 leading-[1.1]">About Us</h1>
                    <p className="text-[#f97316] uppercase tracking-[0.2em] text-[13px] font-semibold">Our Journey</p>
                </div>
            </section>

            {/* Photo Gallery */}
            <PhotoGallery />

            <JourneyTimeline />
            <StatsSection />
            <LeadershipSection />
            <ValuesSection />
        </>
    );
}
