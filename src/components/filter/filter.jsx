import { useState } from 'react'
import * as S from './filter.styles'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { setFilters } from '../../store/trackSlice'
import { useDispatch } from 'react-redux'

export const Filter = ({ handleChange, handleSort }) => {
  const { data } = useGetAllTracksQuery()

  const [isActiveItem, setIsActiveItem] = useState('')
  const [isActiveSort, setIsActiveSort] = useState('')
  const [activeFilter, setActiveFilter] = useState('')
  const [countAuthorFilter, setCountAuthorFilter] = useState(0)
  const [countGenreFilter, setCountGenreFilter] = useState(0)
  const [countSort, setCountSort] = useState(0)
  const dispatch = useDispatch()

  const authors = Array.from(new Set(data?.map((track) => track.author)))
  const genres = Array.from(new Set(data?.map((track) => track.genre)))
  const sort = ['По умолчанию', 'Сначала старые', 'Сначала новые']

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

  const handleFilterChange = (event, type, value) => {
    event.stopPropagation()
    dispatch(setFilters(type,value))
    handleChange(type, value)
    if (isActiveItem.includes(value)) {
      setIsActiveItem(isActiveItem.filter((item) => item !== value))
      if ((type === 'author')) setCountAuthorFilter(countAuthorFilter - 1)
      if ((type === 'genre')) setCountGenreFilter(countGenreFilter - 1)
    } else {
      setIsActiveItem([...isActiveItem, value])
      if ((type === 'author')) setCountAuthorFilter(countAuthorFilter + 1)
      if ((type === 'genre')) setCountGenreFilter(countGenreFilter + 1)
    }
  }

  const handleSortChange = (event, value) => {
    event.stopPropagation()
    handleSort(value)
    setIsActiveSort([value])
    if (isActiveSort.includes(value)) {
      setIsActiveSort(isActiveSort.filter((item) => item !== value))
      setCountSort(0)
    } else {
      setCountSort(1)
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
            <>
              <S.FilterCategory>
                <S.FilterWrapper>
                  <S.FilterList>
                    {authors.map((author, index) => {
                      return (
                        <S.FilterItem
                          $isActive={isActiveItem.includes(author)}
                          key={index}
                          onClick={(e) =>
                            handleFilterChange(e, 'author', author)
                          }
                        >
                          {author}
                        </S.FilterItem>
                      )
                    })}
                  </S.FilterList>
                </S.FilterWrapper>
              </S.FilterCategory>
            </>
          ) : null}
          <S.CountCircle $isVisible={countAuthorFilter !== 0}>
            {countAuthorFilter}
          </S.CountCircle>
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
            <>
              <S.FilterCategory>
                <S.FilterWrapper>
                  <S.FilterList>
                    {genres.map((genre, index) => {
                      return (
                        <S.FilterItem
                          $isActive={isActiveItem.includes(genre)}
                          key={index}
                          onClick={(e) => handleFilterChange(e, 'genre', genre)}
                        >
                          {genre}
                        </S.FilterItem>
                      )
                    })}
                  </S.FilterList>
                </S.FilterWrapper>
              </S.FilterCategory>
            </>
          ) : null}
          <S.CountCircle $isVisible={countGenreFilter !== 0}>
            {countGenreFilter}
          </S.CountCircle>
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
          По умолчанию
          {activeFilter === 'sort' ? (
            <>
              <S.FilterCategory>
                <S.FilterWrapper>
                  <S.FilterList>
                    {sort.map((item, index) => {
                      return (
                        <S.FilterItem
                          $isActive={isActiveSort.includes(item)}
                          key={index}
                          onClick={(e) => handleSortChange(e, item)}
                        >
                          {item}
                        </S.FilterItem>
                      )
                    })}
                  </S.FilterList>
                </S.FilterWrapper>
              </S.FilterCategory>
            </>
          ) : null}
                        <S.CountCircle $isVisible={countSort !== 0}>
                {countSort}
              </S.CountCircle>
        </S.FilterButton>
      </S.ContainerFilters>
    </S.CenterblockFilter>
  )
}
