import * as S from './App.styles'
import { AppRoutes } from "./routes";


function App() {

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <AppRoutes/>
      </S.Wrapper>
    </>
  )
}

export default App
