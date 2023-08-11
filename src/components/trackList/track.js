import './track.css';

export function TrackItem ({track}) {
	return (
		<div className="playlist__item">
		<div className="playlist__track track">
		  <div className="track__title">
			 <div className="track__title-image">
				<svg className="track__title-svg" alt="music">
				  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
				</svg>
			 </div>
			 <div className="track__title-text">
				<a className="track__title-link" href={track.titleLink}
				  >{track.title} <span className="track__title-span"></span
				></a>
			 </div>
		  </div>
		  <div className="track__author">
			 <a className="track__author-link" href={track.authorLink}>{track.author}</a>
		  </div>
		  <div className="track__album">
			 <a className="track__album-link" href={track.albumLink}
				>{track.album}</a
			 >
		  </div>
		  <div className="track__time">
			 <svg className="track__time-svg" alt="time">
				<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			 </svg>
			 <span className="track__time-text">{track.time}</span>
		  </div>
		</div>
	 </div>
	)
}

{/* export function TrackItem ({trackTitle, trackAuthor, trackAuthorLink, trackAlbum, trackAlbumLink, trackTime}) {
	return (
		<div className="playlist__item">
		<div className="playlist__track track">
		  <div className="track__title">
			 <div className="track__title-image">
				<svg className="track__title-svg" alt="music">
				  <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
				</svg>
			 </div>
			 <div className="track__title-text">
				<a className="track__title-link" href="http://"
				  >{trackTitle} <span className="track__title-span"></span
				></a>
			 </div>
		  </div>
		  <div className="track__author">
			 <a className="track__author-link" href={trackAuthorLink}>{trackAuthor}</a>
		  </div>
		  <div className="track__album">
			 <a className="track__album-link" href={trackAlbumLink}
				>{trackAlbum}</a
			 >
		  </div>
		  <div className="track__time">
			 <svg className="track__time-svg" alt="time">
				<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			 </svg>
			 <span className="track__time-text">{trackTime}</span>
		  </div>
		</div>
	 </div>
	)
} */}

{/* trackTitle = "Guilt"
			trackAuthor = 'Nero'
			trackAuthorLink ='http://'
			trackAlbum = 'Welcome Reality'
			trackAlbumLink = 'http://'
			trackTime = '4:44' */}