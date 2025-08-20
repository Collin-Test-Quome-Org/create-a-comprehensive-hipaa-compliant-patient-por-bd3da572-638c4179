import { Hero } from '@/components/Hero'
import { motion } from 'framer-motion'

export function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#f1f5f9] to-[#e0e7ef]">
      <Hero />
      <section id="features" className="max-w-5xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#1d4ed8]"
          style={{fontFamily: 'Nunito'}}
        >
          A Fortress for Your Health Data
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <FeatureCard 
            title="Private by Design"
            description="Your health data stays between us and you. We use advanced encryption and secure cloud storage to keep your information safe—always."
            icon={
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-[#1d4ed8]">
                <path d="M12 3l9 4.5v6c0 5.25-4.5 9.75-9 12-4.5-2.25-9-6.75-9-12v-6L12 3z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            }
          />
          <FeatureCard 
            title="Effortless Management"
            description="View appointments, access documents, and manage prescriptions all in one serene dashboard—no technical skills required."
            icon={
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-[#1d4ed8]">
                <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="7" y="10" width="10" height="2" rx="1" fill="currentColor" />
              </svg>
            }
          />
          <FeatureCard 
            title="24/7 Peace of Mind"
            description="Medishield Portal stands vigilant—so you can rest easy knowing your health journey is protected, day and night."
            icon={
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="text-[#1d4ed8]">
                <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            }
          />
        </div>
      </section>
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="bg-[#1d4ed8] py-12 mt-16"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{fontFamily: 'Nunito'}}>"With Medishield, you are the guardian of your wellbeing."</h3>
          <p className="text-white/80 text-lg mb-6">Sign up today and discover a new era of secure, patient-centered care. Your journey to peace of mind starts here.</p>
          <a href="/signup">
            <button id="footer-signup-cta" className="bg-white text-[#1d4ed8] font-bold px-8 py-3 rounded-md shadow hover:bg-[#f1f5f9] transition">Join Now</button>
          </a>
        </div>
      </motion.section>
    </main>
  )
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-[#e0e7ef] hover:shadow-lg hover:scale-105 transition-all"
    >
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold text-[#1d4ed8] mb-2" style={{fontFamily: 'Nunito'}}>{title}</h4>
      <p className="text-[#334155] text-base">{description}</p>
    </motion.div>
  )
}
