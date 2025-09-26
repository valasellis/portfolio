import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";


function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const techStack = [
    'TypeScript', 'JavaScript', 'React', 'Next.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Git'
  ];

  const expertise = [
    { title: 'Frontend Development', desc: 'Building responsive, interactive user interfaces' },
    { title: 'Modern Web Apps', desc: 'Creating fast, SEO-friendly applications with Next.js' },
    { title: 'UI Implementation', desc: 'Translating designs into pixel-perfect code' },
    { title: 'Performance', desc: 'Optimizing for speed and smooth user experience' }
  ];

  return (
    <>
      <Head>
        <title>About - Dimitris Valasellis</title>
        <meta name="description" content="Frontend Developer passionate about creating exceptional web experiences" />
      </Head>

      <style jsx global>{`
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <Link href="/" className="font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
              DV
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-900 font-medium transition-colors duration-200">
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
        <main className="pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className={`space-y-16 ${mounted ? '' : 'opacity-0'}`}>
              
              {/* Intro */}
              <section className={`${mounted ? 'fade-in stagger-1' : 'opacity-0'}`}>
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  About
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I&apos;m a frontend developer passionate about crafting exceptional digital experiences. 
                  My work focuses on the intersection of design and technology, building modern applications 
                  that are not just functional, but delightful to use.
                </p>
              </section>

              {/* Philosophy */}
              <section className={`${mounted ? 'fade-in stagger-2' : 'opacity-0'}`}>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Philosophy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I believe in the power of minimalism and attention to detail. Every line of code 
                  should have purpose, every interaction should feel natural, and every experience 
                  should leave a lasting impression. Performance and aesthetics go hand in hand.
                </p>
              </section>

              {/* Tech Stack */}
              <section className={`${mounted ? 'fade-in stagger-3' : 'opacity-0'}`}>
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
              <section className={`${mounted ? 'fade-in stagger-4' : 'opacity-0'}`}>
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
                      <p className="text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600">
                    Let&apos;s create something exceptional together.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-lg"
                  >
                    Get in touch
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
