import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#080810] relative overflow-hidden">
            {/* CTA Banner */}
            <div className="border-t border-white/[0.04] pt-64 pb-24">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#2563eb] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(79,172,254,0.3)] hover:shadow-[0_8px_30px_rgba(79,172,254,0.5)]"
                        >
                            Accelerate Your Digital Transformation
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="border-t border-white/[0.06] pt-48 pb-[100px]">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Logo & Tagline */}
                        <div>
                            <Link href="/" className="flex items-center gap-2.5 mb-4">
                                <div className="w-[34px] h-[34px] bg-[#0a1628] border border-[#1e3a5f] rounded-[10px] flex items-center justify-center">
                                    <span className="text-[#4facfe] font-bold text-[18px] leading-none">b</span>
                                </div>
                                <span className="text-[20px] font-semibold tracking-[-0.02em]">
                                    <span className="text-[#4facfe]">blue</span>
                                    <span className="text-white">lupin</span>
                                </span>
                            </Link>
                            <p className="text-[#5c5c70] text-[14px] leading-relaxed mt-4">
                                Creating Better Technologies,<br />
                                Better Results
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold text-[15px] mb-5">Quick Links</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about-us" className="text-[#8b8b9e] hover:text-white text-[14px] transition-colors duration-200">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-[#8b8b9e] hover:text-white text-[14px] transition-colors duration-200">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-[#8b8b9e] hover:text-white text-[14px] transition-colors duration-200">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="text-[#8b8b9e] hover:text-white text-[14px] transition-colors duration-200">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-white font-semibold text-[15px] mb-5">Company</h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/careers" className="text-[#8b8b9e] hover:text-white text-[14px] transition-colors duration-200">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio" className="text-[#8b8b9e] hover:text-white text-[14px] transition-colors duration-200">
                                        Portfolio
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Certifications */}
                        <div>
                            <h4 className="text-white font-semibold text-[15px] mb-5">Certifications</h4>
                            <div className="flex items-center gap-4">
                                {/* ISO 27001 Badge */}
                                <div className="w-[60px] h-[60px] rounded-full border-2 border-[#4facfe]/30 bg-[#0a1628] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-[#4facfe] text-[10px] font-bold">ISO</div>
                                        <div className="text-white text-[8px]">27001</div>
                                    </div>
                                </div>
                                {/* ISO 9001 Badge */}
                                <div className="w-[60px] h-[60px] rounded-full border-2 border-[#8b8b9e]/30 bg-[#0a1628] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-[#8b8b9e] text-[10px] font-bold">ISO</div>
                                        <div className="text-white text-[8px]">9001:2015</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/[0.06] py-16">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Links */}
                        <div className="flex items-center gap-5 order-2 md:order-1">
                            {/* X (Twitter) */}
                            <a href="https://twitter.com/bluelupin" target="_blank" rel="noopener noreferrer" className="text-[#5c5c70] hover:text-white transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com/bluelupin" target="_blank" rel="noopener noreferrer" className="text-[#5c5c70] hover:text-white transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://instagram.com/bluelupin" target="_blank" rel="noopener noreferrer" className="text-[#5c5c70] hover:text-white transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="https://linkedin.com/company/bluelupin" target="_blank" rel="noopener noreferrer" className="text-[#5c5c70] hover:text-white transition-colors duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>

                        {/* Copyright */}
                        <p className="text-[#5c5c70] text-[13px] order-1 md:order-2">
                            © {new Date().getFullYear()} Bluelupin Technologies. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-[20%] right-[5%] opacity-30">
                <div className="grid grid-cols-3 gap-1.5">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white/30 rounded-full" />
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
