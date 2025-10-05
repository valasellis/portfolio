import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center min-h-[200px] md:min-h-[300px] px-4 sm:px-8 md:px-12 lg:px-[120px] animate-fade-in bg-white w-full">
      <section className="flex flex-col items-start max-w-2xl w-full">
        <h2
          className={`${ubuntu.className} text-neutral-900 text-2xl sm:text-3xl md:text-4xl mb-3 font-bold`}
        >
          Contact
        </h2>
        <div className="w-[60px] h-[2px] bg-neutral-700 mb-5"></div>
        <p
          className={`${ubuntu.className} text-neutral-700 text-base sm:text-lg mb-2`}
        >
          Feel free to reach out to me via email or Discord:
        </p>
        <ul className="text-neutral-700 text-base sm:text-lg">
          <li className="mb-1">
            <span className="font-semibold">Email:</span>{" "}
            <span
              className="underline hover:text-neutral-900 cursor-pointer"
              onClick={() => {
                const e = "valasellis.me" + "@" + "gmail.com";
                window.location.href = "mailto:" + e;
              }}
              title="Click to email"
            >
              <span>{"valasellis.me"}</span>
              <span style={{ display: "none" }}>-</span>
              <span>{"@gmail.com"}</span>
            </span>
          </li>
          <li>
            <span className="font-semibold">Discord:</span>{" "}
            <span
              className="underline"
              title="Copy Discord"
              onClick={() => {
                navigator.clipboard.writeText("valas.me");
              }}
            >
              {"valas"}
              <span style={{ display: "none" }}>-</span>
              {".me"}
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
