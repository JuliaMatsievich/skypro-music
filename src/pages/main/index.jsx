import * as S from './index.styles'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { TrackList } from '../../components/trackList/trackList'
import { SideBar } from '../../components/sideBar/sideBar'
import { CATEGORIES } from '../../constants'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useState } from 'react'
import { UserContext } from '../../App'
import { useSelector } from 'react-redux'
import { currentTrackSelector } from '../../store/selectors/track'

export const MainPage = () => {
 const { allTracksError } = useContext(UserContext)

 const currentTrack = useSelector(currentTrackSelector)

 console.log(currentTrack);
  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        {allTracksError ? (
          <ErrorMessage allTracksError={allTracksError} />
        ) : (
          <TrackList />
        )}
        <SideBar categories={CATEGORIES} />
      </S.Main>
      {Object.keys(currentTrack).length ? (
        <Player />
      ) : null}
      <S.Footer></S.Footer>
    </S.Container>
  )
}
