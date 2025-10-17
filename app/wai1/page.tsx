import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Quote } from '@/components/ui/Quote'
import { ThemeName, themeLibrary } from '@/lib/designSystem'
import { ChakraNav } from '@/components/ui/ChakraNav'
import { EnrollBlock } from '@/components/ui/EnrollBlock'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import manipuraIcon from '@/assets/icons/Manipura.png'

const THEME: ThemeName = 'manipura'

const seriesHighlights = [
  {
    title: 'A Guided Roadmap',
    description:
      'Its 12-part structure lays out the roadmap of human evolution from the causal body to awakening of the Ajna and beyond.'
  },
  {
    title: 'Meticulous Synthesis',
    description:
      'The Who Am I Series presents a carefully structured synthesis of ancient knowledge on consciousness and the subtle anatomy.'
  },
  {
    title: 'Unmatched Clarity',
    description:
      'Ancient yogic insights on chakras, subtle body, and human evolution are explained with rare precision and lived insight.'
  }
]

const sacredOffering = [
  'The Who Am I Series is a rare and precious gift to every student on the path of yoga and self-evolution.',
  'Shared experience helps seekers understand the workings of the energy and subtle body with greater clarity.',
  'Practical wisdom enables a seeker to approach daily life with balance, awareness, and reverence.'
]

const uniqueness = [
  'Direct insight from a living experience: Santosh Ma shares the visions and inner movements revealed during deep meditation.',
  'Illustrated by the inner eye: visuals in this course are not symbolic; they are transmissions where human intention and divine will merge.',
  'Offers an empirical lens to subtle-body studies seldom found in contemporary literature or academia.',
  'An invitation to step into a deeper experience of consciousness and recognise your true self.'
]

const discoveries = [
  'Understanding the human mind: thoughts, emotions, and intellect',
  'The true function of chakras in daily life',
  "The subtle body's cleansing process",
  'The subtle body: nadis, blocks, and purification',
  'The movement of prana and kundalini and how to prepare',
  'Why the Guru is essential to spiritual evolution'
]

const callouts = [
  'Deepen yogic understanding beyond the surface.',
  'Use this wisdom in teaching and personal practice.',
  'Align with your true path in a fast-changing world.',
  'Receive deep insights rooted in real experience, not theory.',
  'Accessible for every yoga seeker and teacher.',
  'Clear to understand, yet spiritually catalytic.',
  'Feels like a visual shaktipat that awakens the inner current.'
]

function VisualPlaceholder({ label }: { label?: string }) {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-3xl border-2 border-dashed border-amber-200 bg-white/70 text-xs font-semibold uppercase tracking-[0.4em] text-amber-500">
      {label ?? 'Visual Placeholder'}
    </div>
  )
}

export const metadata = { title: 'Who Am I - Part 1' }

export default function WaiOnePage() {
  const palette = themeLibrary[THEME].classes

  return (
    <>
      <WaiIntroOverlay theme={THEME} icon={manipuraIcon} label="Manipura" />
      <div
        className={[
          palette.surface,
          'min-h-screen rounded-[24px] px-3 py-8 shadow-inner shadow-black/5 sm:rounded-[32px] sm:px-6 sm:py-10 md:rounded-[36px] md:px-10'
        ].join(' ')}
      >
        <div className="space-y-16 md:space-y-20">
          <section className="space-y-8 rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 p-6 text-white shadow-lg ring-1 ring-amber-300/40 sm:p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
              <VisualPlaceholder label="Hero Illustration" />
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Who Am I Series</p>
                  <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Part 1</h1>
                  <p className="text-xl font-semibold text-white">
                    Understanding the Role of Chakras & Kundalini Shakti
                  </p>
                </div>
                <p className="text-base leading-7 text-white/90">
                  This is not a course. It is a living transmission. Each session of the 12-part series carries
                  energetic resonance, like a visual shaktipat, awakening your own inner knowing.
                </p>
                <ChakraNav active="wai1" />
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
        text={`I have this inherent quality of accepting and believing what is said, with the result that I experienced great excitement and inner joy on reading the lines, "I am now entering upon the greatest teaching accessible to man, for I am learning the secret of existence."`}
        author="Santosh Ma"
        role="Kundalini Diary"
      />

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            About The Who Am I - Part 1 Series
          </h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            A structured introduction to the inner journey of kundalini shakti and the chakras.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {seriesHighlights.map((feature, index) => (
            <Card
              key={feature.title}
              theme={THEME}
              eyebrow={`Insight ${String(index + 1).padStart(2, '0')}`}
              title={feature.title}
              description={feature.description}
            >
              <VisualPlaceholder label="Module Visual" />
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-6 rounded-3xl bg-amber-50 p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-semibold text-amber-900">
            A Sacred Offering for Every Seeker of Self-Realisation & Inner Mastery
          </h3>
          <ul className="space-y-3 text-base leading-7 text-amber-800">
            {sacredOffering.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <VisualPlaceholder label="Heart Visual" />
      </section>

      <section className="rounded-3xl bg-amber-100/70 p-6 text-center text-lg font-semibold text-amber-700">
        The sacred insights inspire seekers to stay committed to their teachers, masters, gurus, and the
        living current of their spiritual paths.
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            What Makes This Series Unique?
          </h2>
          <ul className="space-y-3 text-base leading-7 text-amber-800">
            {uniqueness.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <VisualPlaceholder label="Fire Meditation Artwork" />
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-700 p-6 text-white shadow-lg sm:p-8 md:p-10">
        <header className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Course Content: You Will Discover</h2>
          <p className="mt-2 text-base leading-7 text-white/80">
            Whether you are beginning or advanced on the yogic path, these transmissions unlock vital keys:
          </p>
        </header>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {discoveries.map((item) => (
            <div key={item} className="flex gap-3 text-base leading-7 text-white">
              <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-amber-900">Why You Must Watch This Now</h3>
          <ul className="space-y-2 text-base leading-7 text-amber-800">
            {callouts.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <VisualPlaceholder label="Serpent Energy Visual" />
      </section>

      <section className="space-y-8">
        <div className="rounded-3xl border border-amber-200 bg-white p-5 shadow-sm sm:p-6">
          <VisualPlaceholder label="Video Placeholder" />
        </div>
        <EnrollBlock
          theme={THEME}
          price="INR 12,000"
          description="For the first time in the history of spiritual literature, the process of awakening has been documented with such vivid detail through illustrations. These teachings show how kundalini shakti purifies and activates the subtle body, transforming the human body, mind, and intellect. The result is a deep, positive influence on daily living."
        />
      </section>
    </div>
      </div>
    </>
  )
}
