import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'div'> {}

const CardContent = ({ className, ...props }: IProps) => {
  return (
    <div
      {...props}
      className={twMerge(
        'bg-gradient-to-t from-zinc-900 to-zinc-900/50 p-4 rounded-md',
        className
      )}
    />
  )
}

export default CardContent
