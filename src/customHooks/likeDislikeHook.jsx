import { useContext, useEffect, useState } from 'react'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../services/trackApi'
import { useDispatch, useSelector } from 'react-redux'
import { currentTrackSelector, setDislike, setLike } from '../store/trackSlice'
import { UserContext } from '../App'

export const useLikeDislike = ({track}) => {
  const [addFavoriteTrack, {}] = useAddFavoriteTrackMutation()
  const [deleteFavoriteTrack, {}] = useDeleteFavoriteTrackMutation()
  const [isLike, setIsLike] = useState(false)
  const userId = useSelector((state) => state.user.id)
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user)
//   const currentTrack = useSelector(currentTrackSelector)
  const { logOut } = useContext(UserContext)

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
      .catch((error) => {
        logOut()
      })
    setIsLike(true)
  }

  const handleDisLike = async (id) => {
    await deleteFavoriteTrack(id)
      .unwrap()
      .catch((error) => {
        console.log('error', error)
        logOut()
      })
    setIsLike(false)
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
