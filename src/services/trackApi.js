import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from './url'

export const trackApi = createApi({
  reducerPath: 'trackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    tagTypes: ['Tracks', 'FavTracks'],
    prepareHeaders: (headers, { getState }) => {
      const accessToken = getState().token.accessToken
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`)
      }

      return headers
    },
  }),

  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
    }),
    getFavoriteTracks: builder.query({
      query: () => 'catalog/track/favorite/all/',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'FavTracks', id })),
              { type: 'FavTracks', id: 'LIST' },
            ]
          : [{ type: 'FavTracks', id: 'LIST' }],
    }),
	 addFavoriteTrack: builder.mutation({
		query: (id) => ({
			url: `/catalog/track/${id}/favorite/`,
			method: 'POST'
		}),
		invalidatesTags: [{ type: 'Tracks', id: 'LIST' }, {type: 'FavTracks', id: 'LIST'}]
	 })
  })
})

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useLazyGetFavoriteTracksQuery,
  useAddFavoriteTrackMutation
} = trackApi
