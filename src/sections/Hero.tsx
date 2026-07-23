import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

const socials = [
  { label: 'GitHub', href: profile.links.github, Icon: Github, external: true },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: Linkedin, external: true },
  { label: 'Email', href: `mailto:${profile.links.email}`, Icon: Mail, external: false },
]

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-widest text-text-faint">
        {profile.role}
      </p>

      <h1 className="mt-4 text-display text-text">{profile.fullName}</h1>

      <p className="mt-6 max-w-2xl text-article text-text-muted">{profile.tagline}</p>

      <div className="mt-10 max-w-2xl space-y-4 text-article text-text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-10 flex flex-wrap gap-2">
        {profile.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-[3px] border border-border px-3 py-1 text-sm text-text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">
        {socials.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex items-center gap-2 rounded-[4px] border-2 border-text px-4 py-2 text-sm font-bold tracking-[0.4px] text-text transition-colors hover:bg-text hover:text-bg"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
