import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from './url'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  endpoints: (builder) => ({

    signUp: builder.mutation({
      query: (body) => ({
        url: '/user/signup/',
        body,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),

    LogIn: builder.mutation({
      query: (body) => ({
        url: '/user/login/',
        body,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),

    getToken: builder.mutation({
      query: (body) => ({
        url: '/user/token/',
        body,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),

    refreshToken: builder.mutation({
      query: (body) => ({
        url: '/user/token/refresh/',
        body,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),

  }),
})
