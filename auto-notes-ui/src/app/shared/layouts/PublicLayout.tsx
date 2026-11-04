import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div className="layout layout--public">
      <header className="layout__header">
        <h1>Public Area</h1>
      </header>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}

export default PublicLayout
