import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const heroBg = "/branding/assets/hero-0.png"

export function Home() {
  return (
    <>
      <section className="relative w-full h-[480px] md:h-[540px] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url('${heroBg}')`}}>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="/branding/assets/logo-0.png" className="w-14 h-14 rounded-full shadow-lg" />
            <span className="text-2xl md:text-3xl font-bold text-white tracking-tight font-nunito">BlueShield Portal</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold font-nunito mb-4 drop-shadow-lg">Empowering Your Health, Securely.</h1>
          <p className="text-slate-100 text-lg md:text-xl font-nunito mb-6 max-w-xl mx-auto">Welcome to BlueShield Portal: Your all-in-one, secure platform to manage appointments, prescriptions, and medical records. Trusted by modern patients who value privacy and convenience. </p>
          <div className="flex gap-4 justify-center">
            <Button id="hero-signup" size="lg" className="bg-blue-700 text-white shadow-xl text-base font-semibold" asChild>
              <a href="/signup">Get Started <ArrowRight className="inline ml-2 w-5 h-5" /></a>
            </Button>
            <Button id="hero-login" size="lg" variant="outline" className="border-white text-white text-base font-semibold hover:bg-white hover:text-blue-700" asChild>
              <a href="/login">Login</a>
            </Button>
          </div>
        </motion.div>
      </section>
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} transition={{delay: 0.1}} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="bg-blue-100 text-blue-700 rounded-full p-3 mb-4">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M16 3h-8a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2z" /></svg>
            </span>
            <h3 className="font-bold text-xl text-blue-900 mb-2">Medical Records</h3>
            <p className="text-slate-600 mb-4">Access all your records securely, anytime, anywhere. Say goodbye to paper trails!</p>
            <Button id="feature-records" variant="ghost" asChild>
              <a href="/medical-records">View Records</a>
            </Button>
          </motion.div>
          <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} transition={{delay: 0.2}} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="bg-blue-100 text-blue-700 rounded-full p-3 mb-4">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 21h8m-4-4v4m0-4V5m0 0a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0z" /></svg>
            </span>
            <h3 className="font-bold text-xl text-blue-900 mb-2">Appointments</h3>
            <p className="text-slate-600 mb-4">Book, manage, and review appointments with your providers in a flash.</p>
            <Button id="feature-appointments" variant="ghost" asChild>
              <a href="/appointments">Book Now</a>
            </Button>
          </motion.div>
          <motion.div initial={{y: 40, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} transition={{delay: 0.3}} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <span className="bg-blue-100 text-blue-700 rounded-full p-3 mb-4">
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h10v10H7z" /></svg>
            </span>
            <h3 className="font-bold text-xl text-blue-900 mb-2">Prescriptions</h3>
            <p className="text-slate-600 mb-4">Manage refills and track medications with modern peace of mind.</p>
            <Button id="feature-prescriptions" variant="ghost" asChild>
              <a href="/prescriptions">Refill Now</a>
            </Button>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-blue-100 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 0.7}} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3 font-nunito">Why BlueShield Portal?</h2>
            <p className="text-slate-600 text-lg font-nunito">We believe healthcare should be secure, simple, and always within your control. Our company, BlueShield, is your digital health guardian, trusted by patients who expect the best. <span className="font-bold text-blue-700">Your health, your data, your way!</span></p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="flex flex-col items-center md:items-start md:w-1/2">
              <ul className="list-none space-y-4 text-left">
                <li className="flex items-center gap-3">
                  <span className="bg-blue-700 text-white rounded-full p-2"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4" /></svg></span>
                  <span className="font-medium text-blue-900">End-to-end encryption for all your data</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-700 text-white rounded-full p-2"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg></span>
                  <span className="font-medium text-blue-900">Easy, secure appointment scheduling</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-700 text-white rounded-full p-2"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" /></svg></span>
                  <span className="font-medium text-blue-900">Document and file uploads for all providers</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-blue-700 text-white rounded-full p-2"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /><path d="M16 2v4a2 2 0 0 1-2 2H6" /></svg></span>
                  <span className="font-medium text-blue-900">Streamlined prescriptions and medication tracking</span>
                </li>
              </ul>
            </div>
            <div className="flex md:w-1/2 items-center justify-center">
              <img src="/branding/assets/logo-2.png" className="w-40 h-40 rounded-lg shadow-2xl border border-blue-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
