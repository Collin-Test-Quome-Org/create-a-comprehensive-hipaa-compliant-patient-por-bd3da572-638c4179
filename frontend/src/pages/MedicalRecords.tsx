import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FileText, Download, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const fakeRecords = [
  {
    id: 1,
    title: 'Lab Results - Hemoglobin A1C',
    date: '2024-07-01',
    provider: 'Dr. Simmons',
    type: 'Lab Result',
    encrypted: true,
  },
  {
    id: 2,
    title: 'MRI Report - Left Knee',
    date: '2024-05-20',
    provider: 'Dr. Harper',
    type: 'Imaging',
    encrypted: true,
  },
  {
    id: 3,
    title: 'Visit Summary',
    date: '2024-04-15',
    provider: 'Dr. Simmons',
    type: 'Visit',
    encrypted: true,
  },
]

export function MedicalRecords() {
  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-3xl py-10 px-2">
      <h1 className="text-2xl font-bold mb-6 text-[#1d4ed8]" style={{ fontFamily: 'Nunito, sans-serif' }}>Medical Records</h1>
      <div className="grid gap-6">
        {fakeRecords.map(record => (
          <Card key={record.id} className="shadow-md">
            <CardHeader className="flex flex-row items-center gap-3 pb-1">
              <FileText className="text-[#1d4ed8]" />
              <CardTitle className="text-lg">{record.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-slate-800 font-semibold">{record.date}</div>
                <div className="text-slate-500 text-sm">{record.provider} &bull; {record.type}</div>
                {record.encrypted && (
                  <div className="flex items-center gap-1 mt-2 text-xs text-slate-500">
                    <Lock size={16} className="text-[#1d4ed8]" /> Encrypted & HIPAA Secure
                  </div>
                )}
              </div>
              <Button variant="secondary" className="mt-3 md:mt-0" id={`download-record-${record.id}`}> 
                <Download size={18} className="mr-2"/>Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button className="mt-8 w-full md:w-auto" asChild id="upload-record-btn">
        <a href="/file-upload">Upload New Document</a>
      </Button>
    </motion.div>
  )
}
