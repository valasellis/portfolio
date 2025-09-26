import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="Footer"
      className="flex flex-col sm:flex-row w-full h-auto sm:h-[75px] items-center justify-between px-6 sm:px-10 py-4 sm:py-0 border-t border-gray-200"
    >
      <div className="mb-3 sm:mb-0">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Dimitris Valasellis.
        </p>
      </div>

      <nav className="flex items-center space-x-4 text-sm">
        <Link
          href="https://github.com/valasellis"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 transition duration-100 rounded-sm hover:text-blue-600"
        >
          GitHub
        </Link>
      </nav>
    </footer>
  );
}
