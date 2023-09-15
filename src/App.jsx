import * as S from './App.styles'
import { getTracksAll } from './api'
import { AppRoutes } from './routes'
import { useEffect, useState } from 'react'

const App = () => {
  const initialToken = localStorage.getItem('token', '')
  const [token, setToken] = useState(initialToken)

  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getTracksAll().then((data) => {
      setTracks(data)
    })
  }, [])

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <AppRoutes token={token} setToken={setToken} tracks={tracks}/>
      </S.Wrapper>
    </>
  )
}

export default App
