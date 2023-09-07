import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'div'> {}

const ContainerRoot = (props: IProps) => {
  return <div {...props} />
}

export default ContainerRoot
