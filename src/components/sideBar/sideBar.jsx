import { useContext } from 'react'
import * as S from './sideBar.styles'
import { UserContext } from '../../App'
import { useGetAllTracksQuery } from '../../services/trackApi'
import { useSelector } from 'react-redux'

export const SideBar = ({categories}) => {
  const {logOut } = useContext(UserContext)
  const {isLoading} = useGetAllTracksQuery()

  const handleClickLoginOut = () => {
    logOut()
  }

  const user = useSelector(state => state.user)
  console.log('categories',categories);
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.username}</S.SidebarPersonalName>
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
              console.log('category', category);
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
