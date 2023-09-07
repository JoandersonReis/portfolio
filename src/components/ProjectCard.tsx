import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLink } from 'react-icons/fa'
import { TProject } from './@types'
import { Card } from './Card'

interface IProps {
  project: TProject
}

const ProjectCard = ({ project }: IProps) => {
  return (
    <Card.Root className="group mx-4 my-8 h-[400px] [perspective:1000px]">
      <button className="rounded relative w-full h-full [transform-style:preserve-3d] focus:[transform:rotateY(180deg)] transition-all duration-300 shadow-lg shadow-sky-500 md:focus:[transform:rotateY(0deg)] md:group-hover:[transform:rotateY(180deg)]">
        <Card.Content className="flex items-center flex-col gap-4 absolute inset-0 border-2 border-sky-500/50">
          <h3 className="uppercase text-lg">{project.name}</h3>

          <div className="relative h-[300px] w-full">
            <Image
              src={`/assets/images/projects/${project.image}`}
              alt={project.name}
              fill
              style={{
                objectFit: 'contain'
              }}
            />
          </div>

          <div className="flex gap-3">
            {project.technologies.map((tech) => (
              <div key={tech} className="relative h-8 w-8">
                <Image
                  src={`/assets/images/technologies/${tech}.png`}
                  alt={tech}
                  fill
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            ))}
          </div>
        </Card.Content>

        <Card.Content className="absolute inset-0 h-full w-full rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] bg-zinc-900 flex flex-col items-center border-2 border-sky-500/50">
          <div className="flex-1 flex flex-col items-center gap-8">
            <p className="text-lg text-center">{project.description}</p>

            <div>
              <span className="block text-center mb-2 uppercase">
                Tecnologias Utilizadas
              </span>
              <div className="flex gap-3">
                {project.technologies.map((tech) => (
                  <div key={tech} className="relative h-8 w-8">
                    <Image
                      src={`/assets/images/technologies/${tech}.png`}
                      alt={tech}
                      fill
                      style={{
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full items-center">
            {project.github ? (
              <Link
                className="flex max-w-[200px] w-full h-8 bg-zinc-800 rounded items-center justify-center gap-2"
                target="_blank"
                href={project.github}
              >
                <FaGithub size={16} color="#fff" />
                Github
              </Link>
            ) : (
              <div className="flex max-w-[200px] w-full h-8 bg-zinc-950 rounded items-center justify-center gap-2">
                <FaGithub size={16} color="#fff" />
                Privado
              </div>
            )}
            <Link
              className="flex max-w-[200px] w-full h-8 bg-sky-500 rounded items-center justify-center gap-2"
              target="_blank"
              href={project.link}
            >
              <FaLink size={16} color="#fff" />
              Acessar
            </Link>
          </div>
        </Card.Content>
      </button>
    </Card.Root>
  )
}

export default ProjectCard
