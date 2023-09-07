import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Experiences from '@/components/Experiences'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import SoftSkills from '@/components/SoftSkills'
import Header from '../components/Header'

export default function Home() {
  return (
    <main>
      <Header />

      <Banner />

      <div className="bg-main-background bg-contain">
        <Projects />

        <Skills />

        <SoftSkills />

        <Experiences />
      </div>

      <Contact />
    </main>
  )
}
