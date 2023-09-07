import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'div'> {}

const ExperienceContent = ({ className, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'bg-zinc-900 rounded p-4 flex flex-col items-center justify-center gap-3 relative shadow-lg shadow-sky-500/20 md:h-full',
        className
      )}
    />
  )
}

export default ExperienceContent
