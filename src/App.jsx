import './App.css'
import * as S from './App.styles'
import { Player } from './components/audioPlayer/audioPlayer'
import { NavMenu } from './components/navMenu/navMenu'
import { TrackList } from './components/trackList/trackList'
import { SideBar } from './components/sideBar/sideBar'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(!isLoading)
    }, 5000)
  }, [])

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavMenu />
            <TrackList isLoading={isLoading} />
            <SideBar isLoading={isLoading} />
          </S.Main>
          <Player isLoading={isLoading} />
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default App
