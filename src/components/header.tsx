"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      id="Header"
      className="sticky top-0 z-20 flex w-full h-[75px] items-center justify-between border-b-[2px] border-gray-200 bg-white px-6 md:px-10"
    >
      {/* Logo / Brand */}
      <div id="header-left">
        <Link
          href="/"
          className="font-bold text-[18px] md:text-[20px] text-[rgba(23,23,23,1)]"
        >
          VALAS
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav
        id="header-right"
        className="hidden md:flex flex-row items-center gap-4"
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className="hover:bg-[rgba(23,23,23,1)] text-[15px] px-4 py-2 hover:text-white duration-100 rounded-[2px]"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:bg-[rgba(23,23,23,1)] text-[15px] px-4 py-2 hover:text-white duration-100 rounded-[2px]"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="hover:bg-[rgba(23,23,23,1)] text-[15px] px-4 py-2 hover:text-white duration-100 rounded-[2px]"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="hover:bg-[rgba(23,23,23,1)] text-[15px] px-4 py-2 hover:text-white duration-100 rounded-[2px]"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          // Close Icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[75px] left-0 w-full bg-white border-b border-gray-200 shadow-md md:hidden">
          <nav className="flex flex-col items-start px-6 py-4 space-y-2">
            <Link
              href="/"
              className="w-full py-2 text-gray-800 hover:text-white hover:bg-[rgba(23,23,23,1)] rounded-[2px] px-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="w-full py-2 text-gray-800 hover:text-white hover:bg-[rgba(23,23,23,1)] rounded-[2px] px-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="w-full py-2 text-gray-800 hover:text-white hover:bg-[rgba(23,23,23,1)] rounded-[2px] px-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="w-full py-2 text-gray-800 hover:text-white hover:bg-[rgba(23,23,23,1)] rounded-[2px] px-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
