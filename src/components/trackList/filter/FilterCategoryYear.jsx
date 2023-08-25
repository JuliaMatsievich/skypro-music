import * as S from './filterCategory.styles'

export function FilterCategoryYear() {
	return (
		<S.FilterCategory>
          <S.FilterWrapper >
            <S.FilterList>
              <S.FilterItem>1992</S.FilterItem>
              <S.FilterItem>1993</S.FilterItem>
              <S.FilterItem>2000</S.FilterItem>
              <S.FilterItem>2023</S.FilterItem>
            </S.FilterList>
          </S.FilterWrapper>
        </S.FilterCategory>
	)
}