import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'p'> {}

const ExperienceDescription = (props: IProps) => {
  return <p {...props} className="text-center flex-1" />
}

export default ExperienceDescription
