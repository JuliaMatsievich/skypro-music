import * as S from './index.styles'
import { NavMenu } from '../../components/navMenu/navMenu'

export function Favorites() {
	return (
		<S.Container>
		<S.Main>
		  <NavMenu />
		  <S.MainCenterBlock>
		  <h1>Мои треки</h1>
		  </S.MainCenterBlock>
			
		</S.Main>
		<S.Footer></S.Footer>
	 </S.Container>
	)
}