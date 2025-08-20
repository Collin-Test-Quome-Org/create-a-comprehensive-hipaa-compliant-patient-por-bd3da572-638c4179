import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export function MfaVerifyPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleMfa(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setTimeout(() => {
      if (code === '123456' || code.length === 6) {
        setLoading(false)
        navigate('/dashboard')
      } else {
        setLoading(false)
        setError('Invalid code. Please try again.')
      }
    }, 1000)
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
          <h2 className="text-2xl font-bold text-[#1d4ed8] mb-2" style={{fontFamily:'Nunito'}}>Multi-Factor Authentication</h2>
          <p className="text-[#64748b] text-center max-w-xs text-sm">Enter the 6-digit code sent to your email or mobile device.</p>
        </div>
        <form onSubmit={handleMfa} className="space-y-6">
          <div>
            <Label htmlFor="mfa-code" className="font-bold">Verification Code</Label>
            <Input
              id="mfa-code"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              required
              maxLength={6}
              value={code}
              onChange={e => setCode(e.target.value.replace(/\D/g, ''))}
              className="mt-1 tracking-widest text-center text-lg font-mono letter-spacing-wider"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <Button id="mfa-submit" type="submit" className="w-full bg-[#1d4ed8] hover:bg-[#2563eb] text-white font-bold mt-2" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify'}
          </Button>
        </form>
      </motion.div>
    </main>
  )
}
