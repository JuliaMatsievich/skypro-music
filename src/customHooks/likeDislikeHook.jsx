import { useEffect, useState } from "react"
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation } from "../services/trackApi"
import { useSelector } from "react-redux"


export const useLikeDislike = (track, id) => {
	const [addFavoriteTrack, {}] = useAddFavoriteTrackMutation()
	const [deleteFavoriteTrack, {}] = useDeleteFavoriteTrackMutation()
	const [isLike, setIsLike] = useState(false)
	const userId = useSelector((state) => state.user.id)


	useEffect(() => {
		if (
		  track.stared_user &&
		  track.stared_user.find((user) => user.id === userId)
		) {
		  setIsLike(true)
		} else {
			setIsLike(false)
		}
	 }, [track])
	
	const handleLike = async (id) => {
		await addFavoriteTrack(id)
		  .unwrap()
		  .catch((error) => {
			console.log('error', error);
			 window.location.navigate('/login')
		  })
		setIsLike(true)
	 }
  
	 const handleDisLike = async (id) => {
		await deleteFavoriteTrack(id)
		  .unwrap()
		  .catch((error) => {
			console.log('error', error);
			window.location.navigate('/login')
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

	 return {isLike, handleLikeDislike}
}