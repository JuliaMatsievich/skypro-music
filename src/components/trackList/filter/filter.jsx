import { useState } from 'react'
import * as S from './filter.styles'
import { useGetAllTracksQuery } from '../../../services/trackApi'

export const Filter = ({ handleChange}) => {
  const { data } = useGetAllTracksQuery()

  const [isActiveItem, setIsActiveItem] = useState('')
  const [activeFilter, setActiveFilter] = useState('')

  const authors = Array.from(new Set(data?.map((track) => track.author)))
  const genres = Array.from(new Set(data?.map((track) => track.genre)))

  const toggleFilterList = (filterName) => {
    if (!activeFilter) {
      setActiveFilter(filterName)
    }
    if (activeFilter !== filterName) {
      setActiveFilter(filterName)
    }
    if (activeFilter === filterName) {
      setActiveFilter('')
    }
  }

//На каждый item авторов и жанров повесить эту функцию
  const handleFilterChange = (event, type, value) => {
    event.stopPropagation()
    handleChange(type, value)
    if (isActiveItem.includes(value)) {
      setIsActiveItem(isActiveItem.filter((item) => item !== value))
    } else {
      setIsActiveItem([...isActiveItem, value])
    }
  }

  return (
    <S.CenterblockFilter>
      <S.ContainerFilters>
        <S.FilterTitle>Искать по:</S.FilterTitle>

        <S.FilterButton
          onClick={() => {
            toggleFilterList('author')
          }}
          $isActiveBtn={activeFilter === 'author'}
          className="_btn-text"
        >
          исполнителю
          {activeFilter === 'author' ? (
            <S.FilterCategory>
              <S.FilterWrapper>
                <S.FilterList>
                  {authors.map((author, index) => {
                    return (
                      <S.FilterItem
                        $isActive={isActiveItem.includes(author)}
                        key={index}
                        onClick={(e) => handleFilterChange(e, 'author',author)}
                      >
                        {author}
                      </S.FilterItem>
                    )
                  })}
                </S.FilterList>
              </S.FilterWrapper>
            </S.FilterCategory>
          ) : null}
        </S.FilterButton>

        <S.FilterButton
          onClick={() => {
            toggleFilterList('genre')
          }}
          $isActiveBtn={activeFilter === 'genre'}
          className="_btn-text"
        >
          жанру
          {activeFilter === 'genre' ? (
            <S.FilterCategory>
              <S.FilterWrapper>
                <S.FilterList>
                  {genres.map((genre, index) => {
                    return (
                      <S.FilterItem
                        $isActive={isActiveItem.includes(genre)}
                        key={index}
                        onClick={(e) => handleFilterChange(e,'genre',genre)}
                      >
                        {genre}
                      </S.FilterItem>
                    )
                  })}
                </S.FilterList>
              </S.FilterWrapper>
            </S.FilterCategory>
          ) : null}
        </S.FilterButton>
      </S.ContainerFilters>

      <S.ContainerFilters>
        <S.FilterTitle>Сортировка:</S.FilterTitle>

        <S.FilterButton
          onClick={() => {
            toggleFilterList('sort')
          }}
          $isActiveBtn={activeFilter === 'sort'}
          className="_btn-text"
        >
          исполнителю
          {activeFilter === 'sort' ? (
            <S.FilterCategory>
              <S.FilterWrapper>
                <S.FilterList>
                  {authors.map((author, index) => {
                    return (
                      <S.FilterItem
                        $isActive={isActive}
                        key={index}
                        onClick={(e) => handleFilterChange(e,'sort', author)}
                      >
                        {author}
                      </S.FilterItem>
                    )
                  })}
                </S.FilterList>
              </S.FilterWrapper>
            </S.FilterCategory>
          ) : null}
        </S.FilterButton>
      </S.ContainerFilters>
    </S.CenterblockFilter>
  )
}
