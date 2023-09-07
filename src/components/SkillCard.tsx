import { TSkill } from './@types'
import { Card } from './Card'

interface IProps {
  title: string
  skills: TSkill[]
}

const SkillCard = ({ title, skills }: IProps) => {
  return (
    <Card.Root>
      <Card.Content className="flex flex-col gap-3 border-2 border-sky-500/50 h-full">
        <h3 className="uppercase text-center">{title}</h3>

        <div className="w-full flex flex-col gap-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-full flex items-center justify-between"
            >
              <strong className="uppercase">{skill.name}</strong>

              <span className="uppercase text-sky-500">{skill.experience}</span>
            </div>
          ))}
        </div>
      </Card.Content>
    </Card.Root>
  )
}

export default SkillCard
