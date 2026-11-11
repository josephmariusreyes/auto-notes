import { Navigate, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
  },
  {
    lazy: async () => ({ Component: (await import('../shared/layouts/PublicLayout')).default }),
    children: [
      {
        path: '/auth/login',
        lazy: async () => ({ Component: (await import('../../features/authentication/containers/LoginContainer')).default }),
      },
      {
        path: '/user-accounts/register-user',
        lazy: async () => ({ Component: (await import('../../features/user-accounts/containers/RegisterUserContainer')).default }),
      },
    ],
  },
  {
    lazy: async () => ({ Component: (await import('../shared/layouts/AuthenticatedLayout')).default }),
    children: [
      {
        path: '/user-accounts/user-listing',
        lazy: async () => ({ Component: (await import('../../features/user-accounts/containers/UserListing')).default }),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/auth/login" replace />,
  },
])

export default router
