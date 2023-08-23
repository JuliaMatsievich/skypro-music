import './filter.css'
import { FilterCategory } from './filterCategory'
import { useState } from 'react'

export function Filter() {
  let [author, setAuthor] = useState(false)
  let [year, setYear] = useState(false)
  let [ganr, setGanr] = useState(false)

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>

      <FilterCategory
        author={author}
        onShow={() => {
          setAuthor(!author)
          setYear((year = false))
          setGanr((ganr = false))
        }}
        title="исполнителю"
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
      />
    </div>
  )
}
