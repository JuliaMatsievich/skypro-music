import * as S from './trackList.styles'


export const HeaderTrackList = () => {
  return (
    <>	 
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
    </>
  )
}
