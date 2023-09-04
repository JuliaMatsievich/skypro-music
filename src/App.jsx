import * as S from './App.styles'
import { AppRoutes } from "./routes";

function App() {

  return (
    <>
      <S.GlobalStyle />
      <S.Wrapper>
        <AppRoutes user={window.localStorage.getItem("user")}/>
      </S.Wrapper>
    </>
  )
}

export default App
