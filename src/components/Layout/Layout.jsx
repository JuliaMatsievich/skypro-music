import * as S from './Layout.styles'
import { NavMenu } from '../navMenu/navMenu'
import * as SM from '../../pages/main/index.styles'
import { SideBar } from '../sideBar/sideBar'
import { CATEGORIES } from '../../constants/constants'
import { Outlet } from 'react-router-dom'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { useSelector } from 'react-redux'

export const Layout = () => {
  const currentPlaylist = useSelector(
    (state) => state.audioPlayer.currentPlaylist,
  )

  const currentTrack = useSelector(
    (state) => state.audioPlayer.currentTrack,
  )

  return (
    <S.Wrapper>
      <SM.Container>
        <SM.Main>
          <NavMenu />
          <S.MainCenterBlock>
            <Outlet />
          </S.MainCenterBlock>
          <SideBar categories={CATEGORIES} />
        </SM.Main>
        {Object.keys(currentTrack).length ? <Player /> : null}
        {/* {Object.keys(currentPlaylist).length ? <Player/> : null} */}
        <SM.Footer></SM.Footer>
      </SM.Container>
    </S.Wrapper>
  )
}
