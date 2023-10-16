import { BASEURL } from './url'

export const getSignup = async ({ email, password, username }) => {
  const response = await fetch(BASEURL + '/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status === 500) {
    throw new Error('Ошибка сервера')
  }

  if (response.status === 400) {
    const data = await response.json()
    throw new Error(JSON.stringify(data))
  }

  const data = await response.json()
  return data
}

export const getLogin = async ({ email, password }) => {
  const response = await fetch(BASEURL + '/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status === 500) {
    throw new Error('Ошибка сервера')
  }

  if (response.status === 400) {
    throw new Error('Должны быть заполнены все поля')
  }

  if (response.status === 401) {
    throw new Error('Пользователь с таким email или паролем не найден')
  }

  const data = await response.json()
  return data
}

export const getToken = async ({ email, password }) => {
  const response = await fetch(BASEURL + '/user/token/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status === 500) {
    throw new Error('Ошибка сервера')
  }

  if (response.status === 400) {
    throw new Error('Должны быть заполнены все поля')
  }

  if (response.status === 401) {
    throw new Error('Пользователь с таким email или паролем не найден')
  }

  const data = await response.json()
  return data
}

export const refreshToken = async () => {
  const refresh = JSON.parse(localStorage.getItem('refreshToken'))
  const response = await fetch(BASEURL + '/user/token/refresh/', {
    method: 'POST',
    body: JSON.stringify({
      refresh: refresh,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status === 500) {
    throw new Error('Ошибка сервера')
  }

  if (response.status === 400) {
    throw new Error('В теле запроса не передан refresh токен')
  }

  if (response.status === 401) {
    throw new Error('Токен недействителен или просрочен')
  }

  const data = await response.json()
  
  return data
}
