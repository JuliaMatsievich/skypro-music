import { TrackItem } from './track/track'
import { Filter } from './filter/filter'
import * as S from './trackList.styles'
import { SkeletonTrack } from '../skeleton/skeletonTrack'
import { HeaderTrackList } from './headerTrackList'


export const TrackList = ({ isLoading, tracks, setCurrentTrack }) => {

  return (
    <S.MainCenterBlock>
      <HeaderTrackList />
      <Filter />
      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.PlayListCol01>Трек</S.PlayListCol01>
          <S.PlayListCol02>ИСПОЛНИТЕЛЬ</S.PlayListCol02>
          <S.PlayListCol03>АЛЬБОМ</S.PlayListCol03>
          <S.PlayListCol04>
            <S.PlayTiltleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </S.PlayTiltleSvg>
          </S.PlayListCol04>
        </S.ContentTitle>
        {isLoading ? (
          <S.ContentPlaylist>
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
            <SkeletonTrack />
          </S.ContentPlaylist>
        ) : (
          <S.ContentPlaylist>
            {tracks.map((trackData) => {
              return <TrackItem key={trackData.id} track={trackData} setCurrentTrack={setCurrentTrack} />
            })}
          </S.ContentPlaylist>
        )}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
