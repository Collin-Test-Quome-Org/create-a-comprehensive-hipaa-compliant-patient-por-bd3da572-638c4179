import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Pill, Repeat2, CheckCircle2, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const fakePrescriptions = [
  {
    id: 1,
    name: 'Metformin 500mg',
    provider: 'Dr. Simmons',
    status: 'Active',
    lastFilled: '2024-06-20',
    refillsLeft: 2,
  },
  {
    id: 2,
    name: 'Lisinopril 10mg',
    provider: 'Dr. Harper',
    status: 'Pending Approval',
    lastFilled: '2024-05-15',
    refillsLeft: 0,
  },
]

export function Prescriptions() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-3xl py-10 px-2">
      <h1 className="text-2xl font-bold mb-6 text-[#1d4ed8]" style={{ fontFamily: 'Nunito, sans-serif' }}>Prescriptions</h1>
      <div className="grid gap-6">
        {fakePrescriptions.map(rx => (
          <Card key={rx.id} className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-3 pb-1">
              <Pill className="text-[#1d4ed8]" />
              <CardTitle className="text-lg">{rx.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-slate-800 font-semibold">Prescribed by {rx.provider}</div>
                <div className="text-slate-500 text-xs">Last filled: {rx.lastFilled}</div>
                <div className="flex items-center gap-2 mt-2">
                  {rx.status === 'Active' && <CheckCircle2 className="text-green-600" size={18} />}
                  {rx.status === 'Pending Approval' && <Clock className="text-yellow-500" size={18} />}
                  <span className="text-xs text-slate-500">{rx.status}</span>
                </div>
              </div>
              <Button variant="secondary" className="mt-3 md:mt-0 flex items-center gap-2" id={`refill-rx-${rx.id}`}> 
                <Repeat2 size={18} />Request Refill
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
