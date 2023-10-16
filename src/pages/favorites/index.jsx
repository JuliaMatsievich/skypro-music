import { useDispatch, useSelector } from 'react-redux'
import {
  currentPlaylistSelector,
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

export const Favorites = () => {
  const dispatch = useDispatch()
  const refresh = JSON.parse(localStorage.getItem('refresh'))
  const [fetchFavTracks] = useLazyGetFavoriteTracksQuery()

  useEffect(() => {
    // localStorage.removeItem('access')
    refreshToken(refresh).then((data) => {
      dispatch(setToken({access: data.access}))
      // localStorage.getItem('access', JSON.stringify(data.access))
    })
    fetchFavTracks()
      .unwrap()
      .then((data) => {
        dispatch(setFavoritePlaylist(data))
      })
      .catch((error) => console.log(error))
  },[refresh])


  const favTracks = useSelector(currentPlaylistSelector)

  return (
    <>
      <TrackList tracks={favTracks} />
    </>
  )
}
