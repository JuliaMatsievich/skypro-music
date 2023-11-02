
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

/*
genre = ['классика','рок']
authors = []
нужно выбрать авторов  только классики и рока, не должно включать других жанров

есть массив треков filtertracks [{},{},{}]

нажимаем на автора и нужно проверить есть ли он среди этих треков
и оставить только его




*/