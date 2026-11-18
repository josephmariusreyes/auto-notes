import type { RouteRecordRaw } from 'vue-router'

export const authenticationRoutes: RouteRecordRaw[] = [
  {
    path: '/authentication',
    component: () => import('@/app/shared/components/layouts/PublicLayout.vue'),   
    meta: {
        guestOnly: true,
    },
    children:[
      {
        path: '',
        redirect: {
          name: 'login',
        },
      },
      {
        path:'login',
        component: () => import('@/features/authentication/containers/LoginContainer.vue'),
      },
      {
        path:'register',
        component: () => import('@/features/authentication/containers/RegisterContainer.vue'),
      }
    ]
  },
]
