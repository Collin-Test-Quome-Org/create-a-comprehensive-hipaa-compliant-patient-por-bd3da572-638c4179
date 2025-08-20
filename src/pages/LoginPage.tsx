import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      // Simulate successful login, redirect to MFA step
      setLoading(false)
      navigate('/mfa/verify')
    }, 1200)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-[#f1f5f9] to-[#e0e7ef]">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl shadow-lg px-8 py-10 w-full max-w-md border border-[#e0e7ef]"
      >
        <div className="flex flex-col items-center mb-6">
          <img src={'/branding/assets/logo-0.png'} className="w-14 h-14 mb-2" />
          <h2 className="text-2xl font-bold text-[#1d4ed8] mb-2" style={{fontFamily:'Nunito'}}>Sign in to Medishield</h2>
          <p className="text-[#64748b] text-center max-w-xs text-sm">Welcome back! Please enter your credentials to access your secure patient portal.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Label htmlFor="login-email" className="font-bold">Email</Label>
            <Input
              id="login-email"
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="login-password" className="font-bold">Password</Label>
            <Input
              id="login-password"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button id="login-submit" type="submit" className="w-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white font-bold mt-2" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm">
          <Link to="/forgot-password" className="text-[#1d4ed8] hover:underline">Forgot password?</Link>
          <Link to="/signup" className="text-[#1d4ed8] hover:underline">Create account</Link>
        </div>
      </motion.div>
    </main>
  )
}
