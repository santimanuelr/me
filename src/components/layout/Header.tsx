import { ThemeToggle } from '../ui/ThemeToggle'
import { profile } from '../../data/profile'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="site-container flex h-14 items-center justify-between gap-4">
        <a href="/" className="text-base font-semibold tracking-tight text-text">
          {profile.name}
        </a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
