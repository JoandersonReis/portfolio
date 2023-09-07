import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IProps extends ComponentProps<'div'> {
  image: string
}

const ExperienceTechnology = ({ image, className, ...props }: IProps) => {
  return (
    <div {...props} className={twMerge('relative h-8 w-8', className)}>
      <Image
        src={`/assets/images/technologies/${image}.png`}
        alt={image}
        fill
        style={{
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default ExperienceTechnology
