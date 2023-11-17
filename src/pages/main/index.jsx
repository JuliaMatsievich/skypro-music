import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { Filter } from '../../components/filter/filter'
import { HeaderTrackList } from '../../components/headerTrackListAndSearch/headerTrackList'
import { filterAuthor, filterGenre } from '../../helpers/filterFunc'
import { searchMusic } from '../../helpers/searchFunc'
import { sortTracks } from '../../helpers/sortFunc'
import { currentTrackSelector, setFilterTracks, setPlaylist } from '../../store/trackSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLikeDislike } from '../../customHooks/likeDislikeHook'

export const MainPage = () => {
  const { logOut, allTracksError, setAllTracksError } = useContext(UserContext)
  const { data, isError, error } = useGetAllTracksQuery()

  // const [playlist, setPlaylist] = useState([])
  const [authorFilter, setAuthorFilter] = useState([])
  const [genreFilter, setGenreFilter] = useState([])
  const [search, setSearch] = useState('')
  // const [filterTracks, setFilterTracks] = useState([])
  const filterTracks = useSelector((state) => state.audioPlayer.filterTracks)
  const [defaultPlaylist, setDefaultPlaylist] = useState([])
  const currentPlaylist = useSelector(
    (state) => state.audioPlayer.currentPlaylist,
  )
  const playlist = useSelector((state) => state.audioPlayer.playlist)
  const filters = useSelector((state) => state.audioPlayer.filters)

  const dispatch = useDispatch()

  const handleChangeFilter = (type, value) => {
    if (type === 'author') {
      if (genreFilter.length === 0) {
        if (authorFilter.includes(value)) {
          dispatch(setFilterTracks(filterTracks.filter(({ author }) => author !== value)))
          setAuthorFilter(authorFilter.filter((item) => item !== value))
        } else {
          dispatch(setFilterTracks([...filterTracks, ...filterAuthor(data, value)]))
          setAuthorFilter([...authorFilter, value])
        }
      }

      if (genreFilter.length !== 0) {
        if (authorFilter.includes(value)) {
          dispatch(setFilterTracks(filterTracks.filter(({ author }) => author !== value)))
          setAuthorFilter(authorFilter.filter((item) => item !== value))
          if (authorFilter.length === 1) {
            dispatch(setFilterTracks(
              data.filter((track) => genreFilter.indexOf(track.genre) > -1),
            ))
          }
        }
        if (authorFilter.length === 0) {
          dispatch(setFilterTracks(filterAuthor(filterTracks, value)))
          setAuthorFilter([...authorFilter, value])
        }
        if (authorFilter.length !== 0 && !authorFilter.includes(value)) {
          dispatch(setFilterTracks([
            ...filterTracks,
            ...filterAuthor(
              data.filter((track) => genreFilter.indexOf(track.genre) > -1),
              value,
            ),
          ]))
          setAuthorFilter([...authorFilter, value])
        }
      }
    } else if (type === 'genre') {
      if (authorFilter.length === 0) {
        if (genreFilter.includes(value)) {
          dispatch(setFilterTracks(filterTracks.filter(({ genre }) => genre !== value)))
          setGenreFilter(genreFilter.filter((item) => item !== value))
        } else {
          dispatch(setFilterTracks([...filterTracks, ...filterGenre(data, value)]))
          setGenreFilter([...genreFilter, value])
        }
      }

      if (authorFilter.length !== 0) {
        if (genreFilter.includes(value)) {
          dispatch(setFilterTracks(filterTracks.filter(({ genre }) => genre !== value)))
          setGenreFilter(genreFilter.filter((item) => item !== value))
          if (genreFilter.length === 1) {
            dispatch(setFilterTracks(
              data.filter((track) => authorFilter.indexOf(track.author) > -1),
            ))
          }
        }
        if (genreFilter.length === 0) {
          dispatch(setFilterTracks(filterGenre(filterTracks, value)))
          setGenreFilter([...genreFilter, value])
        }
        if (genreFilter.length !== 0 && !genreFilter.includes(value)) {
          dispatch(setFilterTracks([
            ...filterTracks,
            ...filterGenre(
              data.filter((track) => authorFilter.indexOf(track.author) > -1),
              value,
            ),
          ]))
          setGenreFilter([...genreFilter, value])
        }
      }
    }
  }

  const handleSort = (value) => {
    if (value !== 'По умолчанию') {
      dispatch(setPlaylist(sortTracks(playlist, value)))
    } else if (value === 'По умолчанию') {
      dispatch(setPlaylist(defaultPlaylist))
    }
  }

 
  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
    logOut()
  }
  useEffect(() => {
    if (filterTracks.length !== 0 && !search) {
      dispatch(setPlaylist(filterTracks))
      setDefaultPlaylist(filterTracks)
      console.log('filters',filters);
    } else if (!search && filterTracks.length === 0) {
      dispatch(setPlaylist(data))
      setDefaultPlaylist(data)
    } else if (search && filterTracks.length !== 0) {
      dispatch(setPlaylist(searchMusic(filterTracks, search)))
      setDefaultPlaylist(searchMusic(filterTracks, search))
    } else if (search && filterTracks.length === 0) {
      dispatch(setPlaylist(searchMusic(data, search)))
      setDefaultPlaylist(searchMusic(data, search))
    } else {
      dispatch(setPlaylist(data))
    }
  }, [search, filterTracks, data])

  useEffect(() => {
    if (filterTracks.length !== 0) {
      handleChangeFilter(filters.type,filters.value)
    }
    setDefaultPlaylist(data)
  }, [data])

  return (
    <>
      <HeaderTrackList title={'Треки'} setSearch={setSearch} />
      <Filter handleChange={handleChangeFilter} handleSort={handleSort} />

      {allTracksError ? (
        <ErrorMessage allTracksError={allTracksError} />
      ) : (
        <>
          {search &&
          searchMusic(data, search).length === 0 &&
          searchMusic(filterTracks, search).length === 0 ? (
            <h2>Ничего не найдено</h2>
          ) : (
            <TrackList />
          )}
        </>
      )}
    </>
  )
}
