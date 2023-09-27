import * as S from './index.styles'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { TrackList } from '../../components/trackList/trackList'
import { SideBar } from '../../components/sideBar/sideBar'
import { useContext, useState } from 'react'
import { CATEGORIES } from '../../constants'
import { ErrorMessage } from '../../components/errors/error'
import { UserContext } from '../../App'


export const MainPage = ({ tracks, allTracksError, isLoading}) => {
  
  const [currentTrack, setCurrentTrack] = useState(null);
  const {isUser, setIsUser} = useContext(UserContext) 

  return (
    <S.Container>
    <S.Main>
      <NavMenu/>
      {allTracksError ? <ErrorMessage allTracksError={allTracksError}/> : <TrackList isLoading={isLoading} tracks={tracks} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack}/>}  
      <SideBar isLoading={isLoading} categories={CATEGORIES} setIsUser={setIsUser}/>
    </S.Main>
    {currentTrack ? <Player isLoading={isLoading} currentTrack={currentTrack}/> : null}
    <S.Footer></S.Footer>
  </S.Container>
  )
}
