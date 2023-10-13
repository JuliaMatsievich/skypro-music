import { TrackItem } from './track/track'
import * as S from './trackList.styles'
import { SkeletonTrack } from '../skeleton/skeletonTrack'
import { getTracksAll } from '../../api/apiTrack'
import { setAllTracks } from '../../store/trackSlice' 
import { useDispatch, useSelector } from 'react-redux'
import { allTracksSelector } from '../../store/trackSlice' 
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'


export const TrackList = () => {
  // let tracks = useSelector(allTracksSelector)
  const dispatch = useDispatch()
  const { setLoading, setAllTracksError } = useContext(UserContext)

  const {
    data: tracks,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllTracksQuery()

  // useEffect(() => {
  //   getTracksAll()
  //     .then((data) => {
  //       setLoading(false)
  //       tracks = dispatch(setAllTracks(data))
  //     })
  //     .catch((error) => {
  //       setAllTracksError(
  //         'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
  //       )
  //     })
  // }, [])

 


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
            {tracks.map((track,index) => {
              return <TrackItem key={track.id} track={track} id={track.id} index={index}/>
            })}
          </S.ContentPlaylist>
        )}
      </S.CenterBlockContent>
  )
}
