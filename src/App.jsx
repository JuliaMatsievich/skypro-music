import { useDispatch } from 'react-redux'
import * as S from './App.styles'
import { AppRoutes } from './routes'
import { createContext, useEffect, useState } from 'react'
import { setToken } from './store/tokenSlice'

export const UserContext = createContext(null)

const App = () => {
  const [allTracksError, setAllTracksError] = useState(null)
  const initialUser = localStorage.getItem('user')
  const [isUser, setIsUser] = useState(initialUser)
  const dispatch = useDispatch()

  const logIn = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user
  }

  useEffect(() => {
    const tokens = {
      access: JSON.parse(localStorage.getItem('access')),
      refresh: JSON.parse(localStorage.getItem('refresh'))
    }
    dispatch(setToken(tokens))
  },[isUser])


  const logOut = () => {
    localStorage.clear()
    setIsUser(false)
  }

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <UserContext.Provider
          value={{ isUser, setIsUser, logIn, logOut, allTracksError, setAllTracksError}}
        >
          <AppRoutes />
        </UserContext.Provider>
      </S.Wrapper>
    </>
  )
}

export default App
