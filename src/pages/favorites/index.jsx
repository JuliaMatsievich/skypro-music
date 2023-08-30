import * as S from './index.styles'
import * as SM from '../main/index.styles'
import { NavMenu } from '../../components/navMenu/navMenu'

export function Favorites() {
	return (
		<SM.Container>
		<SM.Main>
		  <NavMenu />
		  <S.MainCenterBlock>
		  <h1>Мои треки</h1>
		  </S.MainCenterBlock>
		</SM.Main>
		<SM.Footer></SM.Footer>
	 </SM.Container>
	)
}