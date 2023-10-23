import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants'
import { TrackList } from '../../components/trackList/trackList'
import { useDispatch, useSelector } from 'react-redux'
import { useGetSelectionQuery } from '../../services/trackApi'
// import { setSelectionPlaylist } from '../../store/trackSlice'
import { useEffect } from 'react'

export const Category = () => {
  const params = useParams()
  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )
  const dispatch = useDispatch()
 
  const id = String(category.id)

  const { data, isLoading, isError } = useGetSelectionQuery(id)

  // useEffect(() => {
  //   dispatch(setSelectionPlaylist(category.title))
  // })

  if (isError) {
    window.location.href='/login'
  }

  return (
    <>
    {isLoading ? 
          <p>Данные загружаются....</p>
          : <TrackList tracks={data} />}
      
    </>
  )
}
