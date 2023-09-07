import { ComponentProps } from 'react'

interface IProps extends ComponentProps<'div'> {}

const HeaderLanguageSelector = (props: IProps) => {
  return <div {...props} />
}

export default HeaderLanguageSelector
