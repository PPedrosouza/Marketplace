import './global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Toaster } from "@/components/ui/sonner"

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | marketplace" />
      <Toaster richColors/>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
