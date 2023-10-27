import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useDispatch } from 'react-redux'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { setAllTracks, setCurrentPage } from '../../store/trackSlice'
import { Filter } from '../../components/trackList/filter/filter'

export const MainPage = () => {
  const { allTracksError, setAllTracksError } = useContext(UserContext)

  const dispatch = useDispatch()

  const { data, isError, error } = useGetAllTracksQuery()

  useEffect(() => {
    dispatch(setAllTracks(data))
    dispatch(setCurrentPage('Main'))
  })

  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
  }

  return (
    <>
      <Filter />
      {allTracksError ? (
        <ErrorMessage allTracksError={allTracksError} />
      ) : (
        <TrackList tracks={data} />
      )}
    </>
  )
}
