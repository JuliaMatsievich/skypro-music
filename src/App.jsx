import * as S from './App.styles'
import { getTracksAll } from './api'
import { AppRoutes } from './routes'
import { useEffect, useState } from 'react'

const App = () => {
  const initialToken = localStorage.getItem('token', '');
  const [token, setToken] = useState(initialToken);
  const [tracks, setTracks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [allTracksError, setAllTracksError] = useState(null);

  useEffect(() => {
    getTracksAll()
      .then((data) => {
        setLoading(false)
        setTracks(data)
      })
      .catch((error) => {
        setAllTracksError('Не удалось загрузить плейлист, попробуйте позже: ' + error.message)
      })
      
  }, [])

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <AppRoutes token={token} setToken={setToken} tracks={tracks} allTracksError={allTracksError} isLoading={isLoading} />
      </S.Wrapper>
    </>
  )
}

export default App
