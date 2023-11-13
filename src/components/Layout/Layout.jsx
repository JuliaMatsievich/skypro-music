import * as S from './Layout.styles'
import { NavMenu } from '../navMenu/navMenu'
import * as SM from '../../pages/main/index.styles'
import { SideBar } from '../sideBar/sideBar'
import { CATEGORIES } from '../../constants/constants'
import { Outlet } from 'react-router-dom'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { useSelector } from 'react-redux'
import { lightTheme, darkTheme } from '../../constants/themes'
import { useThemes } from '../../customHooks/themeHook'
import { ThemeProvider } from 'styled-components'

export const Layout = () => {
  const currentPlaylist = useSelector(
    (state) => state.audioPlayer.currentPlaylist,
  )

  const currentTrack = useSelector((state) => state.audioPlayer.currentTrack)
  const { theme } = useThemes(lightTheme, darkTheme)

  console.log('theme', theme);

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
