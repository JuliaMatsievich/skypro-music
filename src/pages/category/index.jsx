import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants'
import { TrackList } from '../../components/trackList/trackList'
import { useDispatch } from 'react-redux'
import { useGetSelectionQuery } from '../../services/trackApi'

export const Category = () => {
  const params = useParams()
  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )
  const dispatch = useDispatch()
  const id = String(category.id)
  let categoryTracks =[]
  const { data, isSuccess } = useGetSelectionQuery(id)

  if (isSuccess) {
    categoryTracks = data.items
  }

  return (
    <>
      <TrackList tracks={categoryTracks} />
    </>
  )
}
