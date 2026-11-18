import type { RouteRecordRaw } from 'vue-router'

export const vehiclesRoutes: RouteRecordRaw[] = [
  {
    path: '/vehicles',
    component: () => import('@/app/shared/components/layouts/AppMainLayout.vue'),
    meta: {
        requiresAuth: true,
    },
    children: [
      {
        path: 'list',
        component: () => import('@/features/vehicles/containers/VehicleListContainer.vue'),
      },
      {
        path: 'detail',
        component: () => import('@/features/vehicles/containers/VehicleDetailContainer.vue'),
      }
    ],
  },
]