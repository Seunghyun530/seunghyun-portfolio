import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Concerts from "@/components/concerts";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Media from "@/components/media";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Education />
        <Concerts />
        <Media />
        <Contact />
    </main>
  )
}
