'use client'
import { TExperience } from './@types'
import { Experience } from './Experience/index'

interface IProps {
  experience: TExperience
}

const ExperienceComponent = ({ experience }: IProps) => {
  return (
    <Experience.Root>
      <Experience.Point />

      <Experience.Content>
        <Experience.Arrow />
        <Experience.Date>{experience.date}</Experience.Date>
        <Experience.Title>{experience.name}</Experience.Title>

        <Experience.Description>
          {experience.description}
        </Experience.Description>

        <div className="flex gap-3 mt-4">
          {experience.technologies.map((tech) => (
            <Experience.Technology key={tech} image={tech} />
          ))}
        </div>
      </Experience.Content>
    </Experience.Root>
  )
}

export default ExperienceComponent
