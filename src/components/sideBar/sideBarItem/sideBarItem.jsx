import './sideBarItem.css';

export function SideBarItem ({sideBar}) {
	return (
		<div className="sidebar__item">
			<a className="sidebar__link" href={sideBar.link}>
			<img
				className="sidebar__img"
				src={sideBar.img}
				alt={sideBar.name}
			/>
			</a>
		</div>
	)
}