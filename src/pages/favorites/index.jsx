import { useDispatch, useSelector } from 'react-redux'
import {
  currentPlaylistSelector,
  favoritePlaylistSelector,
  setCurrentPage,
  setFavoritePlaylist,
} from '../../store/trackSlice'
import { useEffect } from 'react'
import { TrackList } from '../../components/trackList/trackList'
import {
  useGetFavoriteTracksQuery,
  useLazyGetFavoriteTracksQuery,
} from '../../services/trackApi'
import { refreshToken } from '../../api/apiUser'
import {
  accessTokenSelector,
  setNewToken,
  setToken,
} from '../../store/tokenSlice'
import { useNavigate } from 'react-router-dom'

export const Favorites = () => {
  const dispatch = useDispatch()
  const refresh = JSON.parse(localStorage.getItem('refresh'))
  const [fetchFavTracks] = useLazyGetFavoriteTracksQuery()
  const { isError, error } = useGetFavoriteTracksQuery()
  const navigate = useNavigate()

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
  }, [refresh])

  if (isError) {
    navigate('/login')
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
