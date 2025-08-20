import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { Dashboard } from '@/pages/Dashboard'
import { MedicalRecords } from '@/pages/MedicalRecords'
import { Appointments } from '@/pages/Appointments'
import { Prescriptions } from '@/pages/Prescriptions'
import { FileUpload } from '@/pages/FileUpload'
import { Messaging } from '@/pages/Messaging'
import { Notifications } from '@/pages/Notifications'
import { Login } from '@/pages/Login'
import { Signup } from '@/pages/Signup'

export function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/prescriptions" element={<Prescriptions />} />
        <Route path="/file-upload" element={<FileUpload />} />
        <Route path="/messages" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}
