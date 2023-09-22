import * as S from './track.styles';
import { getTimeInMinutes } from '../../../helpFunctions'; 

export const TrackItem = ({ currentTrack, setCurrentTrack, track }) => {

  const handlePlayTrack = (currentTrack) => {
    setCurrentTrack(currentTrack)
  }

  return (
    <S.PlayListItem>
      <S.PlayListTrack>
        <S.TrackTiltle>
          <S.TrackTiltleImage>
            <S.TrackTiltleImageSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTiltleImageSvg>
          </S.TrackTiltleImage>
          <S.TrackTiltleText onClick={() => handlePlayTrack(track)}>
            <S.TrackTiltleLink>{track.name} </S.TrackTiltleLink>
          </S.TrackTiltleText>
        </S.TrackTiltle>
        <S.TrackTiltleAuthor>
          <S.TrackTiltleAuthorLink href={track.authorLink}>
            {track.author}
          </S.TrackTiltleAuthorLink>
        </S.TrackTiltleAuthor>
        <S.TrackTiltleAlbum>
          <S.TrackTiltleAlbumLink href={track.albumLink}>
            {track.album}
          </S.TrackTiltleAlbumLink>
        </S.TrackTiltleAlbum>
        <S.TrackTime>
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{getTimeInMinutes(track.duration_in_seconds)}</S.TrackTimeText>
        </S.TrackTime>
      </S.PlayListTrack>
    </S.PlayListItem>
  )
}
