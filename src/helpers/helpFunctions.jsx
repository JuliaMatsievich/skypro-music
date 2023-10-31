export const getTimeInMinutes = (seconds) => {
  const timeInMinutes = (Number(seconds) / 60).toFixed(2)
  return timeInMinutes
}

export const sortArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const searchMusic = (tracks, searchValue) => {
	const filterTracks = tracks.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase()),
  )
  return filterTracks
}

export const filters = (tracks, type, value) => {
  let filterTracks =[]
  if(type === 'author') {
   filterTracks = tracks.filter(({ author }) =>  author === value)
  }
  if(type === 'genre') {
   filterTracks = tracks.filter(({ genre }) =>  genre === value)
  }
	return filterTracks
}

export const filterAuthor = (tracks, value) => {
  return tracks.filter(({ author }) =>  author === value)
}

export const filterGenre = (tracks, value) => {
  return tracks.filter(({ genre }) =>  genre === value)
}