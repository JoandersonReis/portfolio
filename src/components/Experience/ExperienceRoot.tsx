import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'div'> {}

const ExperienceRoot = ({ className, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'flex items-center gap-8 md:h-full md:flex-col md:max-w-sm md:justify-self-center',
        className
      )}
    />
  )
}

export default ExperienceRoot
