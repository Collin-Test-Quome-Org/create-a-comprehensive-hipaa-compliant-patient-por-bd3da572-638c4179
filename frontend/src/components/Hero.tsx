import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="w-full relative">
      <div
        style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
        className="bg-cover bg-center h-[28rem] md:h-[34rem] flex items-center"
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-blue-200/10 flex items-center">
          <div className="container mx-auto px-4 flex flex-col items-start justify-center h-full">
            <motion.h1
              className="text-white text-4xl md:text-5xl font-nunito font-extrabold mb-4 drop-shadow"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}
            >
              Secure. Seamless. Empowered.
              <br />
              <span className="text-blue-200">Patient Portal</span>
            </motion.h1>
            <motion.p
              className="text-slate-200 text-lg md:text-2xl max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 400 }}
            >
              Welcome to ShieldHealth Portal – giving patients and providers the tools they need for secure healthcare access, anytime, anywhere.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
              <Button asChild size="lg" id="cta-get-started" className="bg-blue-700 text-white hover:bg-blue-800 font-bold px-8 py-4 text-lg shadow-lg">
                <Link to="/signup">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
