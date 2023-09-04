import * as S from './authorization.styles'
import { useState } from 'react'

export function Authorization() {
  const [isRegister, setRegister] = useState(false)

  function handleClickEnter() {
    window.localStorage.setItem('user', 'token')
  }

  function handleClickRegister() {
    setRegister(!isRegister)
  }

 function handleClickRegisterPage() {
    window.localStorage.setItem('user', 'token')
  }

  return (
    <S.ContainerEnter>
      <S.ModalBlock>
        <S.ModalFormLogin action="#">
          <a href="../">
            <S.ModalLogo>
              <img src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
          </a>
          <S.ModalInput type="text" name="login" placeholder="Почта" />

          {isRegister ? (
            <>
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <S.ModalBtnSignupEnt>
                <S.ModalBtnSignupEntLink to="/" onClick={handleClickRegisterPage}>
                  Зарегистрироваться
                </S.ModalBtnSignupEntLink>
              </S.ModalBtnSignupEnt>
            </>
          ) : (
            <>
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter>
                <S.ModalBtnEnterLink to="/"  onClick={handleClickEnter}>Войти</S.ModalBtnEnterLink>
              </S.ModalBtnEnter>
              <S.ModalBtnSignUp>
                <S.ModalBtnSignUpLink to="/register"  onClick={handleClickRegister}>
                  Зарегистрироваться
                </S.ModalBtnSignUpLink>
              </S.ModalBtnSignUp>
            </>
          )}
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.ContainerEnter>
  )
}
