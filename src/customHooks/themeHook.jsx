import { useState } from 'react'
import { lightTheme, darkTheme } from "../constants/themes";

// export const themes = {
//   light: {
//     color: '#282c34',
//     background: '#fff',
//   },
//   dark: {
//     color: '#fff',
//     background: '#282c34',
//   },
// }

// export const ThemeContext = React.createContext({
//   theme: themes.dark,
//   toggleTheme: () => {},
// })

// export const useThemeContext = () => {
//   const theme = useContext(ThemeContext)
//   if (!theme) return theme.dark
//   return theme
// }

export const useThemes = () => {
	const [theme, setTheme] = useState(darkTheme);


  const handleChangeTheme = () => {
	setTheme(theme === lightTheme ? darkTheme : lightTheme);
	// console.log('theme', theme);
  }

  // console.log('theme', theme)

  return { theme, handleChangeTheme }
}
