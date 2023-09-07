import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'span'> {}

const ExperienceDate = (props: IProps) => {
  return <span {...props} className="text-xs text-sky-600" />
}

export default ExperienceDate
