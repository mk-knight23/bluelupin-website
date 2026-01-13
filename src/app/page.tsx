import Link from 'next/link';
import Image from 'next/image';

// Hero Section - Pixel Perfect Match
const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden pt-64 pb-96">
    {/* Floating 3D Elements - Exact positioning */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large cube - top right */}
      <div
        className="absolute top-[20%] right-[15%] w-[100px] h-[100px] bg-gradient-to-br from-[#1a365d]/40 to-[#0d2137]/30 border border-[#2563eb]/20 rounded-[20px] rotate-12"
        style={{
          animation: 'float 8s ease-in-out infinite',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 0 30px rgba(79,172,254,0.1)'
        }}
      />
      {/* Medium cube */}
      <div
        className="absolute top-[35%] right-[8%] w-[70px] h-[70px] bg-gradient-to-br from-[#1e3a5f]/30 to-[#0f172a]/20 border border-[#4facfe]/15 rounded-[16px] -rotate-6"
        style={{
          animation: 'float 10s ease-in-out infinite 1s',
          boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
        }}
      />
      {/* Small hexagon/cube */}
      <div
        className="absolute top-[55%] right-[20%] w-[50px] h-[50px] bg-gradient-to-br from-[#0891b2]/20 to-[#164e63]/10 border border-[#00f2fe]/20 rounded-[12px] rotate-45"
        style={{
          animation: 'float 7s ease-in-out infinite 2s',
          boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
        }}
      />

      {/* Decorative dots grid - right side */}
      <div className="absolute top-[25%] right-[5%] opacity-40">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white/40 rounded-full" />
          ))}
        </div>
      </div>

      {/* Cyan accent circle */}
      <div
        className="absolute top-[40%] right-[3%] w-10 h-10 rounded-full bg-gradient-to-br from-[#00f2fe]/30 to-transparent"
        style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
      />
    </div>

    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center relative z-10">
      {/* Main Heading - Exact typography */}
      <h1 className="text-[48px] md:text-[56px] lg:text-[72px] font-bold leading-[1.05] tracking-[-0.02em] mb-6">
        <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">AI-Native</span>
        {' '}
        <span className="text-white">Solutions Built for</span>
        <br className="hidden sm:block" />
        <span className="text-white">Scale</span>
      </h1>

      {/* Subheading - Exact styling */}
      <p className="text-[17px] md:text-[19px] text-[#8b8b9e] max-w-[600px] mx-auto mb-10 leading-[1.6]">
        Bluelupin brings national-scale IT and AI expertise so your ideas
        turn into impact - <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent font-medium">faster</span>.
      </p>

      {/* CTA Buttons - Exact match */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/contact"
          className="group inline-flex items-center px-7 py-3.5 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[14px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-0.5"
        >
          Book a 20-min Discovery Call
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center px-7 py-3.5 bg-transparent border border-white/20 text-white text-[14px] font-medium rounded-full hover:bg-white/[0.04] hover:border-white/30 transition-all duration-300"
        >
          Explore Services
        </Link>
      </div>
    </div>

    {/* Bottom Glow Effect */}
    <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-[#4facfe]/[0.06] via-[#2563eb]/[0.03] to-transparent pointer-events-none" />
  </section>
);

// Trusted By Section - With actual client logos
const TrustedBySection = () => {
  const clients = [
    { name: 'Ministry of Electronics & IT', logo: '/logos/meity.svg' },
    { name: 'Nasscom', logo: '/logos/nasscom.svg' },
    { name: 'Vodafone', logo: '/logos/vodafone.svg' },
    { name: 'Tech Mahindra', logo: '/logos/tech-mahindra.svg' },
    { name: 'Mastercard', logo: '/logos/mastercard.svg' },
    { name: 'Bank of Baroda', logo: '/logos/bob.svg' },
  ];

  return (
    <section className="py-96 border-t border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <p className="text-center text-[#5c5c70] text-[13px] uppercase tracking-[0.15em] font-medium mb-12">
          Trusted by industry leaders
        </p>

        {/* Client logos - Two rows with proper spacing */}
        <div className="flex flex-wrap items-center justify-center gap-x-48 gap-y-24">
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-[40px] flex items-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              {/* Placeholder for actual logos - Using text for now */}
              <span className="text-white/50 text-[15px] font-medium tracking-wide">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[#5c5c70] text-[14px] mt-12 max-w-[600px] mx-auto leading-relaxed">
          From government initiatives to global enterprises, our work powers millions of users every day.
        </p>
      </div>
    </section>
  );
};

// What We Deliver Section
const WhatWeDeliverSection = () => (
  <section className="py-96 border-b border-white/[0.08]">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
      <div className="text-center mb-16">
        <span className="text-[#f97316] text-[12px] font-semibold uppercase tracking-[0.2em]">
          What We Deliver
        </span>
        <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
          From enterprise platforms to AI —{' '}
          <br className="hidden md:block" />
          we build what matters
        </h2>
      </div>
    </div>
  </section>
);

// Services Section - Exact match
const ServicesSection = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Custom AI development, machine learning models, and intelligent automation solutions that drive real business outcomes.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: '/ai-solutions',
      color: 'from-[#4facfe] to-[#00f2fe]',
    },
    {
      title: 'Digital Experience',
      description: 'Modern web and mobile applications with exceptional user experiences that engage and convert.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      href: '/services/digital-experience',
      color: 'from-[#a855f7] to-[#6366f1]',
    },
    {
      title: 'ERP Automation',
      description: 'Streamline operations with intelligent enterprise resource planning solutions and workflow automation.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      href: '/services/erp-automation',
      color: 'from-[#f97316] to-[#eab308]',
    },
    {
      title: 'Blitz',
      description: 'Rapid MVP development to bring your ideas to market faster. Launch in weeks, not months.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      href: '/blitz',
      color: 'from-[#ec4899] to-[#f43f5e]',
    },
  ];

  return (
    <section className="py-[300px] relative border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
            Our Services
          </span>
          <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
            What We <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">Build</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-7 bg-gradient-to-b from-[#0e1018] to-[#080810] border border-white/[0.06] rounded-2xl hover:border-[#4facfe]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 flex items-center justify-center mb-5 text-white/80`}>
                {service.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-3 group-hover:text-[#4facfe] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#8b8b9e] text-[14px] leading-[1.7]">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section - Exact grid layout
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I've worked with almost 50 technology partners — they've been one of the most open in terms of iterations.",
      author: "Lalit Mahara",
      role: "Senior Project Manager, Vodafone Foundation",
    },
    {
      quote: "I don't think the business could run without that application — I've been pleased with their developments.",
      author: "Dan Bone",
      role: "Director of Software Engineering, Tri Marine Group",
    },
    {
      quote: "I've been consistently pleased with their performance and professionalism.",
      author: "Jack Wilson",
      role: "CEO, Exactly.me",
    },
    {
      quote: "They've never given us any excuses.",
      author: "Pawan Sharma",
      role: "Project Manager, Ek Kaam Desh Ke Naam",
    },
    {
      quote: "They have expertise in CMS, API integration, and UX design.",
      author: "Ranjit Bisht",
      role: "Managing Consultant, Learning Links Foundation",
    },
    {
      quote: "They've given me more than I've asked.",
      author: "Dev",
      role: "Owner, Escape The Room Company",
    },
  ];

  return (
    <section className="py-96 bg-[#0a0a14] border-b border-white/[0.08]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-[#4facfe] text-[12px] font-semibold uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-[36px] md:text-[44px] font-bold text-white mt-4 leading-tight">
            What Our <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-7 bg-gradient-to-b from-[#0e1018]/80 to-[#080810]/80 border border-white/[0.06] rounded-2xl"
            >
              <div className="text-[#4facfe] text-[40px] leading-none mb-4 font-serif">"</div>
              <p className="text-white/80 text-[14px] italic leading-[1.8] mb-6">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-white font-semibold text-[15px]">{testimonial.author}</p>
                <p className="text-[#5c5c70] text-[13px] mt-0.5">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section - Exact match
const CTASection = () => (
  <section className="pt-[300px] pb-[400px] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#4facfe]/[0.05] via-[#2563eb]/[0.08] to-[#00f2fe]/[0.05]" />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10 text-center">
      <h2 className="text-[36px] md:text-[52px] font-bold text-white mb-6 leading-tight">
        Ready to <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">10X</span> Your Business?
      </h2>
      <p className="text-[#8b8b9e] text-[17px] max-w-[550px] mx-auto mb-10 leading-relaxed">
        Let's discuss how AI-native solutions can transform your operations and accelerate growth.
      </p>
      <Link
        href="/contact"
        className="inline-flex px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)] hover:-translate-y-1"
      >
        Schedule a Discovery Call
      </Link>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
