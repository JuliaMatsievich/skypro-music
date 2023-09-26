import * as S from './App.styles'
import { getTracksAll } from './api'
import { AppRoutes } from './routes'
import { useEffect, useState } from 'react'

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [allTracksError, setAllTracksError] = useState(null);
  const initialUser = localStorage.getItem('username')
  const [isUser, setIsUser] = useState(initialUser);


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
        <AppRoutes isUser={isUser} setIsUser={setIsUser} tracks={tracks} allTracksError={allTracksError} isLoading={isLoading} />
      </S.Wrapper>
    </>
  )
}

export default App
