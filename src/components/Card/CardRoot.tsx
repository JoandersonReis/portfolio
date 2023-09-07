import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'div'> {}

const CardRoot = (props: IProps) => {
  return <div {...props} />
}

export default CardRoot
