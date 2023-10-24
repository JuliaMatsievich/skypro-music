import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { Filter } from '../../components/trackList/filter/filter'
import { HeaderTrackList } from '../../components/trackList/headerTrackList'
import { searchMusic } from '../../helpFunctions'

export const MainPage = () => {
  const { allTracksError, setAllTracksError } = useContext(UserContext)

  const { data, isError, error } = useGetAllTracksQuery()

  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
  }

  const [search, setSearch] = useState('')

  return (
    <>
      <HeaderTrackList title={'Треки'} setSearch={setSearch} />
      <Filter />

      {allTracksError ? (
        <ErrorMessage allTracksError={allTracksError} />
      ) : (
        <>{search && (searchMusic(data, search).length === 0) 
          ? <h2>Ничего не найдено</h2>
          : <TrackList tracks={search ? searchMusic(data, search) : data} />}</>
      )}
    </>
  )
}
