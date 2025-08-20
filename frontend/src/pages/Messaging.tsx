import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MessageCircle, Lock, SendHorizonal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useState } from 'react'

const fakeThreads = [
  {
    id: 1,
    provider: 'Dr. Simmons',
    lastMessage: 'Please schedule your follow-up.',
    unread: true,
    time: 'Yesterday',
  },
  {
    id: 2,
    provider: 'Nurse Taylor',
    lastMessage: 'Your prescription refill has been approved.',
    unread: false,
    time: '2 days ago',
  },
]

export function Messaging() {
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSend() {
    if (message.trim()) {
      setSent(true)
      setTimeout(() => setSent(false), 1200)
      setMessage('')
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-2xl py-10 px-2">
      <h1 className="text-2xl font-bold mb-6 text-[#1d4ed8]" style={{ fontFamily: 'Nunito, sans-serif' }}>Secure Messaging</h1>
      <Card className="shadow-md mb-6">
        <CardHeader className="flex flex-row items-center gap-3 pb-1">
          <MessageCircle className="text-[#1d4ed8]" />
          <CardTitle className="text-lg">Message Inbox <Lock size={16} className="inline text-[#1d4ed8] ml-1" /></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {fakeThreads.map(thread => (
              <div key={thread.id} className={`py-3 flex flex-col gap-0.5 ${thread.unread ? 'bg-blue-50 rounded' : ''}`}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700">{thread.provider}</span>
                  {thread.unread && <span className="ml-2 bg-[#1d4ed8] text-white px-2 py-0.5 rounded text-xs">unread</span>}
                  <span className="text-xs text-slate-400 ml-auto">{thread.time}</span>
                </div>
                <div className="text-slate-600 text-sm mt-0.5">{thread.lastMessage}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <form onSubmit={e => { e.preventDefault(); handleSend(); }}>
        <div className="flex gap-2 items-end">
          <input
            id="compose-message-input"
            className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#1d4ed8]"
            placeholder="Type a message to your care team..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            autoComplete="off"
          />
          <Button type="submit" variant="default" id="send-message-btn" disabled={!message.trim()}>
            <SendHorizonal size={16} className="mr-1"/>Send
          </Button>
        </div>
        {sent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 bg-green-100 text-green-800 rounded flex items-center gap-2">
            <SendHorizonal size={16} /> Message sent securely!
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
