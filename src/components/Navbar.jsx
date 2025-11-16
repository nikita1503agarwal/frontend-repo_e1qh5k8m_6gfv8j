import { useState } from 'react'
import { Menu, X, Sun, Moon, Lamp, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Design', href: '#design' },
    { label: 'Specs', href: '#specs' },
    { label: 'Buy', href: '#buy' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/40 p-3 backdrop-blur-xl shadow-[0_10px_50px_-12px_rgba(0,0,0,0.2)] dark:bg-black/30 dark:border-white/5">
          <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-fuchsia-400 to-indigo-500 shadow-lg">
                <Lamp className="h-4 w-4 text-white" />
                <span className="absolute -inset-2 -z-10 animate-pulse rounded-full bg-fuchsia-500/20 blur-2xl" />
              </span>
              <span className="text-base font-semibold tracking-tight">SphereLamp</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-black/70 hover:text-black transition-colors dark:text-white/70 dark:hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg shadow-black/20 hover:shadow-black/30 hover:brightness-110 transition-all dark:bg-white dark:text-black">
                <ShoppingCart className="h-4 w-4" />
                Preorder
              </a>
            </nav>

            <button aria-label="Toggle menu" className="md:hidden rounded-xl border border-black/10 p-2 dark:border-white/10" onClick={() => setOpen(!open)}>
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden mt-3 grid gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-xl px-3 py-2 text-sm text-black/80 hover:bg-black/5 transition-colors dark:text-white/80 dark:hover:bg-white/5" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#buy" className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white shadow-lg hover:brightness-110 transition-all dark:bg-white dark:text-black" onClick={() => setOpen(false)}>
                <ShoppingCart className="h-4 w-4" />
                Preorder
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
