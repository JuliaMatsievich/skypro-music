export const searchMusic = (tracks, searchValue) => {
	const filterTracks = tracks.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase()),
  )
  return filterTracks
}
