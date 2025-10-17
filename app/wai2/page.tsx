import { Button } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { ThemeName, themeLibrary } from '@/lib/designSystem'
import { ChakraNav } from '@/components/ui/ChakraNav'
import { EnrollBlock } from '@/components/ui/EnrollBlock'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import anahataIcon from '@/assets/icons/Anahata.png'

const THEME: ThemeName = 'anahata'

const aboutHighlights = [
  {
    title: 'Sacred Ascent Revealed',
    description:
      'For the first time, the sacred ascent of consciousness and awakening of the Spiritual Heart is shared with vivid clarity.'
  },
  {
    title: 'Journey to the Anahat Chakra',
    description:
      "Part 2 traces the soul's journey from creation to reunion with the Self at the Anahat Chakra - the spiritual heart centre."
  },
  {
    title: 'Living Mechanics of the Heart',
    description:
      'Through her own awakening, Santosh Ma unveils how divine love and wisdom blossom within the heart.'
  }
]

const courseContent = [
  'How creation begins - the original impulse behind existence.',
  'Manifestation of the Atma - the divine spark within us.',
  "Birth of the Jeev-Atma - the soul's journey into duality.",
  'The ascent of consciousness - from lower chakras to heart awakening.',
  'The sacred meeting at the Anahat Chakra - where the soul reunites with the Self.',
  'The blossoming of the Spiritual Heart - divine love and awareness become one.'
]

const uniqueness = [
  'Direct insight from a living experience: Santosh Ma shares the visions received during deep meditation.',
  'Illustrated by the inner eye: sacred visuals are transmitted from realms where human will and divine will merge.',
  'An empirical lens on subtle-body studies rarely found in contemporary literature or academia.',
  'Each session is a living transmission - a visual shaktipat that awakens inner knowing.'
]

const audience = [
  'Spiritual seekers on any path longing for heart-awakening.',
  'Yoga teachers and meditators deepening subtle-body wisdom.',
  'Students exploring kundalini, consciousness, and mystic physiology.',
  'Interdisciplinary researchers integrating mysticism with modern science.'
]

function VisualPlaceholder({ label }: { label?: string }) {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-3xl border-2 border-dashed border-emerald-200 bg-white/70 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
      {label ?? 'Visual Placeholder'}
    </div>
  )
}

export const metadata = { title: 'Who Am I - Part 2' }

export default function WaiTwoPage() {
  const palette = themeLibrary[THEME].classes

  return (
    <>
      <WaiIntroOverlay theme={THEME} icon={anahataIcon} label="Anahata" />
      <div
        className={[
          palette.surface,
          'min-h-screen rounded-[24px] px-3 py-8 shadow-inner shadow-black/5 sm:rounded-[32px] sm:px-6 sm:py-10 md:rounded-[36px] md:px-10'
        ].join(' ')}
      >
        <div className="space-y-16 md:space-y-20">
      <section className="space-y-8 rounded-3xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 p-6 text-white shadow-lg ring-1 ring-emerald-300/40 sm:p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
          <VisualPlaceholder label="Hero Illustration" />
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Who Am I Series</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Part 2</h1>
              <p className="text-xl font-semibold text-white">Shaktipat & Blossoming of the Spiritual Heart</p>
            </div>
            <p className="text-base leading-7 text-white/90">
              This course is a visual, energetic, and philosophical breakthrough for every sincere seeker on
              the spiritual path.
            </p>
            <ChakraNav active="wai2" />
            <div className="flex flex-wrap gap-3">
              <Button theme={THEME} size="lg">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Quote
        theme={THEME}
        text="Journey of the Jeev-Atma to the Anahat Chakra, Shaktipat and Blossoming of the Spiritual Heart. To the right of the chest lies the spiritual heart where the Creator dwells."
        author="Santosh Ma"
        role="Kundalini Diary"
      />

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            About the Who Am I - Part 2 Series
          </h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            A rare transmission that illuminates the sacred expansion of the spiritual heart.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {aboutHighlights.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
                Insight {String(index + 1).padStart(2, '0')}
              </span>
              <VisualPlaceholder label="Module Visual" />
              <h3 className="text-lg font-semibold text-emerald-900">{item.title}</h3>
              <p className="text-base leading-7 text-emerald-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
        <VisualPlaceholder label="Heart Bloom Artwork" />
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Course Content</h2>
          <h3 className="text-lg font-semibold text-emerald-900">What You Will Learn</h3>
          <ul className="space-y-2 text-base leading-7 text-emerald-800">
            {courseContent.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            What Makes This Series Unique?
          </h2>
          <ul className="space-y-3 text-base leading-7 text-emerald-800">
            {uniqueness.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-3xl bg-white p-5 text-base leading-7 text-emerald-700 shadow-sm">
            This is not a course - it is a living transmission. Each session carries energetic resonance that
            awakens the heart's own remembering.
          </p>
        </div>
        <VisualPlaceholder label="Living Transmission Visual" />
      </section>

      <section className="space-y-6 rounded-3xl bg-emerald-100/70 p-6 sm:p-8">
        <header className="text-center space-y-2">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Who Is This Series For?</h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            Designed for seekers who feel the call of the spiritual heart.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {audience.map((entry) => (
            <div
              key={entry}
              className="rounded-3xl border border-emerald-200 bg-white p-5 text-base leading-7 text-emerald-800 shadow-sm"
            >
              {entry}
            </div>
          ))}
        </div>
      </section>

      <EnrollBlock
        theme={THEME}
        price="INR 12,000"
        description="Embark on a sacred journey inward. Allow hidden wisdom to awaken, let the heart open, and feel the light of the soul rise."
      />
        </div>
      </div>
    </>
  )
}
