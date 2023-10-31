import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { Filter } from '../../components/trackList/filter/filter'
import { HeaderTrackList } from '../../components/trackList/headerTrackList'
import {
  filterAuthor,
  filterGenre,
  searchMusic,
} from '../../helpers/helpFunctions'
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
      // setAuthorFilter([...authorFilter, value])
      console.log('authorFilter', authorFilter)
      if (authorFilter.includes(value)) {
        setFilterTracks(filterTracks.filter(({ author }) => author !== value))
        setAuthorFilter(authorFilter.filter((item) => item !== value))
      } else {
        setFilterTracks([...filterTracks, ...filterAuthor(data, value)])
        setAuthorFilter([...authorFilter, value])
      }
    } else if (type === 'genre') {
      // setGenreFilter([...genreFilter, value])
      if (genreFilter.includes(value)) {
        setFilterTracks(filterTracks.filter(({ genre }) => genre !== value))
        setGenreFilter(genreFilter.filter((item) => item !== value))
      } else {
        setFilterTracks([...filterTracks, ...filterGenre(data, value)])
        setGenreFilter([...genreFilter, value])
      }
      console.log('genreFilter', genreFilter);
    }
  }

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
    console.log('playlist', playlist)
  }, [search, filterTracks])

  return (
    <>
      <HeaderTrackList title={'Треки'} setSearch={setSearch} />
      <Filter handleChange={handleChangeFilter} />

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
