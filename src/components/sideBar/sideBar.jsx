import { SideBarItem } from './sideBarItem/sideBarItem'
import * as S from './sideBar.styles'

export function SideBar({ isLoading }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        {isLoading ? (
          <S.SidebarList>
            <S.SkeletinSidebarItem></S.SkeletinSidebarItem>
            <S.SkeletinSidebarItem></S.SkeletinSidebarItem>
            <S.SkeletinSidebarItem></S.SkeletinSidebarItem>
          </S.SidebarList>
        ) : (
          <S.SidebarList>
            <SideBarItem
              sideBar={{
                link: '#',
                img: 'img/playlist01.png',
                name: "day's playlist",
              }}
            />
            <SideBarItem
              sideBar={{
                link: '#',
                img: 'img/playlist02.png',
                name: '100 танцевальных хитов',
              }}
            />
            <SideBarItem
              sideBar={{
                link: '#',
                img: 'img/playlist03.png',
                name: 'инди-заряд',
              }}
            />
          </S.SidebarList>
        )}

      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
