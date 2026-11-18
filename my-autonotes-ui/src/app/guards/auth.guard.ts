import type { RouteLocationNormalized, RouteLocationRaw } from 'vue-router'

export function canAccessRoute(to: RouteLocationNormalized): boolean | RouteLocationRaw {
  const isAuthenticated = to.query.auth === 'true'

  if (to.meta.guestOnly && isAuthenticated) {
    window.alert('User is authenticated')
  }

  if (!to.meta.requiresAuth) {
    return true
  }

  return isAuthenticated || '/authentication/login'
}
