import { useContext } from 'react'
import { Filter } from '../trackList/filter/filter'
import { HeaderTrackList } from '../trackList/headerTrackList'
import * as S from '../trackList/trackList.styles'
import { UserContext } from '../../App'

export const ErrorMessage = () => {
 const { allTracksError} = useContext(UserContext)

  return (
    <>
      <S.MainCenterBlock>
        <HeaderTrackList />
        <Filter />
        <p>{allTracksError}</p>
      </S.MainCenterBlock>
    </>
  )
}
