import './filterCategory.css'
import { FilterCategoryAuthor } from './filterCategoryAuthor'
import { FilterCategoryYear } from './FilterCategoryYear'
import { FilterCategoryGanr } from './FilterCategoryGanr'

export function FilterCategory({ onShow, title,author, year, ganr}) {
  return (
    <div onClick={onShow} className="filter__button button-genre _btn-text">
      {title}
      {author ? <FilterCategoryAuthor /> : null}
      {year ? <FilterCategoryYear /> : null}
      {ganr ? <FilterCategoryGanr /> : null}
    </div>
  )
}

