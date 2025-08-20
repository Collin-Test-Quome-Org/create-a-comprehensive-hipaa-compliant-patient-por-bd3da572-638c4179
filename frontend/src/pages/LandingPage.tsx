import { Hero } from '@/components/Hero'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-nunito text-blue-900" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
            A HIPAA-Compliant Portal for Secure, Connected Care
          </h2>
          <p className="mx-auto text-slate-700 text-lg md:text-xl max-w-2xl">
            ShieldHealth Portal keeps your health information private and your care team connected. Access your records, schedule visits, manage prescriptions, and message providers securely – all in one place.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 w-72 border-t-4 border-blue-700"
            whileHover={{ scale: 1.04 }}
          >
            <img src="/branding/assets/logo-1.png" className="w-12 h-12 mx-auto mb-3" />
            <h3 className="font-bold text-blue-900 mb-1">Medical Records</h3>
            <p className="text-slate-600 mb-4">Encrypted access to your complete health history, always at your fingertips.</p>
            <Button asChild variant="outline" id="feature-records-btn" className="w-full">
              <Link to="/medical-records">View Records</Link>
            </Button>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 w-72 border-t-4 border-blue-700"
            whileHover={{ scale: 1.04 }}
          >
            <img src="/branding/assets/logo-2.png" className="w-12 h-12 mx-auto mb-3" />
            <h3 className="font-bold text-blue-900 mb-1">Appointments</h3>
            <p className="text-slate-600 mb-4">Book, view, and manage your healthcare appointments in seconds.</p>
            <Button asChild variant="outline" id="feature-appts-btn" className="w-full">
              <Link to="/appointments">Schedule Visit</Link>
            </Button>
          </motion.div>
          <motion.div
            className="bg-white shadow-lg rounded-xl p-6 w-72 border-t-4 border-blue-700"
            whileHover={{ scale: 1.04 }}
          >
            <img src="/branding/assets/logo-0.png" className="w-12 h-12 mx-auto mb-3" />
            <h3 className="font-bold text-blue-900 mb-1">Secure Messaging</h3>
            <p className="text-slate-600 mb-4">Safely communicate with your care team via encrypted chat.</p>
            <Button asChild variant="outline" id="feature-messaging-btn" className="w-full">
              <Link to="/messaging">Message Provider</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
