import { motion } from 'framer-motion'
import { MoveRight, ShieldCheck } from 'lucide-react'

export default function CTA() {
  return (
    <section id="buy" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-8 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-white/10">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-fuchsia-400/30 to-indigo-400/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-tr from-fuchsia-400/30 to-indigo-400/30 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">Preorder Sphere Lamp</h3>
                <p className="mt-2 text-black/70 dark:text-white/70">Ships this fall. 30-day returns. 2-year warranty.</p>
                <p className="mt-3 text-3xl font-semibold">$199</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow-lg shadow-black/20 transition-all hover:translate-y-[-1px] hover:shadow-black/30 dark:bg-white dark:text-black">
                Reserve yours
                <MoveRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-black/60 dark:text-white/60">
              <ShieldCheck className="h-4 w-4" />
              Secure checkout. No charges until shipping.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
