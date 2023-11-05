import { useContext, useEffect, useState } from 'react'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../services/trackApi'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentTrackSelector,
  setCurrentTrack,
  setDislike,
  setLike,
} from '../store/trackSlice'
import { UserContext } from '../App'

export const useLikeDislike = (track, index) => {
  const [addFavoriteTrack, {}] = useAddFavoriteTrackMutation()
  const [deleteFavoriteTrack, {}] = useDeleteFavoriteTrackMutation()
  const [isLike, setIsLike] = useState(false)
  const userId = useSelector((state) => state.user.id)
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user)
  const currentTrack = useSelector(currentTrackSelector)
  const { logOut } = useContext(UserContext)

  useEffect(() => {
    if (track?.stared_user?.find((user) => user.id === userId)) {
      setIsLike(true)
      if (Object.keys(currentTrack).length !== 0) {
        dispatch(setLike({ trackId: track.id, currentUser: currentUser }))
      }
    } else {
      setIsLike(false)
    }
     dispatch(setCurrentTrack({ track, index }))
  }, [track])

  const handleLike = async (id) => {
    await addFavoriteTrack(id)
      .unwrap()
      .then(() => {
        // if (Object.keys(currentTrack).length !== 0) {
        //   dispatch(setLike({ trackId: track.id, currentUser: currentUser }))
        // }
        // dispatch(setCurrentTrack({ track, index }))

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
        // if (Object.keys(currentTrack).length !== 0) {
        //   dispatch(setDislike({ trackId: track.id, currentUser: currentUser }))
        // }
        // dispatch(setCurrentTrack({ track, index }))

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
