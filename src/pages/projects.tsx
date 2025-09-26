import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";

function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFadingOut(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isFadingOut) {
      const fadeTimer = setTimeout(() => setIsVisible(false), 700);
      return () => clearTimeout(fadeTimer);
    }
  }, [isFadingOut]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-700 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/favicon-dv.png"
          alt="Loading..."
          width={90}
          height={90}
          className="rounded-full shadow-md animate-pulse"
        />
        <p className="text-gray-800 text-base sm:text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const pageTitle = "Projects | Dimitris Valasellis";
  const pageDescription =
    "Explore the projects of Dimitris Valasellis — frontend developer specializing in modern, pixel-perfect web experiences.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://valasellisme.vercel.app/projects" />
      </Head>

      <LoadingOverlay />

      <div className="flex flex-col min-h-screen overflow-x-hidden scroll-smooth bg-white">
        <Header />

        <main className="flex flex-grow justify-center items-start px-4 sm:px-6 md:px-10 mt-10 md:mt-16 pb-12 sm:pb-16 md:pb-20">
          <article className="flex flex-col w-full max-w-3xl mx-auto space-y-8 text-center">
            {/* Page Title */}
            <div className="space-y-3">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900">
                Projects
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-prose mx-auto">
                A showcase of my work — building modern and performant web
                experiences.
              </p>
            </div>

            {/* Placeholder / Coming Soon */}
            <section className="flex flex-col items-center justify-center py-12 sm:py-16">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                🚧 Coming Soon...
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
                Stay tuned! I’m working on adding my featured projects here.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
