import * as S from './App.styles'
import { getTracksAll } from './api'
import { ErrorMessage } from './components/errors/error'
import { AppRoutes } from './routes'
import { useEffect, useState } from 'react'

const App = () => {
  const initialToken = localStorage.getItem('token', '')
  const [token, setToken] = useState(initialToken)
  const [tracks, setTracks] = useState([])
  const [allTracksError, setAllTracksError] = useState(null)

  useEffect(() => {
    getTracksAll()
      .then((data) => {
        setTracks(data)
      })
      .catch((error) => {
        setAllTracksError('Не удалось загрузить плейлист, попробуйте позже')
      })
  }, [])

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        {/* <ErrorMessage allTracksError={allTracksError} /> */}
        <AppRoutes token={token} setToken={setToken} tracks={tracks} allTracksError={allTracksError}/>
      </S.Wrapper>
    </>
  )
}

export default App
