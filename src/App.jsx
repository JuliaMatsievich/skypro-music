import * as S from './App.styles'
import { AppRoutes } from './routes'
import { useState } from 'react'
import { getTracksAll } from './api'

const App = () => {
  const initialToken = localStorage.getItem('token', '')
  const [token, setToken] = useState(initialToken)

  // getTracksAll().then((tracks) => {
  //   console.log(tracks);
  // })

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
