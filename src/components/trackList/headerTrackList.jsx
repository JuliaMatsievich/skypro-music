import * as S from './trackList.styles'

export const HeaderTrackList = ({ title, setSearch }) => {

  return (
    <>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText
          type="search"
          placeholder="Поиск"
          name="search"
          onInput={(e) => setSearch(e.target.value)}
        />
      </S.CenterBlockSearch>
      <S.CenterBlockTitle>{title}</S.CenterBlockTitle>
    </>
  )
}
