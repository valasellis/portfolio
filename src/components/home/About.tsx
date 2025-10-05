import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-[300px] md:min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-[120px] shadow-2xs animate-fade-in bg-white w-full">
      <section className="flex flex-col items-start max-w-2xl w-full">
        <h2
          className={`${ubuntu.className} text-neutral-900 text-2xl sm:text-3xl md:text-4xl mb-3 font-bold`}
        >
          About Me
        </h2>
        <div className="w-[60px] h-[2px] bg-neutral-700 mb-5"></div>
        <p
          className={`${ubuntu.className} text-neutral-700 text-base sm:text-lg mb-3`}
        >
          I’m Dimitris Valasellis, a passionate Next.js front-end developer
          dedicated to transforming ideas into pixel-perfect, high-performance
          web experiences. With a keen eye for detail and a love for clean,
          maintainable code, I specialize in building responsive, accessible,
          and visually engaging interfaces that delight users and drive results.
        </p>
        <p
          className={`${ubuntu.className} text-neutral-700 text-base sm:text-lg`}
        >
          My approach combines technical expertise with creativity, ensuring
          every project not only looks great but also performs flawlessly.
          Whether collaborating with designers or working independently, I
          strive to deliver solutions that exceed expectations and help
          businesses grow in the digital world.
        </p>
      </section>
    </div>
  );
}
