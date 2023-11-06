import { useDispatch, useSelector } from 'react-redux'
import {
  currentPlaylistSelector,
  favoritePlaylistSelector,
  setFavoritePlaylist,
} from '../../store/trackSlice'
import { useContext, useEffect, useState } from 'react'
import { TrackList } from '../../components/trackList/trackList'
import {
  useLazyGetFavoriteTracksQuery,
  useRefreshTokenMutation,
} from '../../services/trackApi'
import { setToken } from '../../store/tokenSlice'
import { HeaderTrackList } from '../../components/headerTrackListAndSearch/headerTrackList'
import { searchMusic } from '../../helpers/searchFunc'
import { UserContext } from '../../App'

export const Favorites = () => {
  const dispatch = useDispatch()
  const refresh = JSON.parse(localStorage.getItem('refresh'))
  const {logOut} = useContext(UserContext)
  const [fetchFavTracks, { data, isError, error }] =
    useLazyGetFavoriteTracksQuery()
  const [refreshTokenApi, {}] = useRefreshTokenMutation()

  const [search, setSearch] = useState('')

  useEffect(() => {
    try {
      fetchFavTracks()
        .unwrap()
        .then((data) => {
          dispatch(setFavoritePlaylist(data))
        })
    } catch (error) {
      refreshTokenApi({ refresh })
        .unwrap()
        .then((data) => {
          dispatch(setToken({ accessToken: data.access }))
          localStorage.getItem('access', JSON.stringify(data.access))
          fetchFavTracks()
            .unwrap()
            .then((data) => {
              dispatch(setFavoritePlaylist(data))
            })
        })
      if (error.status === 401) {
        logOut()
      }
    }
  }, [refresh, data, error])

  const favTracks = useSelector(favoritePlaylistSelector)

  return (
    <>
      <HeaderTrackList title={'Мои треки'} setSearch={setSearch} />
      {search && searchMusic(data, search).length === 0 ? (
        <h2>Ничего не найдено</h2>
      ) : (
        <TrackList tracks={search ? searchMusic(data, search) : favTracks} />
      )}
    </>
  )
}
