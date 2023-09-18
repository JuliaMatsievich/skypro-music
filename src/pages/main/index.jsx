import * as S from './index.styles'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { TrackList } from '../../components/trackList/trackList'
import { SideBar } from '../../components/sideBar/sideBar'
import { useState } from 'react'
import { CATEGORIES } from '../../constants'
import { ErrorMessage } from '../../components/errors/error'

export const MainPage = ({ setToken, tracks, allTracksError, isLoading }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <S.Container>
    <S.Main>
      <NavMenu setToken={setToken}/>
      {allTracksError ? <ErrorMessage allTracksError={allTracksError}/> : <TrackList isLoading={isLoading} tracks={tracks} setCurrentTrack={setCurrentTrack} />}  
      <SideBar isLoading={isLoading} categories={CATEGORIES} />
    </S.Main>
    {currentTrack ? <Player isLoading={isLoading} track={currentTrack}/> : null}
    <S.Footer></S.Footer>
  </S.Container>
  )
}
