import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { Filter } from '../../components/trackList/filter/filter'
import { HeaderTrackList } from '../../components/trackList/headerTrackList'
import { searchMusic } from '../../helpers/helpFunctions'
import { useDispatch } from 'react-redux'

export const MainPage = () => {
  const { logOut, allTracksError, setAllTracksError } = useContext(UserContext)
  const dispatch = useDispatch()
  const { data, isError, error, isSuccess } = useGetAllTracksQuery()

  // const authors = data?.map((track) => track.author)
  // const uniqAuthors = Array.from(new Set(data?.map((track) => track.author)))

  const [playlist, setPlaylist] = useState(null)

  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
    logOut()
  }

  useEffect(() => {
    setPlaylist(data)
  }, [data])

  const [search, setSearch] = useState('')
  const [filterTracks, setFilterTracks] = useState([])

  useEffect(() => {
    if (!search && !filterTracks) {
      setPlaylist(data)
      console.log('filterTracks in main1', filterTracks)
    }
    if (search) {
      setPlaylist(searchMusic(data, search))
      console.log(searchMusic(data, search))
      console.log('playlist', playlist)
    }
    if (filterTracks) {
      setPlaylist(filterTracks)
      console.log('filterTracks in main', filterTracks)
    }
  }, [search, filterTracks])

  return (
    <>
      <HeaderTrackList title={'Треки'} setSearch={setSearch} />
      <Filter setFilterTracks={setFilterTracks} filterTracks={filterTracks} />

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

