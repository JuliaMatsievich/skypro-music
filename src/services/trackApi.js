import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASEURL = 'https://skypro-music-api.skyeng.tech';

export const trackApi = createApi({
	reducerPath: 'trackApi',
	baseQuery: fetchBaseQuery({
		baseUrl: BASEURL,
		tagTypes: ["Tracks"],
		prepareHeaders: (headers, { getState }) => {
			const accessToken = getState().token.accessToken
			if (accessToken) {
			  headers.set('authorization', `Bearer ${accessToken}`)
			}
	  
			return headers
		 },}),

	endpoints: (builder) => ({
		getAllTracks: builder.query({
			query: () => '/catalog/track/all/',
			providesTags: ["Tracks"],
		}),
		getFavoriteTracks: builder.query({
			query: () => 'catalog/track/favorite/all/',
			providesTags: ["Tracks"],
		})
	})
})

export const { useGetAllTracksQuery, useGetFavoriteTracksQuery } = trackApi