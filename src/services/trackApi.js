import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from './url'

const user = JSON.parse(localStorage.getItem('user'))

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
      transformResponse: (response) => {
        const tracks = response.map((track) => {
          return { ...track, stared_user: [user] }
        })
        return tracks
      },
    }),

    addFavoriteTrack: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: [
        { type: 'FavTracks', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
    }),

    deleteFavoriteTrack: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [
        { type: 'FavTracks', id: 'LIST' },
        { type: 'Tracks', id: 'LIST' },
      ],
    }),

    getSelection: builder.query({
      query: (id) => ({
        url: `/catalog/selection/${id}/`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
      transformResponse: (response) => response.items,
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useLazyGetFavoriteTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
  useGetSelectionQuery,
} = trackApi
