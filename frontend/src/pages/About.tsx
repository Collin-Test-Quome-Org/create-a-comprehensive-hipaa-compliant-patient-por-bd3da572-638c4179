import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-slate-100 py-16">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl text-center">
        <img src="/branding/assets/logo-1.png" className="w-20 h-20 mb-6 mx-auto" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-nunito">About BlueShield Portal</h1>
        <p className="text-lg text-slate-700 font-nunito mb-4">We're BlueShield, your trusted digital health guardian. Our team is on a mission to empower you with secure, seamless access to every part of your healthcare journey.</p>
        <p className="text-md text-slate-600 mb-6">We believe in a world where health data is always in your hands—encrypted, private, and beautifully easy to use. BlueShield Portal is built for modern patients who demand security <span className="font-semibold text-blue-700">and</span> simplicity. Whether you’re booking appointments, messaging providers, or organizing your health history, we’ve got your back, always.</p>
        <div className="flex gap-4 justify-center">
          <a href="/signup" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg font-bold shadow-lg hover:bg-blue-800 transition">Join Us</a>
          <a href="/login" className="inline-block px-6 py-3 border border-blue-700 text-blue-800 rounded-lg font-bold shadow hover:bg-blue-50 transition">Login</a>
        </div>
      </motion.div>
    </section>
  )
}
