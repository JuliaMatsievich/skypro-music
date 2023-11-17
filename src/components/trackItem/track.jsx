import * as S from './track.styles'
import { getTimeInMinutes } from '../../helpers/timeInMinutes'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentTrackSelector,
  selectIsPlaying,
  setCurrentPlaylist
} from '../../store/trackSlice'
import { setCurrentTrack } from '../../store/trackSlice'
import { useLikeDislike } from '../../customHooks/likeDislikeHook'


export const TrackItem = ({ track, id, index, trackList }) => {
  const dispatch = useDispatch()
   const currentTrack = useSelector(currentTrackSelector)
   const playlist = useSelector((state) => state.audioPlayer.playlist)

  const {isLike, handleLikeDislike} = useLikeDislike(track, index,trackList)

  const handlePlayTrack = ( {track, index} ) => {
    dispatch(setCurrentTrack( {track, index} ))
    dispatch(setCurrentPlaylist(playlist))
  }

  const isPlaying = useSelector(selectIsPlaying)

  return (
    <S.PlayListItem>
      <S.PlayListTrack>
        <S.TrackTiltle>
          <S.TrackTiltleImage>
            <S.TrackTiltleImageSvg alt="music">
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </S.TrackTiltleImageSvg>
            {(Object.keys(currentTrack).length && currentTrack.id === id && isPlaying)
             ? (<S.CurrentTrackIndicateAnimation />)
             : (Object.keys(currentTrack).length && currentTrack.id === id)
             ? (<S.CurrentTrackIndicate />) : null}
          </S.TrackTiltleImage>
          <S.TrackTiltleText onClick={() => handlePlayTrack({ track, index })}>
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
          <S.TrackLikeSvg
            alt="like"
            onClick={() => handleLikeDislike(track.id)}
          >
            <use
              xlinkHref={
                isLike
                  ? '/img/icon/sprite.svg#icon-likeactive'
                  : '/img/icon/sprite.svg#icon-like'
              }
            ></use>
          </S.TrackLikeSvg>
          <S.TrackTimeText>
            {getTimeInMinutes(track.duration_in_seconds)}
          </S.TrackTimeText>
        </S.TrackTime>
      </S.PlayListTrack>
    </S.PlayListItem>
  )
}
