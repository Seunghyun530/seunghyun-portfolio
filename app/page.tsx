import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Activities from "@/components/activities";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Education />
        <Activities />
        <Contact />
    </main>
  )
}
