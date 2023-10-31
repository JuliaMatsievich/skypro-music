import { useState } from 'react'
import { filterAuthor } from '../../../helpers/helpFunctions'
import { useGetAllTracksQuery } from '../../../services/trackApi'
import * as S from './filterCategory.styles'

export const FilterCategoryAuthor = ({ setFilterTracks }) => {
  const { data } = useGetAllTracksQuery()
  const [isActive, setIsActive] = useState(false)

  const authors = Array.from(new Set(data?.map((track) => track.author)))

  const handleActiveFilter = (author) => {
    setFilterTracks(filterAuthor(data, author))
    setIsActive(true)
  }

  const handleDeactiveFilter = () => {
    setFilterTracks(data)
    setIsActive(false)
  }

  const toggleFilter = (author) => {
    if (isActive) {
      handleDeactiveFilter()
    } else {
      handleActiveFilter(author)
    }
  }

  return (
    <S.FilterCategory>
      <S.FilterWrapper>
        <S.FilterList>
          {authors.map((author, index) => {
            return (
              <S.FilterItem
                isActive={false}
                key={index}
                onClick={() => toggleFilter(author)}
              >
                {author}
              </S.FilterItem>
            )
          })}
        </S.FilterList>
      </S.FilterWrapper>
    </S.FilterCategory>
  )
}
