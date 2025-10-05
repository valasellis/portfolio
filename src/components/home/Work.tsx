import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Experience() {
  // Renamed from Work to Experience (or Projects)
  return (
    // Reusing your section's padding and shadow classes
    <div className="flex flex-col h-auto px-4 sm:px-8 md:px-12 lg:px-[120px] pt-8 md:pt-[75px] pb-8 md:pb-[75px] shadow-2xs animate-fade-in w-full">
      {/* SECTION HEADING */}
      <span
        className={`${ubuntu.className} text-neutral-900 text-2xl sm:text-3xl md:text-4xl mb-5 font-bold`}
      >
        Work Experience
        {/* OR: Featured Projects */}
      </span>
      <div className="w-[60px] h-[2px] bg-neutral-700 mb-8 md:mb-15"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-10 w-full">
        {/* --- ITEM 1: Company/Project 1 --- */}
        <div className="flex flex-col items-start">
          <h1
            className={`${ubuntu.className} text-neutral-900 text-xl sm:text-2xl mb-3`}
          >
            No Prior Experience in working conditions.
          </h1>
        </div>
      </div>
    </div>
  );
}
