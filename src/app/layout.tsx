import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI-Native Software Development Company | Bluelupin Technologies",
  description: "Bluelupin brings national-scale IT and AI expertise so your ideas turn into impact - faster. Book a discovery call today.",
  keywords: "AI solutions, software development, digital transformation, web development, mobile apps, ERP automation",
  openGraph: {
    title: "AI-Native Software Development Company | Bluelupin Technologies",
    description: "Bluelupin brings national-scale IT and AI expertise so your ideas turn into impact - faster.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[190px]" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-[#080810] text-white`}>
        {/* Top gradient glow */}
        <div className="fixed top-0 left-0 right-0 h-[600px] pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(79,172,254,0.12),transparent_60%)]" />
        </div>

        <Header />
        <div color="black">

          Transform Your Business with Artificial Intelligence

        </div>

        <div color="black">

          Transform Your Business with Artificial Intelligence

        </div>

        <div >

          Transform Your Business with Artificial Intelligence

        </div>

        <main className="pt-[480px] relative z-10 min-h-screen flex flex-col gap-y-[25vh] lg:gap-y-[50vh] mb-[25vh] lg:mb-[50vh]">
          {children}
        </main>

        <Footer />

        {/* Floating chat widget */}
        <div className="fixed bottom-6 right-6 z-50">
          <ChatWidget />
        </div>
      </body>
    </html >
  );
}
