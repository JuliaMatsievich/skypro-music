export const sortTracks = (tracks, type) => {
	let sortPlaylist = []
	if (type === 'Сначала новые') {
		sortPlaylist = [...tracks]?.sort((a,b) => {
			// if(!a.release_date) {
			// 	a.release_date = new Date()
			//  }
			let dateA = new Date(a.release_date);
			let dateB = new Date(b.release_date);
			return dateB - dateA;
		 })
	}
	if (type === 'Сначала старые') {
		sortPlaylist = [...tracks]?.sort((a,b) => {
			// if(!a.release_date) {
			// 	a.release_date = new Date()
			//  }
			let dateA = new Date(a.release_date);
			let dateB = new Date(b.release_date);
			return dateA - dateB;
		 })
	}
	return sortPlaylist
}