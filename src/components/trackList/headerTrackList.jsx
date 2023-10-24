import { useEffect, useState } from 'react'
import * as S from './trackList.styles'
import { useSelector } from 'react-redux'
import { searchMusic } from '../../helpFunctions'

export const HeaderTrackList = ({ title, tracks, setSearch }) => {
  // const [search, setSearch] = useState('')

  // useEffect(() => {
  //   if (tracks) {
  //     const newtracks = searchMusic(tracks, search)
  //     console.log(newtracks)
  //   }
  // }, [search])

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
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.CenterBlockSearch>
      <S.CenterBlockTitle>{title}</S.CenterBlockTitle>
    </>
  )
}
