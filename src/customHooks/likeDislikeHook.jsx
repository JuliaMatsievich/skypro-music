import { useContext, useEffect, useState } from 'react'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../services/trackApi'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentTrackSelector,
  setCurrentTrack} from '../store/trackSlice'
import { UserContext } from '../App'

export const useLikeDislike = (track, index) => {
  const [addFavoriteTrack, {}] = useAddFavoriteTrackMutation()
  const [deleteFavoriteTrack, {}] = useDeleteFavoriteTrackMutation()
  const [isLike, setIsLike] = useState(false)
  const userId = useSelector((state) => state.user.id)
  const dispatch = useDispatch()
  const currentTrack = useSelector(currentTrackSelector)
  const { logOut } = useContext(UserContext)

  useEffect(() => {
    if (track?.stared_user?.find((user) => user.id === userId)) {
      setIsLike(true)
    } else {
      setIsLike(false)
    }
    if (Object.keys(currentTrack).length !== 0 && currentTrack.id === track.id) {
      dispatch(setCurrentTrack({ track, index }))
    }
  }, [track,currentTrack])

  const handleLike = async (id) => {
    await addFavoriteTrack(id)
      .unwrap()
      .then(() => {
        setIsLike(true)
      })
      .catch((error) => {
        logOut()
      })
  }

  const handleDisLike = async (id) => {
    await deleteFavoriteTrack(id)
      .unwrap()
      .then(() => {
        setIsLike(false)
      })
      .catch((error) => {
        console.log('error', error)
        logOut()
      })
  }

  const handleLikeDislike = (id) => {
    if (isLike) {
      handleDisLike(id)
    } else {
      handleLike(id)
    }
  }

  return { isLike, handleLikeDislike }
}
