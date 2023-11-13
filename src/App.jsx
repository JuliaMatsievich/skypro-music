import * as S from './App.styles'
import { AppRoutes } from './routes'
import { createContext, useState } from 'react'
import { lightTheme, darkTheme } from './constants/themes'

import { useThemes } from './customHooks/themeHook'
import { ThemeProvider } from 'styled-components'

export const UserContext = createContext(null)

const App = () => {
  const [allTracksError, setAllTracksError] = useState(null)
  const { theme } = useThemes(lightTheme, darkTheme)


  const logOut = () => {
    localStorage.clear()
    window.location.href='/login'
  }

  return (
    <>
       <ThemeProvider theme={theme}>
      <S.GlobalStyle />
      <S.Wrapper>
        <UserContext.Provider
          value={{logOut, allTracksError, setAllTracksError}}
        >
          <AppRoutes />
        </UserContext.Provider>
      </S.Wrapper>
      </ThemeProvider>
      </>
  )
}

export default App
