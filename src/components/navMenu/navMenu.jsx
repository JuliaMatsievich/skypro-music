import { useState } from 'react'
import * as S from './navMenu.styles'

export function NavMenu() {
  const [isOpenMenu, setOpenMenu] = useState(false)

  function handleClickMenu() {
    setOpenMenu(!isOpenMenu)
  }

  function handleClickLoginOut() {
    window.localStorage.removeItem("user");
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="../img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger onClick={handleClickMenu}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {isOpenMenu ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.MenuLink to='/'>
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to='/favorites'>
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/login" onClick={handleClickLoginOut}>
                Выйти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : null}
    </S.MainNav>
  )
}
