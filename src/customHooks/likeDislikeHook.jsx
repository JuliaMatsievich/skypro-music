import { useContext, useEffect, useState } from 'react'
import {
  useAddFavoriteTrackMutation,
  useDeleteFavoriteTrackMutation,
} from '../services/trackApi'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentTrackSelector,
  setCurrentPlaylist,
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
  const currentTrack = useSelector(currentTrackSelector)
  const { logOut } = useContext(UserContext)
  const currentPlaylist = useSelector(
    (state) => state.audioPlayer.currentPlaylist,
  )
  const currentUser = useSelector((state) => state.user)

  useEffect(() => {
    if (track?.stared_user?.find((user) => user.id === userId)) {
      setIsLike(true)
    } else {
      setIsLike(false)
    }
    if (
      Object.keys(currentTrack).length !== 0 &&
      currentTrack?.id === track?.id
    ) {
      dispatch(setCurrentTrack({ track, index }))
      // dispatch(setCurrentPlaylist(currentPlaylist))
      // dispatch(setLike({id: track.id, user: currentUser}))
    }
  }, [track, currentTrack.stared_user])


  // const liked = Boolean(
  //   track.stared_user ? track.stared_user.find(({ id }) => id === userId) : [],
  // )

  // useEffect(() => {
  //   setIsLike(liked)
  // }, [liked, track, currentTrack])

  const handleLike = async (id) => {
    await addFavoriteTrack(id)
      .unwrap()
      .then(() => {
        // setIsLike(true)
        // dispatch(setCurrentTrack({ track, index }))
        // dispatch(setLike({ id: track.id, user: currentUser }))
        // const newCurrenrPlaylist = {...currentPlaylist, currentPlaylist}
        // dispatch(setCurrentPlaylist(currentPlaylist))
      })
      .catch((error) => {
        logOut()
      })
      setIsLike(true)
      // dispatch(setLike({ id: track.id, user: currentUser }))
  }

  const handleDisLike = async (id) => {
    await deleteFavoriteTrack(id)
      .unwrap()
      .then(() => {
      })
      .catch((error) => {
        console.log('error', error)
        logOut()
      })
      setIsLike(false)
      // dispatch(setDislike({ id: track.id, user: currentUser }))
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
