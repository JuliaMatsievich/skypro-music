import { Filter } from '../trackList/filter/filter'
import { HeaderTrackList } from '../trackList/headerTrackList'
import * as S from '../trackList/trackList.styles'

export const ErrorMessage = ({ allTracksError }) => {
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
