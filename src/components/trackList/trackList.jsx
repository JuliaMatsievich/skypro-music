import { TrackItem } from './track/track'
import { Filter } from './filter/filter'
import * as S from './trackList.styles'
import { SkeletonTrack } from '../skeleton/skeletonTrack'
import { HeaderTrackList } from './headerTrackList'
import { getTracksAll } from '../../api/apiTrack'
import { setAllTracks } from '../../store/actions/creators/track' 
import { useDispatch, useSelector } from 'react-redux'
import { allTracksSelector } from '../../store/selectors/track' 
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'


export const TrackList = ({ setCurrentTrack, currentTrack}) => {
  let tracks = useSelector(allTracksSelector)
  const dispatch = useDispatch()
  
  const { isLoading, setLoading, allTracksError, setAllTracksError } = useContext(UserContext)

  useEffect(() => {
    getTracksAll()
      .then((data) => {
        setLoading(false)
        // setTracks(data)
        console.log('data --->', data);
        tracks = dispatch(setAllTracks(data))
        console.log('tracks ---->>', tracks);
      })
      .catch((error) => {
        setAllTracksError(
          'Не удалось загрузить плейлист, попробуйте позже: ' + error.message,
        )
        console.log(error.message);  
      })
  }, [])

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
            {tracks.map((track) => {
              return <TrackItem key={track.id} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} track={track}/>
            })}
          </S.ContentPlaylist>
        )}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
