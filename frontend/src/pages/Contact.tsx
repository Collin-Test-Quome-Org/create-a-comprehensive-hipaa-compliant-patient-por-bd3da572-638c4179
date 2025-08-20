import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Contact() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center py-16 bg-gradient-to-b from-white to-blue-50">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-5 font-nunito text-center">Contact BlueShield</h1>
        <p className="text-slate-600 mb-6 text-center">We're here for you! Have a question or need help? Our team responds within 24 hours.</p>
        <form className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="block font-nunito text-blue-800 mb-1">Name</label>
            <Input id="contact-name" required placeholder="Your Name"/>
          </div>
          <div>
            <label htmlFor="contact-email" className="block font-nunito text-blue-800 mb-1">Email</label>
            <Input id="contact-email" required type="email" placeholder="you@email.com"/>
          </div>
          <div>
            <label htmlFor="contact-message" className="block font-nunito text-blue-800 mb-1">Message</label>
            <Textarea id="contact-message" required placeholder="How can we help?"/>
          </div>
          <Button id="contact-submit" className="w-full bg-blue-700 text-white font-bold py-2" type="submit">Send Message</Button>
        </form>
      </motion.div>
    </section>
  )
}
