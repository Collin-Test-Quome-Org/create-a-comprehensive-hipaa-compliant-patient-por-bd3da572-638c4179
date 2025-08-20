import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { LandingPage } from '@/pages/LandingPage'

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future: Add Login, Signup, Dashboard routes here */}
      </Routes>
    </BrowserRouter>
  )
}
