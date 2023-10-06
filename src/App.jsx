import * as S from './App.styles'
import { getTracksAll } from './api/apiTrack'
import { AppRoutes } from './routes'
import { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allTracksSelector } from './store/selectors/track'
import { getAllTracks } from './store/actions/creators/track'

export const UserContext = createContext(null)

const App = () => {
  // const [tracks, setTracks] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [allTracksError, setAllTracksError] = useState(null)
  const initialUser = localStorage.getItem('user')
  const [isUser, setIsUser] = useState(initialUser)
  const [currentTrack, setCurrentTrack] = useState(null)
  const tracks = useSelector(allTracksSelector)
  const dispatch = useDispatch()

  const logIn = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
  }

  const logOut = () => {
    localStorage.removeItem('user')
    setIsUser(false)
  }

  useEffect(() => {
    getTracksAll()
      .then((data) => {
        setLoading(false)
        // setTracks(data)
        dispatch(getAllTracks(data))
        console.log(tracks);
      })
      .catch((error) => {
        setAllTracksError(
          'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
        )
      })
  }, [])

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <UserContext.Provider value={{ isUser, setIsUser, logIn, logOut }}>
          <AppRoutes
            tracks={tracks}
            allTracksError={allTracksError}
            isLoading={isLoading}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        </UserContext.Provider>
      </S.Wrapper>
    </>
  )
}

export default App
