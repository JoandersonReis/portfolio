import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'div'> {}

const ExperienceArrow = (props: IProps) => {
  return (
    <div
      {...props}
      className="border-transparent h-2 border-[8px] border-r-zinc-900 absolute left-[-16px] md:border-r-transparent md:border-b-zinc-900 md:left-[50%] translate-x-[-50%] md:top-[-16px]"
    />
  )
}

export default ExperienceArrow
