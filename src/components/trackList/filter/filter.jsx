import './filter.css'
import {
  FilterAuthor,
  FilterYear,
  FilterGanr,
  FilterCategory,
  FilterCat,
  Filters,
} from './filterCategory'
import { useState } from 'react'
import { FilterCategoryAuthor } from './filterCategoryAuthor'
import { FilterCategoryYear } from './FilterCategoryYear'
import { FilterCategoryGanr } from './FilterCategoryGanr'

export function Filter() {
  let [isActiveIndex, setActiveIndex] = useState(0)
  let [author, setAuthor] = useState(false)
  let [year, setYear] = useState(false)
  let [ganr, setGanr] = useState(false)


  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      {/* <FilterAuthor
        isOpen={isActiveIndex === true}
        onShow={() => setActiveIndex(!isActiveIndex)}
      />
      <FilterYear
        isOpen={isActiveIndex === true}
        onShow={() => setActiveIndex(!isActiveIndex)}
      />
      <FilterGanr
        isOpen={isActiveIndex === true}
        onShow={() => setActiveIndex(!isActiveIndex)}
      /> */}

      {/* <FilterCategory
			isOpen={isActiveIndex === true}
			onShow={() => {
        setActiveIndex(!isActiveIndex)
      }
       }
			year={isActiveIndex === true}
			author={isActiveIndex === true}
			ganr={isActiveIndex === true}
		/> */}

      <FilterCat
        isOpen={isActiveIndex}
        author={author}
        onShow={() => {
          // setActiveIndex((isActiveIndex = 1))
          setAuthor(!author)
          setYear((year = false))
          setGanr((ganr = false))
        }}
        title="исполнителю"
      />
      <FilterCat
        isOpen={isActiveIndex === 0}
        onShow={() => {
          // setActiveIndex((isActiveIndex = 2))
          setYear(!year)
          setAuthor((author = false))
          setGanr((ganr = false))
        }}
        year={year}
        title="году выпуска"
      />
      <FilterCat
        isOpen={isActiveIndex === 0}
        ganr={ganr}
        onShow={() => {
          // setActiveIndex((isActiveIndex = 3))
          setGanr(!ganr)
          setYear((year = false))
          setAuthor((author = false))
        }}
        title="жанру"
      />
    </div>
  )
}
