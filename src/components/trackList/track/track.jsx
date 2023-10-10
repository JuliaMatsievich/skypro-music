import * as S from './track.styles';
import { getTimeInMinutes } from '../../../helpFunctions'; 
import { useDispatch, useSelector } from 'react-redux';
import { currentTrackSelector, selectIsPlaying } from '../../../store/selectors/track';
import { setCurrentTrack } from '../../../store/actions/creators/track';
import { useState } from 'react';

export const TrackItem = ({ track, id }) => {

  const dispatch = useDispatch()

   const handlePlayTrack = (track) => {
    dispatch(setCurrentTrack(track))
  }

  const isPlaying = useSelector(selectIsPlaying)
  const currentTrack = useSelector(currentTrackSelector)
 


  return (
    <S.PlayListItem>
      <S.PlayListTrack>
        <S.TrackTiltle>
          <S.TrackTiltleImage>
            <S.TrackTiltleImageSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note">
              </use>              
            </S.TrackTiltleImageSvg>
            {Object.keys(currentTrack).length && currentTrack.id === id && isPlaying ? <S.CurrentTrackIndicateAnimation /> : Object.keys(currentTrack).length && currentTrack.id === id ? <S.CurrentTrackIndicate /> : null}
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
