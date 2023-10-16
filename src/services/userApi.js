import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASEURL} from './url'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({baseUrl: BASEURL}),
	endpoints: (builder) => ({

		signUp: builder.mutation({
			query: (body) => ({
				url: '/user/signup/',
				body,
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				 },
			})
		})

		
	})
})