import { TrackItem } from '../trackItem/track'
import * as S from './trackList.styles'
import { SkeletonTrack } from '../skeleton/skeletonTrack'
import { useGetAllTracksQuery } from '../../services/trackApi'

export const TrackList = ({ tracks }) => {
  const { isLoading } = useGetAllTracksQuery()
  

  return (
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
          {tracks?.map((track, index) => {
            return (
              <TrackItem
                key={track.id}
                track={track}
                id={track.id}
                index={index}
                trackList={tracks}
              />
            )
          })}
        </S.ContentPlaylist>
      )}
    </S.CenterBlockContent>
  )
}
