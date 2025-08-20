import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email || !password || !confirm) {
      setError('Please fill out all fields.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setTimeout(() => {
      navigate('/dashboard')
    }, 700)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-sm py-10 px-2">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-[#1d4ed8]">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="signup-email" type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
            </div>
            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium mb-1">Password</label>
              <Input id="signup-password" type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="new-password" />
            </div>
            <div>
              <label htmlFor="signup-confirm" className="block text-sm font-medium mb-1">Confirm Password</label>
              <Input id="signup-confirm" type="password" value={confirm} onChange={e => setConfirm(e.target.value)} autoComplete="new-password" />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <Button type="submit" className="w-full" id="signup-btn">Create Account</Button>
            <div className="flex justify-between mt-2 text-xs">
              <span></span>
              <Link to="/login" className="text-[#1d4ed8] hover:underline">Sign in instead</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
