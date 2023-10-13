import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants'
import { WrapperPages } from '../../components/Layout/Layout'

export const Category = () => {
  const params = useParams()
  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )

  return <h1>{category.title}</h1>
}
