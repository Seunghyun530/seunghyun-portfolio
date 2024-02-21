import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import OldConcerts from "@/components/oldconcerts";
import Contact from "@/components/contact";
import NewConcerts from "@/components/newconcerts";
import Medias from "@/components/medias";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <NewConcerts />
        <OldConcerts />
        <Medias />
        <Contact />
    </main>
  )
}
