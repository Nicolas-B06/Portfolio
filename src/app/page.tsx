import Projects from "@/components/Projects";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
