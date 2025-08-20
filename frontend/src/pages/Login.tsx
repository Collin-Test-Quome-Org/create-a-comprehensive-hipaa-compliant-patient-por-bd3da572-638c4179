import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please provide both email and password.')
      return
    }
    // Mock: any credentials work
    setTimeout(() => {
      navigate('/dashboard')
    }, 700)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-sm py-10 px-2">
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl text-[#1d4ed8]">Secure Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium mb-1">Email</label>
              <Input id="login-email" type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium mb-1">Password</label>
              <Input id="login-password" type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <Button type="submit" className="w-full" id="login-btn">Sign In</Button>
            <div className="flex justify-between mt-2 text-xs">
              <Link to="/forgot-password" className="text-[#1d4ed8] hover:underline">Forgot password?</Link>
              <Link to="/signup" className="text-[#1d4ed8] hover:underline">Create account</Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
