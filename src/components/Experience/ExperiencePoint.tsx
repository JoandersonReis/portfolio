import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'div'> {}

const ExperiencePoint = ({ className, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'h-8 w-8 min-w-[32px] max-w-[32px] bg-sky-500 border-2 border-white rounded-full',
        className
      )}
    />
  )
}

export default ExperiencePoint
