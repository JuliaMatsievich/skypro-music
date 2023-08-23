import './filterCategory.css'
import { FilterCategoryAuthor } from './filterCategoryAuthor'
import { FilterCategoryYear } from './FilterCategoryYear'
import { FilterCategoryGanr } from './FilterCategoryGanr'

export function FilterAuthor({ isOpen, onShow }) {
  return (
    <div onClick={onShow} className="filter__button button-author _btn-text">
      исполнителю
      {isOpen ? <FilterCategoryAuthor /> : null}
    </div>
  )
}

export function FilterYear({ isOpen, onShow }) {
  return (
    <div onClick={onShow} className="filter__button button-year _btn-text">
      году выпуска
      {isOpen ? <FilterCategoryYear /> : null}
    </div>
  )
}

export function FilterGanr({ isOpen, onShow }) {
  return (
    <div onClick={onShow} className="filter__button button-genre _btn-text">
      жанру
      {isOpen ? <FilterCategoryGanr /> : null}
    </div>
  )
}

export function FilterCategory({ isOpen, onShow, author, year, ganr }) {
  return (
    <>
      <div onClick={onShow} className="filter__button button-author _btn-text">
        исполнителю
        {author ? <FilterCategoryAuthor /> : null}
		  {year || ganr && null}
      </div>
      <div onClick={onShow} className="filter__button button-year _btn-text">
        году выпуска
      {year ? <FilterCategoryYear /> : null}
		  {author || ganr && null}
      </div>

      <div onClick={onShow} className="filter__button button-genre _btn-text">
        жанру
        {ganr ? <FilterCategoryGanr /> : null}
		  {year || author && null}
      </div>
    </>
  )
}

export function FilterCat({ isOpen, onShow, title,author, year, ganr}) {
  return (
    <div onClick={onShow} className="filter__button button-genre _btn-text">
      {title}
      
      {author || isOpen === 1 ? <FilterCategoryAuthor /> : null}
      {year || isOpen === 2 ? <FilterCategoryYear /> : null}
      {ganr || isOpen === 3 ? <FilterCategoryGanr /> : null}

    </div>
  )
}

