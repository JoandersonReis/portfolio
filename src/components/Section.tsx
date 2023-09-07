import { ReactNode } from 'react'
import { Container } from './Container'

interface IProps {
  title: string
  subtitle: string
  children: ReactNode
  id?: string
}

const Section = (props: IProps) => {
  return (
    <Container.Root className="py-8" id={props.id}>
      <Container.Content>
        <div className="relative">
          <h1 className="inline uppercase text-transparent bg-clip-text bg-gradient-to-r from-sky-500 opacity-30 text-[64px] cell:text-[82px]">
            {props.title}
          </h1>

          <strong className="absolute top-[50%] translate-y-[-50%] left-2 text-lg">
            {props.subtitle}
          </strong>
        </div>

        <main>{props.children}</main>
      </Container.Content>
    </Container.Root>
  )
}

export default Section
