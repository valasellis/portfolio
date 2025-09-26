import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setTextVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Dimitris Valasellis</title>
        <meta name="description" content="Frontend Developer crafting exceptional digital experiences" />
      </Head>

      <style jsx global>{`
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      <div className="min-h-screen bg-white flex flex-col">
        {/* Minimal Header */}
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
              DV
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                About
              </Link>
              <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-12">
          <div className="max-w-4xl w-full">
            <div className={`space-y-8 ${mounted ? '' : 'opacity-0'}`}>
              <div className={`${textVisible ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
                <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tight">
                  Dimitris Valasellis
                </h1>
              </div>
              
              <div className={`${textVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
                <p className="text-xl md:text-2xl text-gray-600 font-light">
                  Frontend Developer crafting exceptional digital experiences
                  with modern technologies and thoughtful design.
                </p>
              </div>

              <div className={`flex flex-wrap gap-4 ${textVisible ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Get in touch
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5"
                >
                  View work
                </Link>
              </div>

              <div className={`flex gap-6 ${textVisible ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
                <a 
                  href="https://github.com/valasellis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:valasellis.me@gmail.com"
                  className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
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

export default HomePage;
