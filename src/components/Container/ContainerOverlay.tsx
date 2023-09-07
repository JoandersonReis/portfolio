import clsx from 'clsx'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'div'> {
  gradient?: 'bottom' | 'top'
}

const ContainerOverlay = ({ className, gradient, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        clsx('w-full h-full from-black to-black/30 flex items-center', {
          'bg-gradient-to-t': gradient === 'bottom' || !gradient,
          'bg-gradient-to-b': gradient === 'top'
        }),
        className
      )}
    />
  )
}

export default ContainerOverlay
