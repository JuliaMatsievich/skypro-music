import './track.css';
import * as S from './track.styles'

export function TrackItem ({track}) {

	return (
		<S.PlayListItem>
		<S.PlayListTrack>
		  <S.TrackTiltle>
			 <S.TrackTiltleImage>
				<S.TrackTiltleImageSvg alt="music">
				  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
				</S.TrackTiltleImageSvg>
			 </S.TrackTiltleImage>
			 <S.TrackTiltleText>
				<S.TrackTiltleLink href={track.titleLink}
				  >{track.title} <S.TrackTiltleSpan>{track.titleSpan}</S.TrackTiltleSpan></S.TrackTiltleLink>
			 </S.TrackTiltleText>
		  </S.TrackTiltle>
		  <S.TrackTiltleAuthor>
			 <S.TrackTiltleAuthorLink href={track.authorLink}>{track.author}</S.TrackTiltleAuthorLink>
		  </S.TrackTiltleAuthor>
		  <S.TrackTiltleAlbum>
			 <S.TrackTiltleAlbumLink href={track.albumLink}
				>{track.album}</S.TrackTiltleAlbumLink>
		  </S.TrackTiltleAlbum>
		  <S.TrackTime>
			 <S.TrackTimeSvg alt="time">
				<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			 </S.TrackTimeSvg>
			 <S.TrackTimeText>{track.time}</S.TrackTimeText>
		  </S.TrackTime>
		</S.PlayListTrack>
	 </S.PlayListItem>
	)
}
