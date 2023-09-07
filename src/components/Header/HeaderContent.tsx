import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'section'> {}

const HeaderContent = ({ className, ...props }: IProps) => {
  return (
    <section
      {...props}
      className={twMerge('max-w-[1200px] px-3 m-auto xl:px-0', className)}
    />
  )
}

export default HeaderContent
