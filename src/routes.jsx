import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main'
import { Favorites } from './pages/favorites'
import { Category } from './pages/category'
import { Login } from './pages/login'
import { ProtectedRoute } from './components/protedcted-route'
import { Register } from './pages/register'
import { NotFound } from './pages/notfound'

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
