import { useEffect, useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

function LoadingOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFadingOut(true), 3000);
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
          width={100}
          height={100}
          className="rounded-full shadow-lg animate-pulse"
        />
        <p className="text-black text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const pageTitle = "Dimitris Valasellis | Portfolio";
  const pageDescription = "A portfolio for Dimitris Valasellis...Made by Him.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="[YOUR_SITE_URL]" />
      </Head>

      <LoadingOverlay />

      <div className="flex flex-col min-h-screen overflow-x-hidden scroll-smooth">
        <Header />

        <main className="flex flex-grow justify-center items-center p-6 sm:p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 md:gap-12">
            {/* Left Side */}
            <article className="text-center md:text-left flex-shrink-0">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
                Dimitris Valasellis
              </h1>
              <div className="border-[1px] border-[rgba(23,23,23,1)] w-[70px] mx-auto md:mx-0 mb-4" />
              <h3 className="text-lg sm:text-xl">Front-End Developer</h3>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-[rgba(23,23,23,1)] text-white text-[16px] font-semibold py-2 px-4 rounded-[2px] transition duration-300 ease-in-out hover:bg-opacity-90"
                >
                  Get in Touch
                </Link>
              </div>
            </article>

            {/* Right Side */}
            <section className="flex-shrink-0">
              <Image
                src="/favicon-dv.png"
                alt="Dimitris Valasellis Profile Icon"
                width={150}
                height={150}
                priority
                className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
              />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
