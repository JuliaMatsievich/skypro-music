import './sideBar.css';
import { SideBarItem } from './sideBarItem/sideBarItem';

export function SideBar () {
	return (
		<div className="main__sidebar sidebar">
		<div className="sidebar__personal">
		  <p className="sidebar__personal-name">Sergey.Ivanov</p>
		  <div className="sidebar__icon">
			 <svg alt="logout">
				<use xlinkHref="img/icon/sprite.svg#logout"></use>
			 </svg>
		  </div>
		</div>
		<div className="sidebar__block">
			
		  <div className="sidebar__list">
			<SideBarItem 
			sideBar ={{
				link: '#',
				img: 'img/playlist01.png',
				name: "day's playlist"
			}}
			/>
			<SideBarItem 
			sideBar ={{
				link: '#',
				img: 'img/playlist02.png',
				name: "100 танцевальных хитов"
			}}
			/>
			<SideBarItem 
			sideBar ={{
				link: '#',
				img: 'img/playlist03.png',
				name: "инди-заряд"
			}}
			/>

		  </div>
		</div>
	 </div>
	)
}