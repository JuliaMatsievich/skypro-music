import { BASEURL } from "./url"

export const getSignup = async ({email, password, username}) => {
	const response = await fetch(
		BASEURL + '/user/signup/',
	  {
		 method: 'POST',
		 body: JSON.stringify({
			email: email,
			password: password,
			username: username,
		 }),
		 headers: {
			'content-type': 'application/json',
		 },
	  },
	)
 
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
 
 export const getLogin = async ({email, password}) => {
	const response = await fetch(
		BASEURL + '/user/login/',
	  {
		 method: 'POST',
		 body: JSON.stringify({
			email: email,
			password: password,
		 }),
		 headers: {
			'content-type': 'application/json',
		 },
	  },
	)
 
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