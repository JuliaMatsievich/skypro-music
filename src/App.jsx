import * as S from './App.styles'
import { AppRoutes } from './routes'
import { createContext, useState } from 'react'

export const UserContext = createContext(null)

const App = () => {
  const [allTracksError, setAllTracksError] = useState(null)

  const logOut = () => {
    localStorage.clear()
    window.location.href='/login'
  }

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <UserContext.Provider
          value={{logOut, allTracksError, setAllTracksError}}
        >
          <AppRoutes />
        </UserContext.Provider>
      </S.Wrapper>
    </>
  )
}

export default App
