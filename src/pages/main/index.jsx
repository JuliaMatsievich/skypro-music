import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { Filter } from '../../components/trackList/filter/filter'
import { HeaderTrackList } from '../../components/trackList/headerTrackList'

export const MainPage = () => {
  const { allTracksError, setAllTracksError } = useContext(UserContext)

  const { data, isError, error } = useGetAllTracksQuery()

  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
  }

  return (
    <>
    <HeaderTrackList title={'Треки'}/>
      <Filter />
      {allTracksError ? (
        <ErrorMessage allTracksError={allTracksError} />
      ) : (
        <TrackList tracks={data} />
      )}
    </>
  )
}
