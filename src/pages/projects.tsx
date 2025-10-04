import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import CustomCursor from "@/components/CustomCursor";

function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu State

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function to close the menu on link click
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const techStack = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ];

  const expertise = [
    {
      title: "Frontend Development",
      desc: "Building responsive, interactive user interfaces",
    },
    {
      title: "Modern Web Apps",
      desc: "Creating fast, SEO-friendly applications with Next.js",
    },
    {
      title: "UI Implementation",
      desc: "Translating designs into pixel-perfect code",
    },
    {
      title: "Performance",
      desc: "Optimizing for speed and smooth user experience",
    },
  ];

  return (
    <>
      <CustomCursor />
      <Head>
        <title>About - Dimitris Valasellis</title>
        <meta
          name="description"
          content="Frontend Developer passionate about creating exceptional web experiences"
        />
      </Head>

      {/* Global Styles for animations and hamburger menu - Kept for file completeness */}
      <style jsx global>{`
        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .stagger-1 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        .stagger-2 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .stagger-3 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        .stagger-4 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        /* Custom utility for the bar transition, applied to each span in the menu button */
        .hamburger-bar {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* Menu open state transformations */
        .menu-open .bar-top {
          transform: translateY(7px) rotate(45deg);
        }
        .menu-open .bar-middle {
          opacity: 0;
        }
        .menu-open .bar-bottom {
          transform: translateY(-7px) rotate(-45deg);
        }
      `}</style>

      <div className="min-h-screen bg-white flex flex-col">
        {/* Header - Monochrome styling */}
        <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors duration-200 rounded-lg p-1"
            >
              DV
            </Link>

            {/* Desktop Navigation - Active Link uses bolder text */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="text-sm text-gray-900 font-semibold transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Hamburger Button (Mobile) */}
            <button
              className={`md:hidden p-2 relative z-50 ${
                isMenuOpen ? "menu-open" : ""
              } transition-transform duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col justify-around h-5 w-6 cursor-pointer">
                <span className="hamburger-bar bar-top block h-0.5 w-full bg-gray-900 rounded-sm"></span>
                <span className="hamburger-bar bar-middle block h-0.5 w-full bg-gray-900 rounded-sm"></span>
                <span className="hamburger-bar bar-bottom block h-0.5 w-full bg-gray-900 rounded-sm"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Overlay - Links hover in dark gray/black */}
          <nav
            className={`md:hidden absolute top-16 left-0 w-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen
                ? "max-h-screen border-t border-gray-100 shadow-lg"
                : "max-h-0"
            }`}
          >
            <div className="flex flex-col p-6 space-y-2">
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200 py-3 border-b border-gray-100"
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200 py-3 border-b border-gray-100"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors duration-200 py-3"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content - Improved Typography (bolder heading, darker body text) */}
        <main className="flex-1 pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className={`space-y-16 ${mounted ? "" : "opacity-0"}`}>
              {/* Intro */}
              <section
                className={`${mounted ? "fade-in stagger-1" : "opacity-0"}`}
              >
                {/* Bolder heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About
                </h1>
                {/* Darker body text */}
                <p className="text-lg text-gray-700 leading-relaxed">
                  I&apos;m a frontend developer passionate about crafting
                  exceptional digital experiences. My work focuses on the
                  intersection of design and technology, building modern
                  applications that are not just functional, but delightful to
                  use.
                </p>
              </section>

              {/* Philosophy */}
              <section
                className={`${mounted ? "fade-in stagger-2" : "opacity-0"}`}
              >
                {/* Secondary color is gray-400 */}
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Philosophy
                </h2>
                {/* Darker body text */}
                <p className="text-gray-700 leading-relaxed">
                  I believe in the power of minimalism and attention to detail.
                  Every line of code should have purpose, every interaction
                  should feel natural, and every experience should leave a
                  lasting impression. Performance and aesthetics go hand in
                  hand.
                </p>
              </section>

              {/* Tech Stack */}
              <section
                className={`${mounted ? "fade-in stagger-3" : "opacity-0"}`}
              >
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-100 hover:border-gray-200 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Expertise */}
              <section
                className={`${mounted ? "fade-in stagger-4" : "opacity-0"}`}
              >
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  Expertise
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {expertise.map((item, i) => (
                    <div
                      key={i}
                      className="group p-6 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-200"
                    >
                      <h3 className="font-medium text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-gray-700">
                    Let&apos;s create something exceptional together.
                  </p>
                  {/* CTA Button: Dark gray on hover */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-lg"
                  >
                    Get in touch
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Dimitris Valasellis
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default AboutPage;
