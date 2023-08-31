import * as S from './wrapperPages.styles'
import { NavMenu } from '../../components/navMenu/navMenu'
import * as SM from '../../pages/main/index.styles'

export function WrapperPages({ children }) {
  return (
    <SM.Container>
      <SM.Main>
        <NavMenu />
        <S.MainCenterBlock>{children}</S.MainCenterBlock>
      </SM.Main>
      <SM.Footer></SM.Footer>
    </SM.Container>
  )
}
