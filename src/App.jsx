import * as S from './App.styles'
// import { getTracksAll } from './api/apiTrack'
import { AppRoutes } from './routes'
import { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { currentTrackSelector, allTracksSelector } from './store/selectors/track'
// import { setAllTracks } from './store/actions/creators/track'

export const UserContext = createContext(null)

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [allTracksError, setAllTracksError] = useState(null)
  const initialUser = localStorage.getItem('user')
  const [isUser, setIsUser] = useState(initialUser)
  const [currentTrack, setCurrentTrack] = useState(null)

  const dispatch = useDispatch()

  const logIn = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
  }

  const logOut = () => {
    localStorage.removeItem('user')
    setIsUser(false)
  }

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <UserContext.Provider
          value={{ isUser, setIsUser, logIn, logOut, isLoading, setLoading,allTracksError, setAllTracksError}}
        >
          <AppRoutes
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        </UserContext.Provider>
      </S.Wrapper>
    </>
  )
}

export default App
