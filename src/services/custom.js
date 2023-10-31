import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../constants/url'


const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().token.accessToken

      console.debug('Использую токен из стора', { accessToken })

      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`)
      }

      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)
  console.debug('Результат первого запроса', { result })

  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    api.dispatch(setUser(null))
    window.location.navigate('/login')
  }

  const { token } = api.getState()
  console.debug('Данные пользователя в сторе', { token })

  if (!token.refreshToken) {
    return forceLogout()
  }

  const refreshResult = await baseQuery(
	{
	  url: "/user/token/refresh/",
	  method: "POST",
	  body: {
		 refresh: token.refreshToken,
	  },
	},
	api,
	extraOptions
 );

 console.debug("Результат запроса на обновление токена", { refreshResult });

 if (!refreshResult.data.access) {
	return forceLogout();
 }

 api.dispatch(setToken({ ...token, accessToken: refreshResult.data.access }));
 
 const retryResult = await baseQuery(args, api, extraOptions);

 if (retryResult?.error?.status === 401) {
  return forceLogout();
}

console.debug("Повторный запрос завершился успешно");

return retryResult;
 
}
