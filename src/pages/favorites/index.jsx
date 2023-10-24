import { useDispatch, useSelector } from 'react-redux'
import {
  currentPlaylistSelector,
  favoritePlaylistSelector,
  setFavoritePlaylist,
} from '../../store/trackSlice'
import { useEffect, useState } from 'react'
import { TrackList } from '../../components/trackList/trackList'
import { useLazyGetFavoriteTracksQuery, useRefreshTokenMutation } from '../../services/trackApi'
import { refreshToken } from '../../api/apiUser'
import { setToken } from '../../store/tokenSlice'
import { HeaderTrackList } from '../../components/trackList/headerTrackList'
import { searchMusic } from '../../helpFunctions'

export const Favorites = () => {
  const dispatch = useDispatch()
  const refresh = JSON.parse(localStorage.getItem('refresh'))
  const [fetchFavTracks, { data, isError, error }] =
    useLazyGetFavoriteTracksQuery()
  const [refreshTokenApi, {}] = useRefreshTokenMutation()

  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.removeItem('access')
    refreshToken(refresh).then((data) => {
      dispatch(setToken({ access: data.access }))
      localStorage.getItem('access', JSON.stringify(data.access))
    })
    fetchFavTracks()
      .unwrap()
      .then((data) => {
        dispatch(setFavoritePlaylist(data))
      })
      .catch((error) => window.location.href = '/login')
  }, [refresh, data])

  if (isError) {
    window.location.href = '/login'
  }

  const favTracks = useSelector(favoritePlaylistSelector)

  return (
    <>
      <HeaderTrackList title={'Мои треки'} setSearch={setSearch}/>
      {search && (searchMusic(data, search).length === 0) 
          ? <h2>Ничего не найдено</h2>
          : <TrackList tracks={search ? searchMusic(data, search) : favTracks} />}
    </>
  )
}
