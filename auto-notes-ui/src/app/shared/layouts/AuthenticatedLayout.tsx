import { Outlet } from 'react-router-dom'

function AuthenticatedLayout() {
  return (
    <div className="layout layout--authenticated">
      <header className="layout__header">
        <h1>Authenticated Area</h1>
      </header>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthenticatedLayout
