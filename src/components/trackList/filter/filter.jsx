import { FilterCategory } from './filterCategory'
import { useState } from 'react'
import * as S from './filter.styles'
import { useGetAllTracksQuery } from '../../../services/trackApi'
import { filterAuthor } from '../../../helpers/helpFunctions'

export const Filter = ({ filterTracks, setFilterTracks }) => {
  const { data } = useGetAllTracksQuery()

  const [isActiveItem, setIsActiveItem] = useState('')
  const [activeFilter, setActiveFilter] = useState('')
  console.log('isActiveItem in start', isActiveItem)
  console.log('filterTracks in start', filterTracks)

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

  const handlefilterAuthor = (e, option) => {
    e.stopPropagation()
    if (isActiveItem.includes(option)) {
      setFilterTracks(filterTracks.filter(({ author }) => author !== option))
      console.log('filterTracks -remove', filterTracks)
      setIsActiveItem(isActiveItem.filter((item) => item !== option))
      console.log('isActiveItem-remove2', isActiveItem)
    } else {
      setFilterTracks([...filterTracks, ...filterAuthor(data, option)])
      setIsActiveItem([...isActiveItem, option])
    }
    console.log('filterTracks -add', filterTracks)
    console.log('isActiveItem-add2', isActiveItem)
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
                        onClick={(e) => handlefilterAuthor(e, author)}
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
                        $isActive={isActiveLi}
                        key={index}
                        onClick={() => handlefilterAuthor('genre')}
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
                        $isActive={isActiveLi}
                        key={index}
                        onClick={() => handlefilterAuthor(author)}
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

      {/* <FilterCategory
        author={author}
        onShow={() => {
          setAuthor(!author)
          setYear((year = false))
          setGanr((ganr = false))
        }}
        title="исполнителю"
        setFilterTracks={setFilterTracks}
      />
      <FilterCategory
        onShow={() => {
          setYear(!year)
          setAuthor((author = false))
          setGanr((ganr = false))
        }}
        year={year}
        title="году выпуска"
      />
      <FilterCategory
        ganr={ganr}
        onShow={() => {
          setGanr(!ganr)
          setYear((year = false))
          setAuthor((author = false))
        }}
        title="жанру"
      /> */}
    </S.CenterblockFilter>
  )
}
