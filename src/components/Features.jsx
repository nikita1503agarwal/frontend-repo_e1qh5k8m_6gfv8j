import { motion } from 'framer-motion'
import { Sparkles, Gauge, Waves, Smartphone, Zap, Hand } from 'lucide-react'

const features = [
  {
    icon: Waves,
    title: 'Adaptive ambience',
    desc: 'Breathes with your space using sound-reactive gradients and circadian tones.',
  },
  {
    icon: Gauge,
    title: 'Focus & calm modes',
    desc: 'Scenes tuned by designers to help you get in the zone or unwind.',
  },
  {
    icon: Smartphone,
    title: 'Tap & app control',
    desc: 'One-tap on the lamp or full control from your phone. Your light, your way.',
  },
  {
    icon: Zap,
    title: 'Dynamic diffusion',
    desc: 'A custom optic turns LEDs into seamless color fields—no hotspots.',
  },
  {
    icon: Hand,
    title: 'Sculptural object',
    desc: 'Machined aluminum base with a satin finish. Looks good off, looks better on.',
  },
  {
    icon: Sparkles,
    title: 'Quietly smart',
    desc: 'Learns your routine and adjusts subtly. No nags, no noise.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center text-3xl font-bold sm:text-4xl">
          Designed for human moments
        </motion.h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/50 p-6 backdrop-blur-xl transition hover:shadow-xl dark:border-white/10 dark:bg-white/10">
              <div className="relative z-10">
                <f.icon className="h-6 w-6 text-fuchsia-500" />
                <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{f.desc}</p>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-fuchsia-400/20 to-indigo-400/20 blur-2xl transition duration-300 group-hover:scale-125" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
