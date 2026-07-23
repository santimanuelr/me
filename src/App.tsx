import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-text theme-transition">
      <Header />
      <main className="flex-1">
        <div className="site-container">
          <Hero />
        </div>
      </main>
      <Footer />
    </div>
  )
}
