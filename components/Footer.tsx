function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type FooterProps = {
  className?: string
}

const quickLinks = [
  { label: 'Who Am I – Part 1', href: '/wai1' },
  { label: 'Who Am I – Part 2', href: '/wai2' },
  { label: 'Who Am I – Part 3', href: '/wai3' },
  { label: 'Who Am I – Part 4', href: '/wai4' },
  { label: 'Books & Publications', href: '/books' },
]

const seriesLinks = [
  { label: "About Santosh Ma's Teachings", href: '#' },
  { label: 'Kundalini Diary', href: '#' },
  { label: 'Eight Spiritual Breaths', href: '#' }
]

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: 'https://www.youtube.com/@SantoshSachdevaTalks' },
  { label: 'Facebook', href: '#' },
]

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cx(
        'relative mt-24 border-t border-indigo-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-slate-700',
        className
      )}
    >
      <div className="container py-12 text-sm sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_repeat(3,minmax(0,1fr))]">
          <div className="space-y-4">
            <div className="text-2xl font-semibold text-indigo-700">Discover Who Am I</div>
            <p className="text-sm leading-7 text-slate-600">
              A living archive of Santosh Ma&apos;s transmissions on kundalini, subtle-body wisdom, and the
              unfolding of the Self. Crafted for seekers who learn through vision, story, and direct energetic
              resonance.
            </p>
            <a
              href="/wai1"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 underline-offset-4 transition hover:text-indigo-500 hover:underline"
            >
              Begin the Who Am I journey →
            </a>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500/70">
              Explore
            </span>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-700 transition hover:text-indigo-600 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500/70">
              Know More
            </span>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {seriesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-700 transition hover:text-indigo-600 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500/70">
              Connect
            </span>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              <li>
                <a
                  href="mailto:admin@discoverwhoami.org"
                  className="text-slate-700 transition hover:text-indigo-600 hover:underline"
                >
                  admin@discoverwhoami.org
                </a>
              </li>
              <li className="text-slate-500">Mumbai · India</li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-700 transition hover:text-indigo-600 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-indigo-200 pt-6 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="font-medium text-slate-600">
            © {new Date().getFullYear()} Discover Who Am I. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/legal/disclaimer" className="transition hover:text-indigo-600 hover:underline">
              Disclaimer
            </a>
            <a href="/legal/privacy" className="transition hover:text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            <a href="/legal/terms" className="transition hover:text-indigo-600 hover:underline">
              Terms &amp; Conditions
            </a>
            <a href="/legal/refund" className="transition hover:text-indigo-600 hover:underline">
              Payment &amp; Refund
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
