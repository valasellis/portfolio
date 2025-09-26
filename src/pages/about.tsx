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

export default function AboutPage() {
  const pageTitle = "About | Dimitris Valasellis";
  const pageDescription =
    "Learn more about Dimitris Valasellis, a Frontend Developer passionate about building pixel-perfect web experiences.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="[YOUR_SITE_URL]/about" />
      </Head>

      <LoadingOverlay />

      <div className="flex flex-col min-h-screen overflow-x-hidden scroll-smooth bg-white">
        <Header />

        <main className="flex flex-grow justify-center items-start px-4 sm:px-6 md:px-10 mt-10 md:mt-16 pb-12 sm:pb-16 md:pb-20">
          <article className="flex flex-col w-full max-w-4xl mx-auto space-y-12 text-center md:text-left">
            {/* Intro */}
            <div className="space-y-3">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900">
                Dimitris Valasellis
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-prose mx-auto md:mx-0">
                Frontend Developer | Crafting pixel-perfect, performant web
                experiences
              </p>
            </div>

            {/* About */}
            <section className="space-y-4 max-w-prose mx-auto md:mx-0">
              <h2 className="font-semibold text-xl sm:text-2xl text-gray-900">
                About
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
                I am passionate about creating exceptional web experiences
                through clean code and thoughtful design. My focus is on
                building modern, performant applications that users love to
                interact with — blending functionality with aesthetics.
              </p>
            </section>

            {/* Tech Stack */}
            <section className="space-y-4">
              <h2 className="font-semibold text-xl sm:text-2xl text-gray-900">
                Tech Stack
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm sm:text-base text-gray-700">
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS</li>
                <li>Node.js</li>
                <li>Git</li>
                <li>Linux</li>
              </ul>
            </section>

            {/* What I Do */}
            <section className="space-y-4 max-w-prose mx-auto md:mx-0">
              <h2 className="font-semibold text-xl sm:text-2xl text-gray-900">
                What I Do
              </h2>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 space-y-2">
                <li>Frontend Development — Responsive, interactive UIs</li>
                <li>Next.js Applications — Fast, SEO-friendly web apps</li>
                <li>UI/UX Implementation — Pixel-perfect design conversion</li>
                <li>Performance Optimization — Speed and smooth UX</li>
              </ul>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
