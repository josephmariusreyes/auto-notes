import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('@/app/shared/components/layouts/AppMainLayout.vue'),
    meta: {
        requiresAuth: true,
    },
    children:[
      {
        path:'',
        component: () => import('@/features/dashboard/containers/DashboardContainer.vue'),
      }
    ]
  },
]
