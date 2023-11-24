import { useContext, useEffect, useState } from 'react'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../services/trackApi'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPlaylist,
  setDislike,
  setLike,
} from '../store/trackSlice'
import { UserContext } from '../App'

export const useLikeDislike = (track, index, trackList) => {
  const [addFavoriteTrack, {}] = useAddFavoriteTrackMutation()
  const [deleteFavoriteTrack, {}] = useDeleteFavoriteTrackMutation()
  const [isLike, setIsLike] = useState(false)
  const userId = useSelector((state) => state.user.id)
  const dispatch = useDispatch()
  const { logOut } = useContext(UserContext)
  const currentUser = useSelector((state) => state.user)

  useEffect(() => {
    if (track?.stared_user?.find((user) => user.id === userId)) {
      setIsLike(true)
    } else {
      setIsLike(false)
    }
  }, [track])

  const handleLike = async (id) => {
    await addFavoriteTrack(id)
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.log('error', error)
        // logOut()
      })
    setIsLike(true)
    dispatch(setLike({ id: track.id, user: currentUser }))
    dispatch(setCurrentPlaylist(trackList))
  }

  const handleDisLike = async (id) => {
    await deleteFavoriteTrack(id)
      .unwrap()
      .then(() => {})
      .catch((error) => {
        console.log('error', error)
        // logOut()
      })
    setIsLike(false)
    dispatch(setDislike({ id: track.id, user: currentUser }))
    dispatch(setCurrentPlaylist(trackList))
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
