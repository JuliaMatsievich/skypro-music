import { Link } from 'react-router-dom'
import * as S from './AuthPage.styles'
import { useEffect, useRef, useState } from 'react'
import { getLogin, getSignup } from '../../api'

export default function AuthPage({ isLoginMode, isUser, setIsUser }) {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [username, setUsername] = useState('')

  const emailRef = useRef(null)
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const repeatPasswordRef = useRef(null)

  const handleLogin = async ({ email, password }) => {
    getLogin({ email, password })
      .then((data) => {
        localStorage.setItem('username', data.username)
        setIsUser(true)
        window.location.href = '/'
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  const handleRegister = async () => {
    if(!usernameRef.current.value && !emailRef.current.value && !passwordRef.current.value && !repeatPasswordRef.current.value) {
      setError('Пожалуйста, заполните все поля')
      return
    }
    if (passwordRef.current.value !== repeatPasswordRef.current.value) {
      setError('Пароли не совпадают')
      return
    }

    getSignup({ email, password, username })
      .then((data) => {
        localStorage.setItem('username', data.username)
        setIsUser(true)
        window.location.href = '/'
      })
      .catch((error) => {
        const errorObject = JSON.parse(error.message)
        if (errorObject.username) {
          setError(errorObject.username)
          return
        }
        if (errorObject.email) {
          setError(errorObject.email)
          return
        }
        if (errorObject.password) {
          setError(errorObject.password)
          return
        }
      })
  }

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null)
  }, [isLoginMode, username, email, password, repeatPassword])

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="username"
                placeholder="Имя пользователя"
                value={username}
                ref={usernameRef}
                onChange={(event) => {
                  setUsername(event.target.value)
                }}
              />
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                ref={emailRef}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                ref={passwordRef}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                ref={repeatPasswordRef}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
