import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useMemo, useState } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { Filter } from '../../components/filter/filter'
import { HeaderTrackList } from '../../components/headerTrackListAndSearch/headerTrackList'
import { searchMusic } from '../../helpers/searchFunc'
import { sortTracks } from '../../helpers/sortFunc'

export const MainPage = () => {
  const { logOut, allTracksError, setAllTracksError } = useContext(UserContext)
  const { data, isError, error } = useGetAllTracksQuery()

  const [playlist, setPlaylist] = useState([])
  const [authorFilter, setAuthorFilter] = useState([])
  const [genreFilter, setGenreFilter] = useState([])
  const [search, setSearch] = useState('')
  const [defaultPlaylist, setDefaultPlaylist] = useState([])

  const handleChangeFilter = (type, value) => {
    if (type === 'author') {
      if (authorFilter.includes(value)) {
        setAuthorFilter(authorFilter.filter((item) => item !== value))
      } else {
        setAuthorFilter([...authorFilter, value])
      }
    }
    if (type === 'genre') {
      if (genreFilter.includes(value)) {
        setGenreFilter(genreFilter.filter((item) => item !== value))
      } else {
        setGenreFilter([...genreFilter, value])
      }
    }
  }

  const handleSort = (value) => {
    if (value !== 'По умолчанию') {
      setPlaylist(sortTracks(playlist, value))
    } else if (value === 'По умолчанию') {
      setPlaylist(defaultPlaylist)
    }
  }

  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
    logOut()
  }

  useEffect(() => {
    if (!search) {
      if (authorFilter.length !== 0 && genreFilter.length === 0) {
        setPlaylist(data.filter(({ author }) => authorFilter.includes(author)))
        setDefaultPlaylist(
          data.filter(({ author }) => authorFilter.includes(author)),
        )
      } else if (authorFilter.length !== 0 && genreFilter.length !== 0) {
        setPlaylist(
          data.filter(({ author, genre }) => {
            return genreFilter.includes(genre) && authorFilter.includes(author)
          }),
        )
      } else if (genreFilter.length !== 0 && authorFilter.length === 0) {
        setPlaylist(data.filter(({ genre }) => genreFilter.includes(genre)))
        setDefaultPlaylist(
          data.filter(({ genre }) => genreFilter.includes(genre)),
        )
      } else {
        setPlaylist(data)
        setDefaultPlaylist(data)
      }
    } else if (search) {
      if (authorFilter.length !== 0 && genreFilter.length === 0) {
        setPlaylist(
          searchMusic(
            data.filter(({ author }) => authorFilter.includes(author)),
            search,
          ),
        )
        setDefaultPlaylist(
          searchMusic(
            data.filter(({ author }) => authorFilter.includes(author)),
            search,
          ),
        )
      } else if (authorFilter.length !== 0 && genreFilter.length !== 0) {
        setPlaylist(
          searchMusic(
            data.filter(({ author, genre }) => {
              return (
                genreFilter.includes(genre) && authorFilter.includes(author)
              )
            }),
            search,
          ),
        )
      } else if (genreFilter.length !== 0 && authorFilter.length === 0) {
        setPlaylist(
          searchMusic(
            data.filter(({ genre }) => genreFilter.includes(genre)),
            search,
          ),
        )
        setDefaultPlaylist(
          searchMusic(
            data.filter(({ genre }) => genreFilter.includes(genre)),
            search,
          ),
        )
      } else {
        setPlaylist(searchMusic(data, search))
        setDefaultPlaylist(searchMusic(data, search))
      }
    }
  }, [search, authorFilter, genreFilter, data])

  return (
    <>
      <HeaderTrackList title={'Треки'} setSearch={setSearch} />
      <Filter handleChange={handleChangeFilter} handleSort={handleSort} />

      {allTracksError ? (
        <ErrorMessage allTracksError={allTracksError} />
      ) : (
        <>
          {search && searchMusic(data, search).length === 0 ? (
            <h2>Ничего не найдено</h2>
          ) : (
            <TrackList tracks={playlist} />
          )}
        </>
      )}
    </>
  )
}
