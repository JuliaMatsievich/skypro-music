import './filter.css'
import { FilterAuthor, FilterYear, FilterGanr } from './filterCategory'
import { useState } from 'react'

export function Filter() {
  //   const [isActiveIndex, setActiveIndex] = useState(false)
  let [author, setAuthor] = useState(false)
  let [year, setYear] = useState(false)
  let [ganr, setGanr] = useState(false)

  if (author === true) {
    setYear(year = true)
    setGanr(ganr = false)
  }

  if (year === true) {
    setAuthor(author = false)
    setGanr(ganr = false)
  }

  if (ganr === true) {
    setYear(year = false)
    setAuthor(author = false)
  }

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <FilterAuthor
        isOpen={author}
        onShow={() => setAuthor((author) => {
			console.log(author);
			return !author
		  } )}
      />
      <FilterYear isOpen={year} onShow={() => setYear((year) => !year)} />
      <FilterGanr isOpen={ganr} onShow={() => setGanr((ganr) => !ganr)} />
    </div>
  )
}
