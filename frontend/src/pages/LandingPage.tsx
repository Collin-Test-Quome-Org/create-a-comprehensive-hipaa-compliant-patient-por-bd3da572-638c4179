import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-blue-50">
      <div className="flex-1 flex flex-col items-center justify-start">
        <div
          style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
          className="w-full bg-cover bg-center h-96 relative"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white font-nunito mb-6 drop-shadow-lg">
                Welcome to <span className="text-blue-600">CareGuardian</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-200 font-nunito mb-8 max-w-2xl mx-auto">
                Your shield for secure, seamless healthcare. Effortlessly manage appointments, prescriptions, and records. <span className="text-blue-300">Always private. Always protected.</span>
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild id="get-started-cta" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-5 font-bold">
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button asChild id="learn-more-cta" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-5 font-bold bg-white/20 hover:bg-white/80">
                  <Link to="/home">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <section className="w-full max-w-6xl mx-auto mt-16 flex flex-col md:flex-row gap-8 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 shadow-lg bg-white rounded-xl p-8 flex flex-col items-center"
          >
            <img src="/branding/assets/logo-1.png" className="h-14 mb-4" />
            <h2 className="font-nunito font-bold text-2xl mb-2 text-slate-900">Effortless Appointments</h2>
            <p className="text-slate-600 mb-3 text-center">Schedule and manage appointments with confidence and clarity. Never miss a date, always stay in the know!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 shadow-lg bg-white rounded-xl p-8 flex flex-col items-center"
          >
            <img src="/branding/assets/logo-2.png" className="h-14 mb-4" />
            <h2 className="font-nunito font-bold text-2xl mb-2 text-slate-900">Secure Records</h2>
            <p className="text-slate-600 mb-3 text-center">Your health data is fortified with us. Access, manage, and share your records—privately and securely!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex-1 shadow-lg bg-white rounded-xl p-8 flex flex-col items-center"
          >
            <img src="/branding/assets/logo-0.png" className="h-14 mb-4" />
            <h2 className="font-nunito font-bold text-2xl mb-2 text-slate-900">Smart Prescriptions</h2>
            <p className="text-slate-600 mb-3 text-center">Manage medications with ease. Refill, review, and track your prescriptions, all in one protected place.</p>
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 mb-10 text-center"
        >
          <h3 className="text-2xl font-nunito font-bold text-blue-700 mb-2">Guard your health. Embrace true privacy.</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">Ready to step into a new era of patient empowerment? CareGuardian speaks your language: friendly, secure, and always on your side.</p>
          <Button asChild id="final-cta" size="lg" className="bg-blue-700 hover:bg-blue-800 text-white font-bold">
            <Link to="/signup">Sign Up Free</Link>
          </Button>
        </motion.div>
      </div>
      <footer className="w-full bg-slate-900 text-slate-50 py-8 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="flex items-center gap-3">
            <img src="/branding/assets/logo-0.png" className="h-8 w-8" />
            <span className="font-nunito font-bold text-lg tracking-wide">CareGuardian</span>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/home" className="hover:underline">Dashboard</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </div>
          <div className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} CareGuardian. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
