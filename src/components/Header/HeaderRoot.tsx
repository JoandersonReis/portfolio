import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'header'> {}

const HeaderRoot = (props: IProps) => {
  return <header {...props} />
}

export default HeaderRoot
