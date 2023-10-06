import * as S from './index.styles'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { TrackList } from '../../components/trackList/trackList'
import { SideBar } from '../../components/sideBar/sideBar'
import { CATEGORIES } from '../../constants'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useState } from 'react'
import { UserContext } from '../../App'

export const MainPage = ({
  currentTrack,
  setCurrentTrack,
}) => {
 const { allTracksError, setAllTracksError } = useContext(UserContext)

  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        {allTracksError ? (
          <ErrorMessage allTracksError={allTracksError} />
        ) : (
          <TrackList
            setCurrentTrack={setCurrentTrack}
            currentTrack={currentTrack}
          />
        )}
        <SideBar categories={CATEGORIES} />
      </S.Main>
      {currentTrack ? (
        <Player currentTrack={currentTrack} />
      ) : null}
      <S.Footer></S.Footer>
    </S.Container>
  )
}
