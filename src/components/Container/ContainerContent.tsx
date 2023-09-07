import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'section'> {}

const ContainerContent = ({ className, ...props }: IProps) => {
  return (
    <section
      {...props}
      className={twMerge('max-w-[1200px] mx-auto px-2 lg:px-0', className)}
    />
  )
}

export default ContainerContent
