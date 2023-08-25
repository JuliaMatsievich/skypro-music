import { TrackItem } from './track/track'
import { Filter } from './filter/filter'
import * as S from './trackList.styles'
import { SkeletonTrack } from '../skeleton/skeletonTrack';

export function TrackList({ isLoading }) {
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
            <TrackItem
              track={{
                title: 'Guilt',
                titleLink: 'http://',
                author: 'Nero',
                authorLink: 'http://',
                album: 'Welcome Reality',
                albumLink: 'http://',
                time: '4:44',
              }}
            />
            <TrackItem
              track={{
                title: 'Elektro',
                titleLink: 'http://',
                author: 'Dynoro, Outwork, Mr. Gee',
                authorLink: 'http://',
                album: 'Elektro',
                albumLink: 'http://',
                time: '2:22',
              }}
            />
            <TrackItem
              track={{
                title: 'I’m Fire',
                titleLink: 'http://',
                author: 'Ali Bakgor',
                authorLink: 'http://',
                album: 'I’m Fire',
                albumLink: 'http://',
                time: '2:22',
              }}
            />
            <TrackItem
              track={{
                title: 'Non Stop',
                titleSpan: '(Remix)',
                titleLink: 'http://',
                author: 'Стоункат, Psychopath',
                authorLink: 'http://',
                album: 'Non Stop',
                albumLink: 'http://',
                time: '4:12',
              }}
            />
            <TrackItem
              track={{
                title: 'Run Run',
                titleSpan: '(feat. AR/CO)',
                titleLink: 'http://',
                author: 'Jaded, Will Clarke, AR/CO',
                authorLink: 'http://',
                album: 'Run Run',
                albumLink: 'http://',
                time: '2:54',
              }}
            />
            <TrackItem
              track={{
                title: 'Eyes on Fire',
                titleSpan: '(Zeds Dead Remix)',
                titleLink: 'http://',
                author: 'Blue Foundation, Zeds Dead',
                authorLink: 'http://',
                album: 'Eyes on Fire',
                albumLink: 'http://',
                time: '5:20',
              }}
            />
            <TrackItem
              track={{
                title: 'Mucho Bien',
                titleSpan: '(Hi Profile Remix)',
                titleLink: 'http://',
                author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
                authorLink: 'http://',
                album: 'Mucho Bien',
                albumLink: 'http://',
                time: '3:41',
              }}
            />
            <TrackItem
              track={{
                title: 'Knives n Cherries',
                titleLink: 'http://',
                author: 'minthaze',
                authorLink: 'http://',
                album: 'Captivating',
                albumLink: 'http://',
                time: '1:48',
              }}
            />
            <TrackItem
              track={{
                title: 'How Deep Is Your Love',
                titleLink: 'http://',
                author: 'Calvin Harris, Disciples',
                authorLink: 'http://',
                album: 'How Deep Is Your Love',
                albumLink: 'http://',
                time: '3:32',
              }}
            />

            <TrackItem
              track={{
                title: 'Morena',
                titleLink: 'http://',
                author: 'Tom Boxer',
                authorLink: 'http://',
                album: 'Soundz Made in Romania',
                albumLink: 'http://',
                time: '3:36',
              }}
            />
          </S.ContentPlaylist>
        )}

      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}
