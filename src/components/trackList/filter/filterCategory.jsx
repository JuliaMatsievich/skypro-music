import * as S from './filterCategory.styles'
import { FilterCategoryAuthor } from './filterCategoryAuthor'
import { FilterCategoryYear } from './FilterCategoryYear'
import { FilterCategoryGanr } from './FilterCategoryGanr'

export const FilterCategory = ({ onShow, title, author, year, ganr, setFilterTracks}) => {
  return (
    <S.FilterButton onClick={onShow} className="_btn-text">
      {title}
      {author ? <FilterCategoryAuthor setFilterTracks={setFilterTracks}/> : null}
      {year ? <FilterCategoryYear /> : null}
      {ganr ? <FilterCategoryGanr /> : null}
    </S.FilterButton>
  )
}

