import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoutes'

function App() {
  return <RouterProvider router={router} fallbackElement={<div className="route-loader">Loading...</div>} />
}

export default App
