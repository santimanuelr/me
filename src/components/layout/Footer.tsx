import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="site-container flex h-16 items-center justify-between text-sm text-text-faint">
        <span>
          © {year} {profile.fullName}
        </span>
        <span>Built with React &amp; Tailwind</span>
      </div>
    </footer>
  )
}
