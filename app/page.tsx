import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";


export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col gap-20">
        <Hero></Hero>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>

      </div>
    </main>
  );
}
