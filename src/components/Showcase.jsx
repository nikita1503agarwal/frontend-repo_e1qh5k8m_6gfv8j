import { motion } from 'framer-motion'

const scenes = [
  { name: 'Focus', colors: ['#a78bfa', '#60a5fa'] },
  { name: 'Calm', colors: ['#f472b6', '#c4b5fd'] },
  { name: 'Sunset', colors: ['#fb7185', '#f59e0b'] },
]

export default function Showcase() {
  return (
    <section id="design" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold sm:text-4xl">
              Light as a living material
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 max-w-xl text-black/70 dark:text-white/70">
              We designed gradients that move like breath—slow, subtle, and satisfying. Switch scenes to match your rhythm.
            </motion.p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {scenes.map((s, i) => (
                <motion.div key={s.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative overflow-hidden rounded-2xl p-4 shadow-lg">
                  <div className="text-sm font-medium">{s.name}</div>
                  <div className="mt-3 flex h-8 items-center gap-1">
                    {s.colors.map((c, j) => (
                      <div key={j} className="h-full w-full rounded-md" style={{ background: c }} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <GradLamp />
        </div>
      </div>
    </section>
  )
}

function GradLamp() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* Base */}
      <div className="absolute bottom-0 left-1/2 h-6 w-44 -translate-x-1/2 rounded-full bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-2xl" />

      {/* Sphere */}
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }} className="relative grid h-full place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff_0%,#fde7ff_35%,#e6d3ff_60%,#c7b9ff_100%)] shadow-2xl">
        <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(236,72,153,0.35),rgba(99,102,241,0.25),rgba(79,70,229,0.35),rgba(236,72,153,0.35))] mix-blend-multiply blur-2xl" />
        <div className="absolute left-1/4 top-1/4 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
        <div className="absolute right-1/5 bottom-1/4 h-8 w-24 rotate-12 rounded-full bg-white/50 blur-xl" />
        <div className="absolute -bottom-10 h-10 w-2/3 rounded-full bg-black/10 blur-xl" />
      </motion.div>
    </motion.div>
  )
}
