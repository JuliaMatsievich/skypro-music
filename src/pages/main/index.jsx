import { TrackList } from '../../components/trackList/trackList'
import { ErrorMessage } from '../../components/errors/error'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useDispatch } from 'react-redux'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { setAllTracks } from '../../store/trackSlice'

export const MainPage = () => {
  const { allTracksError, setAllTracksError } = useContext(UserContext)

  const dispatch = useDispatch()

  const {
    data,
    isError,
    error,
  } = useGetAllTracksQuery()


  useEffect(() => {
    dispatch(setAllTracks(data))
  })

  if (isError) {
    setAllTracksError(
      'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
    )
  }

  return (
    <>
      {allTracksError ? (
        <ErrorMessage allTracksError={allTracksError} />
      ) : (
        <TrackList tracks={data}/>
      )}
    </>
  )
}
