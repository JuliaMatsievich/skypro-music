
export const filterAuthor = (tracks, value) => {
  return tracks.filter(({ author }) =>  author === value)
}

export const filterGenre = (tracks, value) => {
  return tracks.filter(({ genre }) =>  genre === value)
}
