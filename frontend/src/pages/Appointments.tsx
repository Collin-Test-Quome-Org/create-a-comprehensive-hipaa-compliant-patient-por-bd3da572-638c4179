import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Calendar, CheckCircle2, XCircle, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const fakeAppointments = [
  {
    id: 1,
    date: '2024-07-10',
    time: '2:00pm',
    provider: 'Dr. Simmons',
    status: 'Confirmed',
  },
  {
    id: 2,
    date: '2024-07-22',
    time: '11:00am',
    provider: 'Dr. Harper',
    status: 'Pending',
  },
  {
    id: 3,
    date: '2024-05-18',
    time: '9:00am',
    provider: 'Dr. Simmons',
    status: 'Completed',
  },
]

const statusIcon = (status: string) => {
  if (status === 'Confirmed') return <CheckCircle2 className="text-green-600" size={18} />
  if (status === 'Pending') return <Clock className="text-yellow-500" size={18} />
  if (status === 'Completed') return <CheckCircle2 className="text-blue-600" size={18} />
  if (status === 'Cancelled') return <XCircle className="text-red-600" size={18} />
  return null
}

export function Appointments() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-3xl py-10 px-2">
      <h1 className="text-2xl font-bold mb-6 text-[#1d4ed8]" style={{ fontFamily: 'Nunito, sans-serif' }}>Appointments</h1>
      <div className="grid gap-6">
        {fakeAppointments.map(apt => (
          <Card key={apt.id} className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-3 pb-1">
              <Calendar className="text-[#1d4ed8]" />
              <CardTitle className="text-lg">{apt.date} at {apt.time}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-slate-800 font-semibold">{apt.provider}</div>
                <div className="flex items-center gap-2 mt-2">
                  {statusIcon(apt.status)}
                  <span className="text-xs text-slate-500">{apt.status}</span>
                </div>
              </div>
              <Button variant="secondary" className="mt-3 md:mt-0" id={`details-apt-${apt.id}`}>Manage</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="mt-8 w-full md:w-auto" asChild id="book-appointment-btn">
        <a href="/appointments/new">Book New Appointment</a>
      </Button>
    </motion.div>
  )
}
