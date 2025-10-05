import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Loading from "@/components/Loading";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col p-0 m-0 overflow-x-hidden bg-white max-w-full">
      <Head>
        <title>Dimitris Valasellis</title>
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Loading />
      <Header />
      <main className="w-full h-full flex flex-col mt-[175px] gap-16">
        <section id="hero" className="scroll-mt-[180px]">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-[180px]">
          <About />
        </section>
        <section id="services" className="scroll-mt-[180px]">
          <Services />
        </section>
        <section id="work" className="scroll-mt-[180px]">
          <Work />
        </section>
        <section id="projects" className="scroll-mt-[180px]">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-[180px]">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
