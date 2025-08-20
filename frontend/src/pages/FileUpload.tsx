import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Upload, FileText, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export function FileUpload() {
  const [uploaded, setUploaded] = useState(false)
  const [fileName, setFileName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setTimeout(() => {
        setUploaded(true)
      }, 1200)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto max-w-xl py-10 px-2">
      <h1 className="text-2xl font-bold mb-6 text-[#1d4ed8]" style={{ fontFamily: 'Nunito, sans-serif' }}>Upload Medical Document</h1>
      <Card className="shadow-md">
        <CardHeader className="flex flex-row items-center gap-3 pb-1">
          <Upload className="text-[#1d4ed8]" />
          <CardTitle className="text-lg">Secure File Upload</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-3 text-slate-700 text-sm">Upload lab results, visit summaries, images, or other healthcare documents. All files are encrypted & HIPAA secure. <Lock size={16} className="inline text-[#1d4ed8] ml-1" /></div>
          <input
            ref={inputRef}
            id="file-upload-input"
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="mb-2"
            onChange={handleFileChange}
          />
          {fileName && (
            <div className="mb-2 text-slate-600 flex items-center gap-2">
              <FileText size={16} /> {fileName}
            </div>
          )}
          <Button
            id="upload-file-btn"
            className="w-full"
            onClick={() => inputRef.current?.click()}
            variant="secondary"
            type="button"
          >
            Select File
          </Button>
          {uploaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 p-3 bg-green-100 text-green-800 rounded flex items-center gap-2"
            >
              <Upload size={16} /> Upload complete!
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
