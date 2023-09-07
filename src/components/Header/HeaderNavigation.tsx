import clsx from 'clsx'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'nav'> {
  isVisible: boolean
}

const HeaderNavigation = ({ isVisible, className, ...props }: IProps) => {
  return (
    <nav
      {...props}
      className={twMerge(
        clsx('transition-all', {
          'translate-x-[-250px] md:translate-x-0': !isVisible
        }),
        className
      )}
    />
  )
}

export default HeaderNavigation
