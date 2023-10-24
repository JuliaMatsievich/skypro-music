import { filterAuthor } from '../../../helpFunctions'
import { useGetAllTracksQuery } from '../../../services/trackApi'
import * as S from './filterCategory.styles'

export const FilterCategoryAuthor = ({setFilterTracks}) => {
  const { data } = useGetAllTracksQuery()

  const authors = data.map(track => track.author)
  const uniqAuthors = Array.from(new Set(authors))

  const handleClick = (author) => {
    console.log('author', author);
    const f = filterAuthor(data, author)
    setFilterTracks(f);
  }
  return (
    <S.FilterCategory>
      <S.FilterWrapper>
        <S.FilterList>
          {uniqAuthors.map((author,index) => {
            return <S.FilterItem key={index} onClick={() => handleClick(author)}>{author}</S.FilterItem>
          })}
        </S.FilterList>
      </S.FilterWrapper>
    </S.FilterCategory>
  )
}
