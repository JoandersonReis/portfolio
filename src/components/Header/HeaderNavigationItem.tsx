import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
}

const HeaderNavigationItem = (props: IProps) => {
  return <Link {...props} />
}

export default HeaderNavigationItem
