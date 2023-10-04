import * as S from './index.styles'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { TrackList } from '../../components/trackList/trackList'
import { SideBar } from '../../components/sideBar/sideBar'
import { CATEGORIES } from '../../constants'
import { ErrorMessage } from '../../components/errors/error'
import { useState } from 'react'

export const MainPage = ({
  tracks,
  allTracksError,
  isLoading,
  currentTrack,
  setCurrentTrack,
}) => {
  
  return (
    <S.Container>
      <S.Main>
        <NavMenu />
        {allTracksError ? (
          <ErrorMessage allTracksError={allTracksError} />
        ) : (
          <TrackList
            isLoading={isLoading}
            tracks={tracks}
            setCurrentTrack={setCurrentTrack}
            currentTrack={currentTrack}
          />
        )}
        <SideBar isLoading={isLoading} categories={CATEGORIES} />
      </S.Main>
      {currentTrack ? (
        <Player isLoading={isLoading} currentTrack={currentTrack} />
      ) : null}
      <S.Footer></S.Footer>
    </S.Container>
  )
}
