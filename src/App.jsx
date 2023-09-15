import * as S from './App.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'

const App = () => {
  const initialToken = localStorage.getItem('token', '')
  const [token, setToken] = useState(initialToken)


  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <AppRoutes token={token} setToken={setToken} />
      </S.Wrapper>
    </>
  )
}

export default App
