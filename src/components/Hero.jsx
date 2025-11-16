import { motion } from 'framer-motion'
import { Sparkles, MoveRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28">
      {/* Background gradient and orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-40 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(79,70,229,0.15),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-fuchsia-400/30 via-violet-400/20 to-indigo-400/30 blur-3xl"/>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium backdrop-blur-lg dark:border-white/10 dark:bg-white/10">
              <Sparkles className="h-3 w-3 text-fuchsia-500" />
              New: Ambient light that breathes with your space
            </motion.div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.05 }} className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              The Sphere Lamp
              <span className="block bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent">that feels alive</span>
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 max-w-xl text-base text-black/70 dark:text-white/70">
              A sculptural light object with responsive gradients, touch controls, and adaptive scenes. Designed for focus, calm, and wonder.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow-lg shadow-black/20 transition-all hover:translate-y-[-1px] hover:shadow-black/30 dark:bg-white dark:text-black">
                Preorder now
                <MoveRight className="h-4 w-4" />
              </a>
              <a href="#design" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-3 text-black/80 backdrop-blur-lg transition hover:bg-white/80 dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Play className="h-4 w-4" />
                Watch demo
              </a>
            </motion.div>
          </div>

          {/* Animated 3D sphere */}
          <div className="relative">
            <Orb />
          </div>
        </div>
      </div>
    </section>
  )
}

function Orb() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      {/* Glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
        className="pointer-events-none absolute -inset-16 rounded-full border-2 border-transparent [background:conic-gradient(from_var(--angle),theme(colors.fuchsia.400),theme(colors.violet.500),theme(colors.indigo.400),theme(colors.fuchsia.400))] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[2px] animate-[spin_8s_linear_infinite]"
        style={{ '--angle': '0deg' }}
      />

      {/* Sphere */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative grid h-full place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#f1e8ff_35%,#c7b9ff_60%,#a7a6ff_100%)] shadow-2xl"
      >
        {/* Inner gradient aurora */}
        <motion.div
          animate={{ rotate: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(236,72,153,0.35),rgba(99,102,241,0.25),rgba(79,70,229,0.35),rgba(236,72,153,0.35))] mix-blend-multiply blur-2xl"
        />

        {/* Specular highlight */}
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
        <div className="absolute right-1/5 bottom-1/4 h-8 w-24 rotate-12 rounded-full bg-white/50 blur-xl" />

        {/* Shadow */}
        <div className="absolute -bottom-10 h-10 w-2/3 rounded-full bg-black/10 blur-xl" />
      </motion.div>
    </motion.div>
  )
}
