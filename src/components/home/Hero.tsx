import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-[400px] md:min-h-[600px] px-4 sm:px-8 md:px-12 lg:px-[120px] shadow-2xs animate-fade-in w-full">
      <section className="flex flex-col items-start w-full">
        <h1
          className={`${ubuntu.className} text-neutral-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-bounce mb-2 font-bold`}
        >
          Dimitris Valasellis
        </h1>
        <p
          className={`${ubuntu.className} text-neutral-900 text-base sm:text-lg md:text-xl lg:text-2xl mb-5`}
        >
          Next.JS front-end developer that makes ideas become <br />{" "}
          pixel-perfect web experiences.
        </p>
        <div className="w-[60px] h-[2px] bg-neutral-700 mb-5"></div>
        <div className="flex flex-row gap-3 items-center">
          <Link
            href="#about"
            className={`${ubuntu.className} text-white bg-neutral-900 py-3 px-6 hover:bg-neutral-800 duration-200 ease-in-out`}
          >
            About
          </Link>
        </div>
      </section>
      {/* profile image removed - desktop-only image intentionally omitted */}
    </div>
  );
}
