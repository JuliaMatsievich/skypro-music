import { useState } from "react"
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation } from "../services/trackApi"
import { useSelector } from "react-redux"


export const useLikeDislike = (track,id) => {
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
		}
	 }, [track])
	
	const handleLike = async (id) => {
		await addFavoriteTrack(id)
		  .unwrap()
		  .catch((error) => {
			console.log('error', error);
			//  windows.location.navigate('/login')
		  })
		setIsLike(true)
	 }
  
	 const handleDisLike = async (id) => {
		await deleteFavoriteTrack(id)
		  .unwrap()
		  .catch((error) => {
			console.log('error', error);

			// windows.location.navigate('/login')
		  })
		setIsLike(false)
	 }

	 if (isLike) {
		handleDisLike(id)
	 } else {
		handleLike(id)
	 }
  
	//  const handleLikeDislkie = (id) => {
	// 	if (isLike) {
	// 	  handleDisLike(id)
	// 	} else {
	// 	  handleLike(id)
	// 	}
	//  }

	 return isLike

}