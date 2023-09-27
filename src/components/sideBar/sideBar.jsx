import { useContext } from 'react';
import * as S from './sideBar.styles'
import { UserContext } from '../../App';

export const SideBar = ({ isLoading, categories}) => {
  const {isUser, setIsUser} = useContext(UserContext) 

  const handleClickLoginOut = () => {
    localStorage.removeItem("username");
    setIsUser(false)
   }

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{localStorage.getItem('username')}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleClickLoginOut}>
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
