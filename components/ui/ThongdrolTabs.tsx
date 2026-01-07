'use client'

import { useMemo, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import thongdrolVisual from '@/assets/Thongdrol.png'
import thodolVisual from '@/assets/Thodol.png'
import nyongdrolVisual from '@/assets/Nyongdrol.png'
import takdrolVisual from '@/assets/Takdrol.png'
import drendrolVisual from '@/assets/Drendrol.png'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

type ThongdrolTab = {
  id: string
  label: string
  title: string
  description: string
  image: StaticImageData
  alt: string
}

const THONGDROL_TABS: ThongdrolTab[] = [
  {
    id: 'thongdrol',
    label: 'Thongdrol',
    title: 'Thongdrol : Liberation Through Seeing',
    description:
      'Liberation through seeing. Sacred visuals awaken clarity by direct sight, guiding the seeker into a higher level of consciousness.',
    image: thongdrolVisual,
    alt: 'Thongdrol festival prayer flags unfurled in a sacred ceremony'
  },
  {
    id: 'thodol',
    label: 'Thodol',
    title: 'Thodol : Liberation Through Hearing',
    description:
      'Liberation through hearing. Teachings, chants, and guidance align the mind through sound and attune the heart to the path.',
    image: thodolVisual,
    alt: 'Blue lotus visual symbolizing clarity through sound'
  },
  {
    id: 'nyongdrol',
    label: 'Nyongdrol',
    title: 'Nyongdrol : Liberation Through Tasting',
    description:
      'Liberation through tasting. The sense of taste becomes a portal to mindfulness, gratitude, and the sacredness of each moment.',
    image: nyongdrolVisual,
    alt: 'Sunlit boat journey representing mindful tasting'
  },
  {
    id: 'takdrol',
    label: 'Takdrol',
    title: 'Takdrol : Liberation Through Touch',
    description:
      'Liberation through touch. Subtle contact reveals presence, stillness, and embodied awareness in every breath.',
    image: takdrolVisual,
    alt: 'Energy flowing through the body representing liberation through touch'
  },
  {
    id: 'drendrol',
    label: 'Drendrol',
    title: 'Drendrol : Liberation Through Recollection',
    description:
      'Liberation through recollection. Remembrance of the path dissolves forgetting and restores the seeker to inner truth.',
    image: drendrolVisual,
    alt: 'Crown chakra blossoming symbolizing liberation through recollection'
  }
]

type ThongdrolTabsProps = {
  theme?: ThemeName
}

export function ThongdrolTabs({ theme = 'twilight' }: ThongdrolTabsProps) {
  const [activeId, setActiveId] = useState(THONGDROL_TABS[0].id)
  const palette = themeLibrary[theme].classes
  const activeTab = useMemo(
    () => THONGDROL_TABS.find((tab) => tab.id === activeId) ?? THONGDROL_TABS[0],
    [activeId]
  )

  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
      <div
        key={activeTab.id}
        className="mt-6 grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-center motion-safe:animate-page-fade"
      >
        <div className="space-y-3 text-base leading-7 text-sky-800">
          <p className={`text-xs font-semibold uppercase tracking-[0.35em] ${palette.card.eyebrow}`}>
            Liberation Paths
          </p>
          <div className="flex flex-wrap gap-2">
            {THONGDROL_TABS.map((tab) => {
              const isActive = tab.id === activeId
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  className={[
                    'rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    palette.nav.focus,
                    isActive
                      ? `border-transparent ${palette.nav.active} shadow-sm`
                      : `border-sky-200 bg-white ${palette.nav.base} hover:bg-sky-50`
                  ].join(' ')}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
          <h3 className={`text-2xl font-semibold ${palette.card.title}`}>{activeTab.title}</h3>
          <p className={palette.card.body}>{activeTab.description}</p>
        </div>
        <figure className="w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sky-100">
          <Image
            src={activeTab.image}
            alt={activeTab.alt}
            className="h-auto w-full max-h-[360px] object-cover"
            sizes="(min-width: 768px) 35vw, 100vw"
          />
        </figure>
      </div>
    </div>
  )
}
