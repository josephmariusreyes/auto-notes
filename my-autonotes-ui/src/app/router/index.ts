import { createRouter, createWebHistory } from 'vue-router'

import { authenticationRoutes } from '@/features/authentication/routes/authentication.routes'
import { dashboardRoutes } from '@/features/dashboard/routes/dashboard.routes'
import { settingsRoutes } from '@/features/settings/routes/settings.routes'
import { vehiclesRoutes } from '@/features/vehicles/routes/vehicles.routes'
import { canAccessRoute } from '@/app/guards/auth.guard'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: '/',
			redirect: '/authentication/login',
		},
    ...authenticationRoutes,
    ...dashboardRoutes,
    ...settingsRoutes,
    ...vehiclesRoutes,
  ],
})
router.beforeEach((to) => canAccessRoute(to))

export default router
