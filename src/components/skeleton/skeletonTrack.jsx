import * as S from '../trackList/track/track.styles'

export function SkeletonTrack () {

	return (
		<S.PlayListItem>
		<S.PlayListTrack className="playlist__track track">
		  <S.TrackTiltle className="track__title">
			 <S.SkeletonTitleImage></S.SkeletonTitleImage>
			 <S.SkeletonTitleText></S.SkeletonTitleText>
		  </S.TrackTiltle>
		  <S.SkeletonTitleAuthor></S.SkeletonTitleAuthor>
		  <S.SkeletonTitleAlbum></S.SkeletonTitleAlbum>
		  <S.TrackTime>
			 <S.TrackTimeSvg className="track__time-svg" alt="time">
				<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			 </S.TrackTimeSvg>
			 <S.TrackTimeText>0.00</S.TrackTimeText>
		  </S.TrackTime>
		</S.PlayListTrack>
	 </S.PlayListItem>
	)

}