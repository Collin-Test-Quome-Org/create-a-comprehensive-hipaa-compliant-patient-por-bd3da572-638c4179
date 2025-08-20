import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Calendar, MessageCircle, FileText, Pill } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Dashboard() {
  // Fake data for demo
  const notifications = [
    { id: 1, message: 'Upcoming appointment with Dr. Simmons tomorrow at 2:00pm' },
    { id: 2, message: 'Lab results available for your review' },
  ]
  const nextAppointment = {
    date: '2024-07-10',
    time: '2:00pm',
    provider: 'Dr. Simmons',
    status: 'Confirmed',
  }
  const unreadMessages = 2
  const prescriptions = 3
  const newDocuments = 1

  return (
    <motion.div 
      initial={{ opacity: 0, y: 32 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="container mx-auto max-w-5xl py-10 px-2"
    >
      <h1 className="font-bold text-3xl mb-4 text-[#1d4ed8] tracking-tight" style={{ fontFamily: 'Nunito, sans-serif' }}>Welcome to MyHealth Secure Portal</h1>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Calendar className="text-[#1d4ed8]" />
            <CardTitle className="text-lg">Next Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-slate-700 font-semibold">{nextAppointment.date} at {nextAppointment.time}</div>
            <div className="text-slate-500 text-sm">with {nextAppointment.provider}</div>
            <div className="mt-2">
              <span className="inline-block bg-green-100 text-green-700 rounded px-2 py-1 text-xs">{nextAppointment.status}</span>
            </div>
            <Button asChild className="mt-4 w-full" id="view-appointments-btn">
              <Link to="/appointments">View Appointments</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <Bell className="text-[#1d4ed8]" />
            <CardTitle className="text-lg">Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-slate-700">
              {notifications.map(n => (
                <li key={n.id} className="mb-1">{n.message}</li>
              ))}
            </ul>
            <Button asChild className="mt-4 w-full" id="view-notifications-btn">
              <Link to="/notifications">All Notifications</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="shadow-md">
          <CardHeader className="flex flex-row gap-2 items-center pb-2">
            <MessageCircle className="text-[#1d4ed8]" />
            <CardTitle className="text-base">Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">{unreadMessages}</div>
            <div className="text-slate-500 text-xs mb-2">Unread</div>
            <Button asChild variant="secondary" className="w-full" id="dashboard-messages-btn">
              <Link to="/messages">Inbox</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row gap-2 items-center pb-2">
            <Pill className="text-[#1d4ed8]" />
            <CardTitle className="text-base">Prescriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">{prescriptions}</div>
            <div className="text-slate-500 text-xs mb-2">Active</div>
            <Button asChild variant="secondary" className="w-full" id="dashboard-prescriptions-btn">
              <Link to="/prescriptions">View</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row gap-2 items-center pb-2">
            <FileText className="text-[#1d4ed8]" />
            <CardTitle className="text-base">New Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800">{newDocuments}</div>
            <div className="text-slate-500 text-xs mb-2">Uploaded</div>
            <Button asChild variant="secondary" className="w-full" id="dashboard-medical-records-btn">
              <Link to="/medical-records">Records</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
