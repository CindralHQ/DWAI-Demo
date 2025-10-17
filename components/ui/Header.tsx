import Link from 'next/link'
import { themeLibrary, ThemeName } from '@/lib/designSystem'
import { Nav } from '@/components/Nav'

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

type HeaderProps = {
  theme?: ThemeName
  className?: string
  sticky?: boolean
}

export function Header({ theme = 'twilight', className, sticky = true }: HeaderProps) {
  const { text, surface } = themeLibrary[theme].classes
  return (
    <header
      className={cx(
        'relative border-b backdrop-blur supports-[backdrop-filter]:bg-white/70',
        surface,
        sticky ? 'sticky top-0 z-50' : '',
        className
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className={cx('text-lg font-semibold tracking-tight', text)}>
          Discover Who Am I
        </Link>
        <Nav theme={theme} />
      </div>
    </header>
  )
}
