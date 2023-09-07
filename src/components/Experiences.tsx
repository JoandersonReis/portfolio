import { experiences } from '@/lib/experiences'
import Experience from './Experience'
import Section from './Section'

const Experiences = () => {
  return (
    <Section
      title="Experiência"
      subtitle="Experiência profissional"
      id="experiences"
    >
      <div className="border-sky-500 border-l-4 ml-4 md:ml-0 md:border-l-0 md:border-t-4 md:mt-6">
        <div className="flex flex-col gap-8 ml-[-18px] md:ml-0 md:grid md:grid-cols-2 md:mt-[-18px]">
          {experiences.map((experience) => (
            <Experience key={experience.name} experience={experience} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experiences
