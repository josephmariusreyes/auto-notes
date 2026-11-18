import type { RouteRecordRaw } from 'vue-router'

export const settingsRoutes: RouteRecordRaw[] = [
  {
    path: '/settings',
    component: () => import('@/app/shared/components/layouts/AppMainLayout.vue'),
    meta: {
        requiresAuth: true,
    },
    children:[
      {
        path:'',
        component: () => import('@/features/settings/containers/SettingsContainer.vue'),
      }
    ]
  },
]
