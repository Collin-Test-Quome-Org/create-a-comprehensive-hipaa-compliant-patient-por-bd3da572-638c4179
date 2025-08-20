import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/pages/HomePage'
import { LandingPage } from '@/pages/LandingPage'
import { LoginPage } from '@/pages/LoginPage'
import { SignupPage } from '@/pages/SignupPage'
import { MfaVerifyPage } from '@/pages/MfaVerifyPage'

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mfa/verify" element={<MfaVerifyPage />} />
        {/* Future: Add Dashboard, Records, etc. */}
      </Routes>
    </BrowserRouter>
  )
}
