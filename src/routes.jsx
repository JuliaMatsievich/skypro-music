import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main'
import { Favorites } from './pages/favorites'
import { Category } from './pages/category'
import { ProtectedRoute } from './components/protedcted-route'
import { NotFound } from './pages/notfound'
import AuthPage from './pages/Auth/AuthPage'
import { useContext } from 'react'
import { UserContext } from './App'

export const AppRoutes = ({ tracks, allTracksError, isLoading }) => {
  const { isUser, setIsUser, logIn, logOut } = useContext(UserContext)

  return (
    <Routes>
      <Route
        path="/login"
        element={<AuthPage isLoginMode={true}></AuthPage>}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false}></AuthPage>}
      ></Route>
      <Route element={<ProtectedRoute isAllowed={isUser} />}>
        <Route
          path="/"
          element={
            <MainPage
              tracks={tracks}
              allTracksError={allTracksError}
              isLoading={isLoading}
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
