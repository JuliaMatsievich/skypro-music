import * as S from './App.styles'
import { getTracksAll } from './api'
import { AppRoutes } from './routes'
import { createContext, useEffect, useState } from 'react'


export const UserContext = createContext(null)

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [allTracksError, setAllTracksError] = useState(null);
  const initialUser = localStorage.getItem('username')
  const [isUser, setIsUser] = useState(initialUser);

  const logIn = () => {
    
  }

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
        <UserContext.Provider value={{isUser, setIsUser}}>
        <AppRoutes tracks={tracks} allTracksError={allTracksError} isLoading={isLoading} />
        </UserContext.Provider>
      </S.Wrapper>
    </>
  )
}

export default App
