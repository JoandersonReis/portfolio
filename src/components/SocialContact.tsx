import Link from 'next/link'
import { AnchorHTMLAttributes, ElementType } from 'react'

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  icon: ElementType
}

const SocialContact = ({ icon: Icon, ...props }: IProps) => {
  return (
    <Link
      {...props}
      className="h-8 w-8 flex items-center justify-center rounded bg-sky-600"
    >
      <Icon size={18} color="#fff" />
    </Link>
  )
}

export default SocialContact
