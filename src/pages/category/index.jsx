import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../constants'
import { WrapperPages } from '../../components/wrapperPages/wrapperPages'

export const Category = () => {
  const params = useParams()
  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id),
  )

  return (
    <WrapperPages>
      <h1>{category.title}</h1>
    </WrapperPages>
  )
}
