import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const BASEURL = 'https://skypro-music-api.skyeng.tech';

export const trackApi = createApi({
	reducerPath: 'trackApi',
	baseQuery: fetchBaseQuery({baseUrl: BASEURL}),
	endpoints: (builder) => ({
		getAllTracks: builder.query({
			query: () => '/catalog/track/all/'
		})
	})
})

export const { useGetAllTracksQuery } = trackApi