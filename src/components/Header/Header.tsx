import { memo } from 'react'

import { HeaderStyled } from './style'

interface IBaseComponentProps {
  children?: React.ReactNode
}

const Header: React.FC<IBaseComponentProps> = () => (
  <HeaderStyled>
    <h1>KanBANANA Project</h1>
  </HeaderStyled>
)
export default memo(Header)
