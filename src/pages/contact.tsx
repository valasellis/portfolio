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

export default function ContactPage() {
  const pageTitle = "Contact | Dimitris Valasellis";
  const pageDescription =
    "Get in touch with Dimitris Valasellis — frontend developer passionate about creating modern web experiences.";

  const handleDiscordClick = () => {
    navigator.clipboard.writeText("valas.me").then(() => {
      alert("Discord ID copied to clipboard: valas.me");
    });
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://portfolio-valasellis.vercel.app/contact" />
      </Head>

      <LoadingOverlay />

      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        <main className="flex flex-col flex-grow items-center px-4 sm:px-6 md:px-10 mt-10 md:mt-16 pb-16 sm:pb-20">
          <div className="w-full max-w-3xl space-y-10">
            {/* Page Heading */}
            <div className="space-y-3 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Contact
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-prose mx-auto md:mx-0">
                Let’s connect! Whether you want to collaborate, have a question,
                or just say hello, feel free to reach out.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Discord */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium">Discord</span>
                  <span className="text-gray-500">@valas.me</span>
                </div>
                <button
                  onClick={handleDiscordClick}
                  className="text-gray-700 text-lg hover:translate-x-1 transition-transform"
                >
                  →
                </button>
              </div>

              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium">Email</span>
                  <span className="text-gray-500">valasellis.me@gmail.com</span>
                </div>
                <a
                  href="mailto:valasellis.me@gmail.com"
                  className="text-gray-700 text-lg hover:translate-x-1 transition-transform"
                >
                  →
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
