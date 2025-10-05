import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Header() {
  const [athensTime, setAthensTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Athens",
      };
      setAthensTime(now.toLocaleTimeString([], options));
    }
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <div className="w-full flex h-[90px] md:h-[120px] lg:h-[175px] bg-white shadow-2xs flex-row justify-between items-center px-4 md:px-12 lg:pl-[120px] lg:pr-[120px] top-0 fixed z-40 max-w-full overflow-x-hidden">
      {/* hide the time on small screens to prevent layout overflow; show from md and up */}
      <section className="hidden md:flex items-center justify-center min-w-0">
        <span
          className={`${ubuntu.className} text-neutral-900 text-base font-normal flex flex-row items-center truncate`}
        >
          <span>Europe/Greece</span>
          {athensTime && (
            <span className="ml-3 text-neutral-900 font-normal">
              | {athensTime}
            </span>
          )}
        </span>
      </section>
      {/* Desktop Nav */}
      <section className="hidden md:block items-center justify-center">
        <nav className="flex flex-row items-center gap-4 lg:gap-7">
          <Link
            href="#hero"
            className={`${ubuntu.className} text-neutral-900 text-base p-2 lg:p-3 hover:text-neutral-700 duration-200 ease-in-out break-words whitespace-pre-line`}
          >
            Home
          </Link>
          <div className="h-[30px] w-[1px] bg-neutral-300 hidden lg:block"></div>
          <Link
            href="#about"
            className={`${ubuntu.className} text-neutral-900 text-base p-2 lg:p-3 hover:text-neutral-700 duration-200 ease-in-out break-words whitespace-pre-line`}
          >
            About
          </Link>
          <div className="h-[30px] w-[1px] bg-neutral-300 hidden lg:block"></div>
          <Link
            href="#services"
            className={`${ubuntu.className} text-neutral-900 text-base p-2 lg:p-3 hover:text-neutral-700 duration-200 ease-in-out break-words whitespace-pre-line`}
          >
            Services
          </Link>
          <div className="h-[30px] w-[1px] bg-neutral-300 hidden lg:block"></div>
          <Link
            href="#work"
            className={`${ubuntu.className} text-neutral-900 text-base p-2 lg:p-3 hover:text-neutral-700 duration-200 ease-in-out break-words whitespace-pre-line`}
          >
            Work
          </Link>
          <div className="h-[30px] w-[1px] bg-neutral-300 hidden lg:block"></div>
          <Link
            href="#projects"
            className={`${ubuntu.className} text-neutral-900 text-base p-2 lg:p-3 hover:text-neutral-700 duration-200 ease-in-out break-words whitespace-pre-line`}
          >
            Projects
          </Link>
          <div className="h-[30px] w-[1px] bg-neutral-300 hidden lg:block"></div>
          <Link
            href="#contact"
            className={`${ubuntu.className} text-neutral-900 text-base p-2 lg:p-3 hover:text-neutral-700 duration-200 ease-in-out break-words whitespace-pre-line`}
          >
            Contact
          </Link>
        </nav>
      </section>
      {/* (mobile hamburger removed here; moved next to GitHub icon to avoid layout issues) */}
      {/* Full-screen mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-6">
          <button
            aria-label="Close menu"
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-neutral-900 text-2xl">×</span>
          </button>
          <nav className="flex flex-col items-center gap-8">
            <Link
              href="#hero"
              className={`${ubuntu.className} text-neutral-900 text-2xl`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`${ubuntu.className} text-neutral-900 text-2xl`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className={`${ubuntu.className} text-neutral-900 text-2xl`}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#work"
              className={`${ubuntu.className} text-neutral-900 text-2xl`}
              onClick={() => setMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#projects"
              className={`${ubuntu.className} text-neutral-900 text-2xl`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`${ubuntu.className} text-neutral-900 text-2xl`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
      <section className="flex flex-row items-center gap-4">
        {/* Mobile hamburger (visible only on small screens) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-7 h-0.5 bg-neutral-900 mb-1 transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-neutral-900 mb-1 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-neutral-900 transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const gh = "https://github.com/" + "valasellis";
            window.open(gh, "_blank");
          }}
          title="GitHub"
        >
          <Image src={"/github.png"} width={25} height={25} alt="github icon" />
        </a>
      </section>
    </div>
  );
}
