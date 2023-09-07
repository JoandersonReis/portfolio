import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'h3'> {}

const ExperienceTitle = (props: IProps) => {
  return <h3 {...props} className="uppercase text-lg" />
}

export default ExperienceTitle
