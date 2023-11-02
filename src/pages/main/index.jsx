import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { Filter } from '../../components/filter/filter'
import { HeaderTrackList } from '../../components/headerTrackListAndSearch/headerTrackList'
import { filterAuthor,filterGenre} from '../../helpers/filterFunc'
import { searchMusic } from '../../helpers/searchFunc'
import { useDispatch } from 'react-redux'

export const MainPage = () => {
  const { logOut, allTracksError, setAllTracksError } = useContext(UserContext)
  const dispatch = useDispatch()
  const { data, isError, error } = useGetAllTracksQuery()

  const [playlist, setPlaylist] = useState(null)
  const [authorFilter, setAuthorFilter] = useState([])
  const [genreFilter, setGenreFilter] = useState([])
  const [search, setSearch] = useState('')
  const [filterTracks, setFilterTracks] = useState([])

  const handleChangeFilter = (type, value) => {
    if (type === 'author') {
      if (genreFilter.length === 0) {
        if (authorFilter.includes(value)) {
          setFilterTracks(filterTracks.filter(({ author }) => author !== value))
          setAuthorFilter(authorFilter.filter((item) => item !== value))
        } else {
          setFilterTracks([...filterTracks, ...filterAuthor(data, value)])
          setAuthorFilter([...authorFilter, value])
        }
      }

      if (genreFilter.length !== 0) {
        if (authorFilter.includes(value)) {
          setFilterTracks(filterTracks.filter(({ author }) => author !== value))
          setAuthorFilter(authorFilter.filter((item) => item !== value))
          if(authorFilter.length === 1) {
            setFilterTracks(data.filter((track) => genreFilter.indexOf(track.genre) > -1))
          }
        }
        if (authorFilter.length === 0) {
          setFilterTracks(filterAuthor(filterTracks, value))
          setAuthorFilter([...authorFilter, value])
        }
        if (authorFilter.length !== 0 && !authorFilter.includes(value)) {
          setFilterTracks([
            ...filterTracks,
            ...filterAuthor(
              data.filter((track) => genreFilter.indexOf(track.genre) > -1),
              value,
            ),
          ])
          setAuthorFilter([...authorFilter, value])
        }
      }
    } else if (type === 'genre') {
      if (authorFilter.length === 0) {
        if (genreFilter.includes(value)) {
          setFilterTracks(filterTracks.filter(({ genre }) => genre !== value))
          setGenreFilter(genreFilter.filter((item) => item !== value))
        } else {
          setFilterTracks([...filterTracks, ...filterGenre(data, value)])
          setGenreFilter([...genreFilter, value])
        }
      }

      if(authorFilter.length !== 0) {
        if (genreFilter.includes(value)) {
          setFilterTracks(filterTracks.filter(({ genre }) => genre !== value))
          setGenreFilter(genreFilter.filter((item) => item !== value))
          if(genreFilter.length === 1) {
            setFilterTracks(data.filter((track) => authorFilter.indexOf(track.author) > -1))
          }
        }
        if (genreFilter.length === 0) {
          setFilterTracks(filterGenre(filterTracks, value))
          setGenreFilter([...genreFilter, value])
        }
        if (genreFilter.length !== 0 && !genreFilter.includes(value)) {
          setFilterTracks([
            ...filterTracks,
            ...filterGenre(
              data.filter((track) => authorFilter.indexOf(track.author) > -1),
              value,
            ),
          ])
          setGenreFilter([...genreFilter, value])
        }
      }
    }
  }


  console.log('filterTracks', filterTracks)
  console.log('authorFilter', authorFilter)
  console.log('genreFilter', genreFilter)

  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
    logOut()
  }

  useEffect(() => {
    setPlaylist(data)
  }, [data])

  useEffect(() => {
    if (filterTracks) {
      setPlaylist(filterTracks)
    }
    if (search) {
      setPlaylist(searchMusic(data, search))
    }
    if (!search && filterTracks.length === 0) {
      setPlaylist(data)
    }
    if (search && filterTracks) {
      setPlaylist(searchMusic(filterTracks, search))
    }
  }, [search, filterTracks])

  return (
    <>
      <HeaderTrackList title={'Треки'} setSearch={setSearch} />
      <Filter handleChange={handleChangeFilter} />

      {allTracksError ? (
        <ErrorMessage allTracksError={allTracksError} />
      ) : (
        <>
          {search &&
          searchMusic(data, search).length === 0 &&
          searchMusic(filterTracks, search).length === 0 ? (
            <h2>Ничего не найдено</h2>
          ) : (
            <TrackList tracks={playlist} />
          )}
        </>
      )}
    </>
  )
}
