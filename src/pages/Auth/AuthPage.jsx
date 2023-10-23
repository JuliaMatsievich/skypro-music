import { Link } from 'react-router-dom'
import * as S from './AuthPage.styles'
import { useContext, useEffect, useRef, useState } from 'react'
import { getLogin, getSignup, getToken, refreshToken } from '../../api/apiUser'
import { UserContext } from '../../App'
import { useDispatch } from 'react-redux'
import { setToken } from '../../store/tokenSlice'
import { useGetTokenMutation, useLogInMutation, useSignUpMutation } from '../../services/trackApi'
import { setUser } from '../../store/userSlice'

export default function AuthPage({ isLoginMode }) {
  const { setIsUser, logIn } = useContext(UserContext)
  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isLoadingUser, setIsLoadingUser] = useState(false)

  const emailRef = useRef(null)
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const repeatPasswordRef = useRef(null)

  const [logInApi, {}] = useLogInMutation()
  const [getToken, {}] = useGetTokenMutation()
  const [signUpApi, {}] = useSignUpMutation()

  const handleLogin = async ({ email, password }) => {
    setIsLoadingUser(true)
    await getToken({ email, password })
      .unwrap()
      .then((data) => {
        localStorage.setItem('access', JSON.stringify(data.access))
        localStorage.setItem('refresh', JSON.stringify(data.refresh))
      })
      .catch((error) => {
        if (error.status === 500) {
          setError('Ошибка сервера')
        }
        if (error.status === 400) {
          setError('Должны быть заполнены все поля')
        }
        if (error.status === 401) {
          setError('Пользователь с таким email или паролем не найден')
        }
        setIsLoadingUser(false)
      })

    await logInApi({ email, password })
      .unwrap()
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data))
        setIsLoadingUser(false)

        window.location.href = '/'
      })
      .catch((error) => {
        if (error.status === 500) {
          setError('Ошибка сервера')
        }
        if (error.status === 400) {
          setError('Должны быть заполнены все поля')
        }
        if (error.status === 401) {
          setError('Пользователь с таким email или паролем не найден')
        }
        setIsLoadingUser(false)
      })

    // setIsLoadingUser(true)
    // getLogin({ email, password })
    //   .then((data) => {
    //     localStorage.setItem('user', JSON.stringify(data))
    //     logIn()
    //     setIsUser(true)
    //     setIsLoadingUser(false)
    //     window.location.navigate = '/'
    //   })

  }

  const handleRegister = async () => {
    setIsLoadingUser(true)

    if (
      !usernameRef.current.value &&
      !emailRef.current.value &&
      !passwordRef.current.value &&
      !repeatPasswordRef.current.value
    ) {
      setError('Пожалуйста, заполните все поля')
      setIsLoadingUser(false)
      return
    }
    if (passwordRef.current.value !== repeatPasswordRef.current.value) {
      setError('Пароли не совпадают')
      setIsLoadingUser(false)
      return
    }

    await getToken({ email, password })
    .unwrap()
    .then((data) => {
      localStorage.setItem('access', JSON.stringify(data.access))
      localStorage.setItem('refresh', JSON.stringify(data.refresh))
    })
    .catch((error) => {
      if (error.status === 500) {
        setError('Ошибка сервера')
      }
      if (error.status === 400) {
        setError('Должны быть заполнены все поля')
      }
      if (error.status === 401) {
        setError('Пользователь с таким email или паролем не найден')
      }
      setIsLoadingUser(false)
    })

    await signUpApi({email, password, username})
    .unwrap()
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data))
        // logIn()
        // setIsUser(true)
        setIsLoadingUser(false)
        window.location.href = '/'
      })
      .catch((error) => {
        console.log(error.data);
        if(error.data.username) {
          setError(error.data.username)
        }
        if(error.data.email) {
          setError(error.data.email)
        }
        // const errorObject = JSON.parse(error.message)
        // if (errorObject.username) {
        //   setError(errorObject.username)
        //   return
        // }
        // if (errorObject.email) {
        //   setError(errorObject.email)
        //   return
        // }
        // if (errorObject.password) {
        //   setError(errorObject.password)
        //   return
        // }
        setIsLoadingUser(false)
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
              <S.PrimaryButton
                disabled={isLoadingUser}
                onClick={() => handleLogin({ email, password })}
              >
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton disabled={isLoadingUser}>
                  Зарегистрироваться
                </S.SecondaryButton>
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
              <S.PrimaryButton
                disabled={isLoadingUser}
                onClick={handleRegister}
              >
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  )
}
