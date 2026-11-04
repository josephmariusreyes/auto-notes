import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const PublicLayout = lazy(() => import('../shared/layouts/PublicLayout'))
const AuthenticatedLayout = lazy(() => import('../shared/layouts/AuthenticatedLayout'))

const LoginContainer = lazy(() => import('../../features/authentication/containers/LoginContainer'))
const RegisterUserContainer = lazy(() => import('../../features/user-accounts/containers/RegisterUserContainer'))
const UserListing = lazy(() => import('../../features/user-accounts/containers/UserListing'))

function AppRoutes() {
  return (
    <Suspense fallback={<div className="route-loader">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />

        <Route element={<PublicLayout />}>
          <Route path="/auth/login" element={<LoginContainer />} />
          <Route path="/user-accounts/register-user" element={<RegisterUserContainer />} />
        </Route>

        <Route element={<AuthenticatedLayout />}>
          <Route path="/user-accounts/user-listing" element={<UserListing />} />
        </Route>

        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
