import { useDispatch, useSelector } from 'react-redux'
import {
  favoritePlaylistSelector,
  setCurrentPage,
  setFavoritePlaylist,
} from '../../store/trackSlice'
import { useEffect } from 'react'
import { TrackList } from '../../components/trackList/trackList'
import { useLazyGetFavoriteTracksQuery} from '../../services/trackApi'
import { refreshToken } from '../../api/apiUser'
import { setToken } from '../../store/tokenSlice'


export const Favorites = () => {
  const dispatch = useDispatch()
  const refresh = JSON.parse(localStorage.getItem('refresh'))
  const [fetchFavTracks, {data, isError, refetch}] = useLazyGetFavoriteTracksQuery()

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
      .catch((error) => console.log(error))
  }, [refresh, data])

  if (isError) {
    window.location.href = '/login'
  }

  const favTracks = useSelector(favoritePlaylistSelector)

  useEffect(() => {
    dispatch(setCurrentPage('Favorite'))
  }, [])

  return (
    <>
      <TrackList tracks={favTracks} />
    </>
  )
}
