import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-5xl mx-auto px-5 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="font-nunito font-bold text-4xl md:text-5xl mb-4 drop-shadow"
            >
              Welcome to your CareGuardian Dashboard
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl mb-6 text-slate-100"
            >
              All your appointments, prescriptions, and records—
              <span className="text-slate-200 font-semibold"> organized, secure, and always at your fingertips.</span>
            </motion.p>
            <div className="flex gap-4">
              <Button id="appointments-btn" className="bg-white text-blue-700 font-bold hover:bg-slate-100">Appointments</Button>
              <Button id="records-btn" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 font-bold">Records</Button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 flex justify-center"
          >
            <img src="/branding/assets/hero-0.png" className="rounded-xl shadow-2xl max-h-72 w-auto" />
          </motion.div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="font-nunito font-bold text-2xl text-blue-700 mb-8">What you can do:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/branding/assets/logo-1.png" className="h-10 mb-2" />
            <h3 className="font-nunito font-bold text-lg mb-1 text-slate-900">Schedule & Track</h3>
            <p className="text-slate-600 text-center">Book appointments fast and get reminders—never miss a beat.</p>
          </div>
          <div className="bg-slate-50 rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/branding/assets/logo-2.png" className="h-10 mb-2" />
            <h3 className="font-nunito font-bold text-lg mb-1 text-slate-900">All Records, One Place</h3>
            <p className="text-slate-600 text-center">Access all your health info, files, and notes anytime, anywhere.</p>
          </div>
          <div className="bg-slate-50 rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/branding/assets/logo-0.png" className="h-10 mb-2" />
            <h3 className="font-nunito font-bold text-lg mb-1 text-slate-900">Medication Made Easy</h3>
            <p className="text-slate-600 text-center">Refill, track, and manage prescriptions in seconds.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
