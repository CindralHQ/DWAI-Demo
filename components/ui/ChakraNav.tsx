import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

import manipuraIcon from '@/assets/icons/Manipura.png'
import anahataIcon from '@/assets/icons/Anahata.png'
import vishuddhaIcon from '@/assets/icons/Vishuddha.png'
import sahasraraIcon from '@/assets/icons/Sahasrara.png'

type ChakraNavItem = {
  slug: string
  part: string
  chakra: string
  icon: StaticImageData
  ring: string
  offset: string
  glow: string
  activeShadow: string
}

const chakras: ChakraNavItem[] = [
  {
    slug: '/wai1',
    part: 'Part I',
    chakra: 'Manipura',
    icon: manipuraIcon,
    ring: 'ring-amber-300/70',
    offset: 'ring-offset-orange-100',
    glow: '',
    activeShadow: 'shadow-2xl'
  },
  {
    slug: '/wai2',
    part: 'Part II',
    chakra: 'Anahata',
    icon: anahataIcon,
    ring: 'ring-emerald-300/70',
    offset: 'ring-offset-emerald-100',
    glow: '',
    activeShadow: 'shadow-2xl'
  },
  {
    slug: '/wai3',
    part: 'Part III',
    chakra: 'Vishuddha',
    icon: vishuddhaIcon,
    ring: 'ring-sky-300/70',
    offset: 'ring-offset-sky-100',
    glow: '',
    activeShadow: 'shadow-2xl'
  },
  {
    slug: '/wai4',
    part: 'Part IV',
    chakra: 'Sahasrara',
    icon: sahasraraIcon,
    ring: 'ring-violet-300/70',
    offset: 'ring-offset-amber-100',
    glow: 'shadow-[0_0_26px_rgba(245,197,53,0.35)]',
    activeShadow: 'shadow-[0_0_36px_rgba(245,197,53,0.45)]'
  }
]

type ChakraNavProps = {
  active?: 'wai1' | 'wai2' | 'wai3' | 'wai4'
  className?: string
}

export function ChakraNav({ active, className }: ChakraNavProps) {
  return (
    <nav
      className={['flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:justify-start md:text-left', className]
        .filter(Boolean)
        .join(' ')}
    >
      {chakras.map((chakra) => {
        const slug = chakra.slug.replace('/', '')
        const isActive = active === slug
        return (
          <div
            key={chakra.slug}
            className="flex flex-col items-center gap-2 text-center text-sm font-semibold text-white/90 md:items-start md:text-left"
          >
            <Link
              href={chakra.slug}
              aria-label={`${chakra.part} – ${chakra.chakra}`}
              aria-current={isActive ? 'page' : undefined}
              className={[
                'flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform duration-200',
                chakra.ring,
                chakra.offset,
                'ring-offset-2',
                chakra.glow,
                'ring-2 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60',
                ...(isActive ? ['scale-105', chakra.activeShadow] : ['opacity-95'])
              ].join(' ')}
            >
              <Image src={chakra.icon} alt={`${chakra.chakra} symbol`} className="h-9 w-9" />
            </Link>
            <div className="flex flex-col items-center gap-0.5 md:items-start">
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
                {chakra.part}
              </span>
              <span className="text-sm uppercase tracking-[0.28em] text-white">
                {chakra.chakra}
              </span>
            </div>
          </div>
        )
      })}
    </nav>
  )
}
