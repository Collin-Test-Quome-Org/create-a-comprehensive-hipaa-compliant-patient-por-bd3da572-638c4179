import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Bell, Calendar, FileText, CheckCircle2, Pill } from 'lucide-react'
import { motion } from 'framer-motion'

const fakeNotifications = [
  {
    id: 1,
    type: 'appointment',
    title: 'Appointment Confirmed',
    message: 'Your appointment with Dr. Simmons is confirmed for 2024-07-10 at 2:00pm.',
    time: 'Today, 8:00am',
  },
  {
    id: 2,
    type: 'lab',
    title: 'Lab Results Available',
    message: 'New lab results are ready to view in your Medical Records.',
    time: 'Yesterday, 2:30pm',
  },
  {
    id: 3,
    type: 'prescription',
    title: 'Prescription Refill Approved',
    message: 'Your refill for Metformin 500mg has been approved.',
    time: '2 days ago',
  },
]

function iconFor(type: string) {
  switch (type) {
    case 'appointment': return <Calendar className="text-[#1d4ed8]" size={18} />
    case 'lab': return <FileText className="text-[#1d4ed8]" size={18} />
    case 'prescription': return <Pill className="text-[#1d4ed8]" size={18} />
    default: return <Bell className="text-[#1d4ed8]" size={18} />
  }
}

export function Notifications() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-2xl py-10 px-2">
      <h1 className="text-2xl font-bold mb-6 text-[#1d4ed8]" style={{ fontFamily: 'Nunito, sans-serif' }}>Notifications</h1>
      <div className="grid gap-6">
        {fakeNotifications.map(n => (
          <Card key={n.id} className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-3 pb-1">
              {iconFor(n.type)}
              <CardTitle className="text-base">{n.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-slate-700 mb-1">{n.message}</div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                <CheckCircle2 className="text-green-600" size={16} /> {n.time}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
