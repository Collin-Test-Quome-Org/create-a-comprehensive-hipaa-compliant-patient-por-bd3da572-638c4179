import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="relative w-full h-[32rem] flex items-center justify-center"
      style={{ backgroundImage: "url('/branding/assets/hero-0.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8]/80 via-[#94a3b8]/60 to-transparent opacity-80"></div>
      <div className="relative z-10 max-w-2xl text-center mx-auto px-6 flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-white font-bold text-5xl md:text-6xl mb-4 drop-shadow-xl"
          style={{fontFamily: 'Nunito'}}
        >
          Welcome to Medishield Portal
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-lg md:text-xl text-white/90 mb-8 font-medium"
        >
          Where security meets simplicity. Manage your health securely, with confidence and clarity.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-4"
        >
          <Button asChild id="get-started-cta" size="lg" className="bg-[#1d4ed8] text-white hover:bg-[#2563eb] font-bold text-lg px-8 rounded-md shadow-lg">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline" id="learn-more-cta" size="lg" className="border-white text-white hover:bg-white/10 px-8 font-bold text-lg rounded-md">
            <Link to="#features">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
