'use client'
import { backend, frontend, languages, tools } from '@/lib/skills'
import Lottie from 'lottie-react'
import Section from './Section'
import SkillCard from './SkillCard'

import universeStarsAnimation from '../../public/assets/animations/universe-stars.json'

const Skills = () => {
  return (
    <Section title="Habilidades" subtitle="Minhas habilidades" id="skills">
      <div className="absolute right-[50%] translate-x-[50%]">
        <Lottie animationData={universeStarsAnimation} height={900} />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <SkillCard title="Linguagens" skills={languages} />

        <SkillCard title="Front end" skills={frontend} />

        <SkillCard title="Back end" skills={backend} />

        <SkillCard title="Ferramentas" skills={tools} />
      </div>
    </Section>
  )
}

export default Skills
