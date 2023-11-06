import * as S from './Layout.styles'
import { NavMenu } from '../navMenu/navMenu'
import * as SM from '../../pages/main/index.styles'
import { SideBar } from '../sideBar/sideBar'
import { CATEGORIES } from '../../constants/constants'
import { Outlet } from 'react-router-dom'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { currentTrackSelector } from '../../store/trackSlice'
import { useSelector } from 'react-redux'

export const Layout = () => {
  const currentTrack = useSelector(currentTrackSelector)
  const isPlaying = useSelector((state) => state.audioPlayer.isPlaying)
  const currentPlaylist = useSelector(
    (state) => state.audioPlayer.currentPlaylist,
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
        {/* {Object.keys(currentTrack).length ? <Player /> : null} */}
        {Object.keys(currentPlaylist).length ? <Player /> : null}
        {/* {isPlaying ? <Player /> : null} */}

        <SM.Footer></SM.Footer>
      </SM.Container>
    </S.Wrapper>
  )
}
