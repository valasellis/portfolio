import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <div className="flex flex-col h-auto px-4 sm:px-8 md:px-12 lg:px-[120px] pt-8 md:pt-[75px] pb-8 md:pb-[75px] shadow-2xs animate-fade-in w-full">
      <span
        className={`${ubuntu.className} text-neutral-900 text-2xl sm:text-3xl md:text-4xl mb-5 font-bold`}
      >
        Projects
      </span>
      <div className="w-[60px] h-[2px] bg-neutral-700 mb-8 md:mb-15"></div>

      <div className="w-full flex justify-start items-start">
        <article className="relative flex flex-col items-start max-w-2xl w-full bg-white border border-neutral-200 rounded-md p-6 duration-150">
          <h3
            className={`${ubuntu.className} text-neutral-900 text-2xl font-semibold mb-3`}
          >
            Coming soon
          </h3>
          <span className="absolute right-4 top-4 text-xs text-white bg-amber-500 px-2 py-1 rounded-sm uppercase tracking-wider">
            In progress
          </span>

          <p className="text-neutral-600 text-sm sm:text-base mb-4">
            I&apos;m currently building an amazing application for learning
            guitar with a friend of mine who does the back-end. This project
            focuses on interactive lessons, progress tracking, and a delightful,
            responsive UI. More details and the app will be available soon.
          </p>

          <div className="mb-3">
            <span
              className={`${ubuntu.className} text-neutral-700 text-sm font-medium`}
            >
              Status
            </span>
            <div className="mt-2">
              <span className="text-xs text-neutral-600 bg-neutral-100 border border-neutral-200 px-2 py-1 rounded-sm">
                Planning · UI · Integrations
              </span>
            </div>
          </div>

          <div className="mt-4 text-sm text-neutral-500">
            <p>
              No public links are available yet. This card intentionally does
              not link anywhere.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
