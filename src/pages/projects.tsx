import { useEffect, useState, useMemo } from "react";
import Link from "next/link"; // Required for Next.js internal navigation
import CustomCursor from "@/components/CustomCursor";
import Head from "next/head";

// The project data structure is enhanced to clearly separate the live link from the code repository link.
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  status: "Completed" | "In Progress" | "Archived" | "Get in touch"; // Stricter status types
  liveLink: string; // Link to the live demo/website
  codeLink: string; // Link to the source code repository (e.g., GitHub)
}

interface ProjectCardProps {
  project: Project;
}

// ----------------------------------------------------------------------
// 2. ProjectCard Component Definition
// ----------------------------------------------------------------------

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isCTACard = project.id === 99;

  // CTA Card (Contact/More Projects) - MONOCHROME ACCENT
  if (isCTACard) {
    return (
      <Link // CONVERTED FROM <a> to <Link>
        href={project.liveLink} // Using liveLink for the contact path, which is "#contact"
        onClick={(e) => {
          // Manual smooth scroll for anchor links using Next.js Link
          if (project.liveLink.startsWith("#")) {
            const targetElement = document.getElementById(
              project.liveLink.substring(1)
            );
            if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
        // Monochromatic card styling (light gray/white)
        className="project-card group relative bg-gray-100 border border-gray-200 rounded-xl p-6 flex flex-col justify-center items-center text-center transition duration-300 hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/70 min-h-[280px]"
        aria-label={`Go to ${project.title}`}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mb-4 group-hover:bg-gray-300 transition-colors">
          {/* Arrow Right Icon */}
          <svg
            className="w-6 h-6 text-gray-900"
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
        </div>
        {/* Black/Dark Gray text */}
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          {project.title}
        </h3>
        {/* Darker gray body text */}
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          {project.description}
        </p>
        {/* Black link text */}
        <span className="inline-flex items-center text-sm font-semibold text-gray-900 mt-2 transition-all duration-200 group-hover:translate-x-1">
          {project.status}
          {/* Arrow Right Icon */}
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
        </span>
      </Link>
    );
  }

  // Default project card rendering
  return (
    <div className="project-card group relative bg-white border border-gray-100 rounded-xl p-6 flex flex-col justify-between transition duration-300 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-200/50 min-h-[280px]">
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
          <span
            className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap border ${
              project.status === "Completed"
                ? "bg-green-50 text-green-600 border-green-200"
                : project.status === "In Progress"
                ? "bg-yellow-50 text-yellow-600 border-yellow-200"
                : "bg-gray-50 text-gray-500 border-gray-200"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Darker body text */}
        <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-2 py-0.5 bg-gray-50 text-gray-600 rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links: Live and Code - Monochrome Link color */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-2">
        <Link // External Link - Black accent
          href={project.liveLink}
          rel="noopener noreferrer"
          className="flex items-center text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
          aria-label={`View live demo of ${project.title}`}
        >
          {/* External Link Icon */}
          <svg
            className="mr-1 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Live Project
        </Link>

        {project.codeLink && (
          <Link // External Link
            href={project.codeLink}
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={`View source code for ${project.title}`}
          >
            {/* Code Icon */}
            <svg
              className="mr-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            View Code
          </Link>
        )}
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 3. Main App Component
// ----------------------------------------------------------------------

const App: React.FC = () => {
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

  // Mock Project Data - REDUCED TO ONLY ONE PROJECT
  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        title: "The Guitar Toy",
        description:
          "An website with easy and paid lessons for learning guitar, launching soon.",
        tech: ["React", "Tailwind CSS", "TypeScript"],
        status: "In Progress",
        liveLink: "/projects",
        codeLink: "/projects",
      },
    ],
    []
  );

  // CTA Card remains separate for its unique styling
  const comingSoonCard: Project = {
    id: 99,
    title: "Start a New Project?",
    description:
      "I'm always open to new challenging opportunities and collaborations. Let's build something great together!",
    tech: [],
    status: "Get in touch",
    liveLink: "/contact",
    codeLink: "", // No code link for CTA
  };

  const allCards: Project[] = [...projects, comingSoonCard];

  return (
    <>
      <CustomCursor />
      <Head>
        <title>Projects - Dimitris Valasellis</title>
      </Head>

      {/* Global Styles and Animations */}
      <style>{`
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

        .hamburger-bar {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

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

      {/* Main Container - bg-gray-50 for a clean white/gray background */}
      <div className="min-h-screen bg-gray-50 flex flex-col">
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

            {/* Desktop Navigation - Active Link uses bolder text, others use darker gray */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/projects"
                onClick={handleLinkClick}
                className="text-sm text-gray-900 font-semibold transition-colors duration-200"
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

            {/* Hamburger Button (Mobile) - No change here */}
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

        {/* Main Content - Darker body text */}
        <main id="projects" className="flex-1 pt-24 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className={`${mounted ? "" : "opacity-0"}`}>
              {/* Header */}
              <section
                className={`mb-16 max-w-3xl ${
                  mounted ? "fade-in stagger-1" : "opacity-0"
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  Featured Work
                </h1>
                {/* Darker body text */}
                <p className="text-xl text-gray-700">
                  A selection of production-ready applications, open-source
                  contributions, and technical showcases.
                </p>
              </section>

              {/* Projects Grid */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
                  mounted ? "fade-in stagger-2" : "opacity-0"
                }`}
              >
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
};

export default App;
