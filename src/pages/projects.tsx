import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

// ----------------------------------------------------------------------
// 1. Define TypeScript Interfaces
// ----------------------------------------------------------------------

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

// ----------------------------------------------------------------------
// 2. ProjectCard Component Definition
// ----------------------------------------------------------------------

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isCTACard = project.id === 99;

  if (isCTACard) {
    return (
      <Link 
        href={project.link}
        // Tailwind classes applied directly to the card
        className="project-card group relative bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col justify-center items-center text-center hover:shadow-xl hover:border-gray-300 transition-all duration-300"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4 group-hover:bg-gray-300 transition-colors">
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        <span 
          className="inline-flex items-center text-sm font-medium text-gray-900 mt-2 transition-all duration-200 group-hover:translate-x-1"
        >
          {project.status}
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </Link>
    );
  }
  
  // Default project card rendering
  return (
    <Link
      href={project.link}
      className="project-card group relative bg-white border border-gray-100 rounded-lg p-6 hover:border-gray-200 hover:shadow-xl cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
          {project.title}
        </h3>
        <span className={`text-xs px-2 py-1 rounded-full ${
          project.status === 'In Progress' 
            ? 'bg-green-50 text-green-600 border border-green-100' 
            : 'bg-gray-50 text-gray-500 border border-gray-100'
        }`}>
          {project.status}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex items-center text-sm text-gray-900 font-medium transition-all duration-200 group-hover:translate-x-1">
        View project
        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </Link>
  );
};


// ----------------------------------------------------------------------
// 3. ProjectsPage Component
// ----------------------------------------------------------------------

const ProjectsPage: React.FC = () => {
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


  const projects: Project[] = [];

  const comingSoonCard: Project = {
    id: 99,
    title: "More Projects...",
    description: "I'm currently working on several exciting, confidential projects. Check back soon for updates or get in touch!",
    tech: ["Collaboration", "New Ideas", "Available Now"],
    status: "Get in touch",
    link: "/contact"
  };

  const allCards: Project[] = [...projects, comingSoonCard];


  return (
    <>
      <Head>
        <title>Projects - Dimitris Valasellis</title>
        <meta name="description" content="Featured projects and work by Dimitris Valasellis" />
      </Head>

      <style jsx global>{`
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        
        .project-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .project-card:hover {
          transform: translateY(-4px);
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

      {/* FIXED: Added 'flex flex-col' to ensure header, main, and footer stack and stretch */}
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <Link href="/" onClick={handleLinkClick} className="font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200">
              DV
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                About
              </Link>
              <Link href="/projects" className="text-sm text-gray-900 font-medium transition-colors duration-200">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Contact
              </Link>
            </nav>

            {/* Hamburger Button (Mobile) */}
            <button
              className={`md:hidden p-2 relative z-50 ${isMenuOpen ? 'menu-open' : ''}`}
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
          
          {/* Mobile Menu Overlay */}
          <nav
            className={`md:hidden absolute top-16 left-0 w-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100"
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-gray-600 transition-colors duration-200 py-2"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content: ADDED 'flex-1' to take up all remaining space */}
        <main className="flex-1 pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className={`${mounted ? '' : 'opacity-0'}`}>
              
              {/* Header */}
              <section className={`mb-12 ${mounted ? 'fade-in stagger-1' : 'opacity-0'}`}>
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                  Projects
                </h1>
                <p className="text-lg text-gray-600">
                  A selection of recent work and ongoing projects.
                </p>
              </section>

              {/* Projects Grid: ADJUSTED to center the single card */}
              <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ${mounted ? 'fade-in stagger-2' : 'opacity-0'}`}>
                {/* The single item will be centered on medium and large screens */}
                {allCards.map((project: Project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              
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

export default ProjectsPage;
