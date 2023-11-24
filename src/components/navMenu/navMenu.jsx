import { useContext, useState } from 'react'
import * as S from './navMenu.styles'
import { UserContext } from '../../App'
import { useThemes } from '../../customHooks/themeHook'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../constants/themes'

export const NavMenu = () => {
  const [isOpenMenu, setOpenMenu] = useState(false)
  const { logOut } = useContext(UserContext)
  const [theme, themeToggler] = useThemes()
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const handleClickMenu = () => {
    setOpenMenu(!isOpenMenu)
  }

  const handleClickLoginOut = () => {
    logOut()
  }

  return (
    <ThemeProvider theme={themeMode}>
      <S.MainNav>
        <S.NavLogo>
          {theme  === 'dark' ? (
            <S.LogoImage src="../img/logo.png" alt="logo" />
          ) : (
            <S.LogoImage src="../img/logo-light.png" alt="logo" />
          )}
        </S.NavLogo>
        <S.NavBurger onClick={handleClickMenu}>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
          <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>
        {isOpenMenu ? (
          <>
            <S.NavMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.MenuLink to="/">Главное</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
                </S.MenuItem>
                <S.MenuItem>
                  <S.MenuLink to="/login" onClick={handleClickLoginOut}>
                    Выйти
                  </S.MenuLink>
                </S.MenuItem>
              </S.MenuList>
            </S.NavMenu>
          </>
        ) : null}
        <S.ThemeBtn onClick={themeToggler}>
          {theme === 'dark' ? (
            <img src="../../img/dark-theme.png" />
          ) : (
            <img src="../../img/light-theme.png" />
          )}
        </S.ThemeBtn>
      </S.MainNav>
     </ThemeProvider>
  )
}
