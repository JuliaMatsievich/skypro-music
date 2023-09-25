import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main'
import { Favorites } from './pages/favorites'
import { Category } from './pages/category'
import { ProtectedRoute } from './components/protedcted-route'
import { NotFound } from './pages/notfound'
import AuthPage from './pages/Auth/AuthPage'

export const AppRoutes = ({
  token,
  setToken,
  tracks,
  allTracksError,
  isLoading,
}) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<AuthPage isLoginMode={true} setToken={setToken}></AuthPage>}
      ></Route>
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false} setToken={setToken}></AuthPage>}
      ></Route>
      <Route element={<ProtectedRoute isAllowed={token} />}>
        <Route
          path="/"
          element={
            <MainPage
              isLoginMode={true}
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
