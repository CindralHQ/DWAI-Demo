'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/wai1', label: 'WAI Part 1' },
  { href: '/wai2', label: 'WAI Part 2' },
  { href: '/wai3', label: 'WAI Part 3' },
  { href: '/wai4', label: 'WAI Part 4' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: 'https://santoshsachdeva.com/books/', label: 'Books' }
]

type NavProps = {
  theme?: ThemeName
}

export function Nav({ theme = 'twilight' }: NavProps) {
  const pathname = usePathname()
  const palette = themeLibrary[theme].classes
  const [open, setOpen] = useState(false)

  return (
    <>

      <button
        type="button"
        className={cx(
          'flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold shadow-sm transition md:hidden',
          palette.surface,
          palette.text
        )}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Toggle navigation</span>
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
        </svg>
      </button>
      <nav
        className={cx(
          'absolute left-4 right-4 top-20 z-40 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-xl transition-all duration-300 ease-out md:static md:flex md:flex-row md:items-center md:gap-3 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:text-sm md:font-medium',
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none -translate-y-4 scale-95 opacity-0',
          'md:pointer-events-auto md:translate-y-0 md:scale-100 md:opacity-100'
        )}
      >
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cx(
                'rounded-full px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:px-3 md:py-1',
                palette.nav.focus,
                isActive ? palette.nav.active : palette.nav.base
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
