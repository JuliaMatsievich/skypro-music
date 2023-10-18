import * as S from './track.styles'
import { getTimeInMinutes } from '../../../helpFunctions'
import { useDispatch, useSelector } from 'react-redux'
import {
  currentTrackSelector,
  favoriteTrackSelector,
  selectIsPlaying,
  setCurrentPlaylist,
  setFavoriteTrack,
} from '../../../store/trackSlice'
import { setCurrentTrack } from '../../../store/trackSlice'
import { useAddFavoriteTrackMutation, useDeleteFavoriteTrackMutation } from '../../../services/trackApi'
import { useEffect, useState } from 'react'

export const TrackItem = ({ track, id, index }) => {
  const dispatch = useDispatch()

  const userId = JSON.parse(localStorage.getItem('user')).id

  const [addFavoriteTrack] = useAddFavoriteTrackMutation()
  const [deleteFavoriteTrack] = useDeleteFavoriteTrackMutation()

  const [isLike, setIsLike] = useState(false)

  const handlePlayTrack = (track, index) => {
    dispatch(setCurrentTrack({ track, index }))
    dispatch(setCurrentPlaylist())
  }

  const handleLike = async (id) => {
    await addFavoriteTrack(id).unwrap()
    setIsLike(true)
  }

  const handleDisLike = async (id) => {
    await deleteFavoriteTrack(id).unwrap()
    setIsLike(false)
  }

  const handleLikeDislkie = (id) => {
    if (isLike) {
      handleDisLike(id)
    } else {
      handleLike(id)
    }
  }

  const isPlaying = useSelector(selectIsPlaying)
  const currentTrack = useSelector(currentTrackSelector)

  useEffect(() => {
    if (
      track.stared_user &&
      track.stared_user.find((user) => user.id === userId)
    ) {
      setIsLike(true)
    }
  }, [track])

  return (
    <S.PlayListItem>
      <S.PlayListTrack>
        <S.TrackTiltle>
          <S.TrackTiltleImage>
            <S.TrackTiltleImageSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTiltleImageSvg>
            {Object.keys(currentTrack).length &&
            currentTrack.id === id &&
            isPlaying ? (
              <S.CurrentTrackIndicateAnimation />
            ) : Object.keys(currentTrack).length && currentTrack.id === id ? (
              <S.CurrentTrackIndicate />
            ) : null}
          </S.TrackTiltleImage>
          <S.TrackTiltleText onClick={() => handlePlayTrack(track, index)}>
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

          <S.TrackLikeSvg alt="like" onClick={() => handleLikeDislkie(track.id)}>
            <use
              xlinkHref={
                isLike
                  ? 'img/icon/sprite.svg#icon-likeactive'
                  : 'img/icon/sprite.svg#icon-like'
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
