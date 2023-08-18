import './filterCategory.css';
import { FilterCategoryAuthor } from './filterCategoryAuthor';
import { FilterCategoryYear } from './FilterCategoryYear';
import { FilterCategoryGanr } from './FilterCategoryGanr';

export function FilterAuthor({ isOpen, onShow }) {
  return (
    <div onClick={onShow} className="filter__button button-author _btn-text">
      исполнителю
      {isOpen ? <FilterCategoryAuthor/> : null}
    </div>
  )
}

export function FilterYear({ year, onShow }) {
  return (
    <div onClick={onShow} className="filter__button button-year _btn-text">
      году выпуска
      {year ? <FilterCategoryYear/> : null}
    </div>
  )
}

export function FilterGanr({ ganr, onShow }) {
  return (
    <div onClick={onShow} className="filter__button button-genre _btn-text"
    >
      жанру
		{ganr ? <FilterCategoryGanr/> : null }
    </div>
  )
}
