import './trackList.css';
import { TrackItem } from './track';

export function TrackList () {
	return (
		<div className="main__centerblock centerblock">
		<div className="centerblock__search search">
		  <svg className="search__svg">
			 <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
		  </svg>
		  <input
			 className="search__text"
			 type="search"
			 placeholder="Поиск"
			 name="search"
		  />
		</div>
		<h2 className="centerblock__h2">Треки</h2>
		<div className="centerblock__filter filter">
		  <div className="filter__title">Искать по:</div>
		  <div className="filter__button button-author _btn-text">
			 исполнителю
		  </div>
		  <div className="filter__button button-year _btn-text">
			 году выпуска
		  </div>
		  <div className="filter__button button-genre _btn-text">жанру</div>
		</div>
		<div className="centerblock__content">
		  <div className="content__title playlist-title">
			 <div className="playlist-title__col col01">Трек</div>
			 <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
			 <div className="playlist-title__col col03">АЛЬБОМ</div>
			 <div className="playlist-title__col col04">
				<svg className="playlist-title__svg" alt="time">
				  <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
				</svg>
			 </div>
		  </div>
		  <div className="content__playlist playlist">
			<TrackItem
			track={{
				title: "Guilt",
				titleLink: 'http://',
				author: 'Nero',
				authorLink: 'http://',
				album: 'Welcome Reality',
				albumLink: 'http://',
				time: '4:44'
			}}
			/>
			<TrackItem
			track={{
				title: "Elektro",
				titleLink: 'http://',
				author: 'Dynoro, Outwork, Mr. Gee',
				authorLink: 'http://',
				album: 'Elektro',
				albumLink: 'http://',
				time: '2:22'
			}}
			/>
			<TrackItem
			track={{
				title: "I’m Fire",
				titleLink: 'http://',
				author: 'Ali Bakgor',
				authorLink: 'http://',
				album: 'I’m Fire',
				albumLink: 'http://',
				time: '2:22'
			}}
			/>
			<TrackItem
			track={{
				title: "Non Stop",
				titleSpan: '(Remix)',
				titleLink: 'http://',
				author: 'Стоункат, Psychopath',
				authorLink: 'http://',
				album: 'Non Stop',
				albumLink: 'http://',
				time: '4:12'
			}}
			/>
			<TrackItem
			track={{
				title: "Run Run",
				titleSpan: '(feat. AR/CO)',
				titleLink: 'http://',
				author: 'Jaded, Will Clarke, AR/CO',
				authorLink: 'http://',
				album: 'Run Run',
				albumLink: 'http://',
				time: '2:54'
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
				time: '5:20'
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
				time: '3:41'
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
				time: '1:48'
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
				time: '3:32'
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
				time: '3:36'
			}}
			/>

		  </div>
		</div>
	 </div>
	)
}