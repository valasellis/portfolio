import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Services() {
  return (
    <div className="flex flex-col min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-[120px] pt-8 md:pt-[75px] pb-8 md:pb-[75px] shadow-2xs animate-fade-in w-full">
      <span
        className={`${ubuntu.className} text-neutral-900 text-2xl sm:text-3xl md:text-4xl mb-5 font-bold`}
      >
        My Services
      </span>
      <div className="w-[60px] h-[2px] bg-neutral-700 mb-8 md:mb-15"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-10 w-full">
        <div className="flex flex-col items-start">
          <h1
            className={`${ubuntu.className} text-neutral-900 text-xl sm:text-2xl mb-3`}
          >
            Web Development
          </h1>
          <p className="text-neutral-600 w-full max-w-[500px] text-base sm:text-lg">
            I build exceptional user interfaces by taking your designs—whether
            from Figma, Sketch, or wireframes—and meticulously translating them
            into pixel-perfect, performance-optimized code. My focus is on
            creating an intuitive, engaging User Experience (UX) that drives
            results. I ensure every component is fully responsive and
            accessible, guaranteeing a flawless experience for every user, on
            any device.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h1 className={`${ubuntu.className} text-neutral-900 text-2xl mb-3`}>
            Performance & SEO
          </h1>
          <p className="text-neutral-600 w-full max-w-[500px] break-words whitespace-normal text-base sm:text-lg">
            I deliver more than just beautiful code. My focus is on high-speed
            front-end development engineered for business results. I specialize
            in maximizing technical SEO, hitting perfect Core Web Vitals scores,
            and guaranteeing an accessible (A11Y) user experience.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h1 className={`${ubuntu.className} text-neutral-900 text-2xl mb-3`}>
            Tech Stack
          </h1>
          <p className="text-neutral-600 w-full max-w-[500px] break-words whitespace-normal text-base sm:text-lg">
            My work is grounded in the modern web ecosystem. I specialize in the
            React/Next.js framework, using tools like TypeScript for robust,
            scalable applications, and Tailwind CSS or Styled-Components for
            highly maintainable styling. By leveraging the latest best practices
            in these technologies, I build dynamic, secure, and future-proof
            applications that stand the test of time.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h1 className={`${ubuntu.className} text-neutral-900 text-2xl mb-3`}>
            Maintenance
          </h1>
          <p className="text-neutral-600 w-full max-w-[500px] break-words whitespace-normal text-base sm:text-lg">
            I focus on building highly maintainable and scalable codebases,
            utilizing proper component architecture and clear documentation.
            I&apos;m adept at working within existing teams and systems,
            providing expert code reviews, and implementing efficient testing
            strategies (e.g., Unit, Integration) to ensure the application can
            grow alongside your business without accruing technical debt.
          </p>
        </div>
      </div>
    </div>
  );
}
