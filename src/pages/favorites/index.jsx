import { useDispatch } from 'react-redux'
import { setFavoritePlaylist} from '../../store/trackSlice'
import { useEffect } from 'react'
import { TrackList } from '../../components/trackList/trackList'
import { useGetFavoriteTracksQuery } from '../../services/trackApi'

export const Favorites = () => {

  const dispatch = useDispatch()

  const { data,
    isError,
    error } =
   useGetFavoriteTracksQuery()

  useEffect(() => {
    dispatch(setFavoritePlaylist(data))
    if (isError) {
      console.log('error', error.status)
      localStorage.clear('accessToken')
      window.location.href = '/login'
    }
  })


  return (
    <>
      <TrackList tracks={data} />
    </>
  )
}
