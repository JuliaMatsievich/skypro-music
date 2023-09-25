import * as S from './sideBar.styles'

export const SideBar = ({ isLoading, categories }) => {
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
            <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
            <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
            <S.SkeletonSidebarItem></S.SkeletonSidebarItem>
          </S.SidebarList>
        ) : (
          <S.SidebarList>
            {categories.map((category) => {
              return (
                <S.SidebarItem key={category.id}>
                  <S.SidebarLink to={`/category/${category.id}`}>
                    <S.SidebarImage src={category.img} alt={category.title} />
                  </S.SidebarLink>
                </S.SidebarItem>
              )
            })}
          </S.SidebarList>
        )}
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}
