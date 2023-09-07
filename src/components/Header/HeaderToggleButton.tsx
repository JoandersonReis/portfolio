import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'button'> {}

const HeaderToggleButton = ({ className, ...props }: IProps) => {
  return <button className={twMerge('md:hidden', className)} {...props} />
}

export default HeaderToggleButton
