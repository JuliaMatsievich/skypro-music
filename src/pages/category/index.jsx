import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants/constants'
import { TrackList } from '../../components/trackList/trackList'
import { useDispatch } from 'react-redux'
import { useGetSelectionQuery } from '../../services/trackApi'
import { HeaderTrackList } from '../../components/headerTrackListAndSearch/headerTrackList'
import { useContext, useState } from 'react'
import { searchMusic } from '../../helpers/searchFunc'
import { UserContext } from '../../App'

export const Category = () => {
  const {logOut} = useContext(UserContext)
  const params = useParams()
  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const id = String(category.id)

  const { data, isLoading, isError } = useGetSelectionQuery(id)

  if (isError) {
    logOut()
  }

  return (
    <>
      <HeaderTrackList title={category.title} setSearch={setSearch} />
      {isLoading ? (
        <p>Данные загружаются....</p>
      ) : (
        <>
          {search && searchMusic(data, search).length === 0 ? (
            <h2>Ничего не найдено</h2>
          ) : (
            <TrackList tracks={search ? searchMusic(data, search) : data} />
          )}
        </>
      )}
    </>
  )
}
