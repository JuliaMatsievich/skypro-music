import { useSelector } from 'react-redux'
import * as S from './trackList.styles'
import { titlePlayListSelector } from '../../store/trackSlice'


export const HeaderTrackList = () => {

  const titlePlaylist = useSelector(titlePlayListSelector)

  return (
    <>	 
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockTitle>{titlePlaylist}</S.CenterBlockTitle>
    </>
  )
}
