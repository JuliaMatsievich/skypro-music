import { TrackItem } from './track/track'
import { Filter } from './filter/filter'
import * as S from './trackList.styles'
import { SkeletonTrack } from '../skeleton/skeletonTrack'

import { useEffect, useState } from 'react'
import { getTracksAll } from '../../api'

export const TrackList = ({ isLoading }) => {
  const [tracks, setTracks] = useState([])

  useEffect(() => {
    getTracksAll().then((data) => {
      setTracks(data)
    })
  }, [])

  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
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
              return <TrackItem key={trackData.id} track={trackData} />
            })}
          </S.ContentPlaylist>
        )}
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
