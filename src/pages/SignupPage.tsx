import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

export function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => {
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
          <h2 className="text-2xl font-bold text-[#1d4ed8] mb-2" style={{fontFamily:'Nunito'}}>Create Your Medishield Account</h2>
          <p className="text-[#64748b] text-center max-w-xs text-sm">Register to unlock secure access to your health records and care team.</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <Label htmlFor="signup-email" className="font-bold">Email</Label>
            <Input
              id="signup-email"
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="signup-password" className="font-bold">Password</Label>
            <Input
              id="signup-password"
              type="password"
              required
              placeholder="Create a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="signup-confirm-password" className="font-bold">Confirm Password</Label>
            <Input
              id="signup-confirm-password"
              type="password"
              required
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="mt-1"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button id="signup-submit" type="submit" className="w-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white font-bold mt-2" disabled={loading}>
            {loading ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-[#1d4ed8] hover:underline">Sign in</Link>
        </div>
      </motion.div>
    </main>
  )
}
