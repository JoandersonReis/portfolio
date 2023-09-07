import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'div'> {}

const SlideArrow = ({ className, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'h-10 w-5 flex items-center justify-center rounded bg-zinc-900',
        className
      )}
    />
  )
}

export default SlideArrow
