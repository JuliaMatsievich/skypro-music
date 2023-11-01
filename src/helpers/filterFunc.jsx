
export const searchMusic = (tracks, searchValue) => {
	const filterTracks = tracks.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase()),
  )
  return filterTracks
}

export const filterAuthor = (tracks, value) => {
  return tracks.filter(({ author }) =>  author === value)
}

export const filterGenre = (tracks, value) => {
  return tracks.filter(({ genre }) =>  genre === value)
}

