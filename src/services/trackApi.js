import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASEURL } from '../constants/url'
import { baseQueryWithReauth } from './custom'

const user = JSON.parse(localStorage.getItem('user'))

export const trackApi = createApi({
  reducerPath: 'trackApi',
  // baseQuery: fetchBaseQuery({
  //   baseUrl: BASEURL,
  //   tagTypes: ['Tracks'],
  //   prepareHeaders: (headers, { getState }) => {
  //     const accessToken = getState().token.accessToken
  //     if (accessToken) {
  //       headers.set('authorization', `Bearer ${accessToken}`)
  //     }
  //     return headers
  //   },
  // }),
  baseQuery: baseQueryWithReauth,

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
              ...result.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
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
      invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
    }),

    deleteFavoriteTrack: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
    }),

    getSelection: builder.query({
      query: (id) => ({
        url: `/catalog/selection/${id}/`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result?.map(({ id }) => ({ type: 'Tracks', id })),
              { type: 'Tracks', id: 'LIST' },
            ]
          : [{ type: 'Tracks', id: 'LIST' }],
      transformResponse: (response) => response.items,
    }),

    //userApi
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

    logIn: builder.mutation({
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

export const {
  useGetAllTracksQuery,
  useGetFavoriteTracksQuery,
  useLazyGetFavoriteTracksQuery,
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
  useGetSelectionQuery,
  useLogInMutation,
  useGetTokenMutation,
  useSignUpMutation,
  useRefreshTokenMutation
} = trackApi
