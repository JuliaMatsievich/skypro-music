import * as S from './index.styles'
import { Player } from '../../components/audioPlayer/audioPlayer'
import { NavMenu } from '../../components/navMenu/navMenu'
import { TrackList } from '../../components/trackList/trackList'
import { SideBar } from '../../components/sideBar/sideBar'
import { useState, useEffect } from 'react'
import { CATEGORIES } from '../../constants'

export const MainPage = ({ setToken, tracks }) => {
  const [isLoading, setLoading] = useState(true)
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!isLoading)
    }, 5000)
  }, [])

  return (
    <S.Container>
    <S.Main>
      <NavMenu setToken={setToken}/>
      <TrackList isLoading={isLoading} tracks={tracks} setCurrentTrack={setCurrentTrack} />
      <SideBar isLoading={isLoading} categories={CATEGORIES} />
    </S.Main>
    {currentTrack ? <Player isLoading={isLoading} track={currentTrack}/> : null}
    <S.Footer></S.Footer>
  </S.Container>
  )
}
