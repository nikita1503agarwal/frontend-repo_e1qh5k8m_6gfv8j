import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(120deg,#faf7ff,40%,#f1f5ff)] text-black dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="pb-12 text-center text-sm text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} SphereLamp — Crafted for ambience
      </footer>
    </div>
  )
}

export default App
