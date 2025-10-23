import { Button } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { ThemeName, themeLibrary } from '@/lib/designSystem'
import { ChakraNav } from '@/components/ui/ChakraNav'
import { EnrollBlock } from '@/components/ui/EnrollBlock'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import vishuddhaIcon from '@/assets/icons/Vishuddha.png'

const THEME: ThemeName = 'vishuddha'

const ascentHighlights = [
  {
    title: 'Crown of Awakening',
    description:
      'For the first time, the ascent of consciousness to the Sahasrar - the crown of awakening - is mapped with precise visuals.'
  },
  {
    title: 'Inner Witness Accounts',
    description:
      'Santosh Ma shares the culminating phases of her own evolution, received through sacred transmissions from the Empyrean realms.'
  },
  {
    title: 'Initiation Through Vision',
    description:
      'These luminous images transmit not just knowledge but a resonance that invites seekers into direct experience.'
  }
]

const luminousResonance = [
  'Unfolding of the higher Self through grace-filled ascent.',
  'Teaching that transcends concept - it is initiation through vision.',
  'Direct energetic resonance with the crown centre.'
]

const courseReveals = [
  'The Spiritual Ladder - the ascent beyond effort into grace.',
  'The Spiritual Hand - a symbol of divine intervention and upliftment.',
  'The Celestial Bird - the liberated soul taking flight.',
  'Shaktipat - the act of grace transmitted from Guru to disciple.',
  'The Region of Om - the eternal vibration at the crown of creation.'
]

const audience = [
  'Seekers devoted to the path of inner transformation.',
  'Practitioners of yoga, meditation, or subtle energy work.',
  'Students of kundalini and subtle-body knowledge.',
  'Disciples who have received, or are called to receive, shaktipat.',
  'Anyone who has journeyed through Who Am I Parts 1 and 2.'
]

const sacredOffering = [
  'A rare and precious gift to seekers walking the yogic path.',
  'Shared experience that deepens understanding of subtle energy and the inner body.',
  'Practical wisdom that helps seekers live with balance, devotion, and awareness.'
]

const uniqueness = [
  'Direct insights grounded in lived mystical experience.',
  'Illustrations downloaded in deep meditation, carrying the imprint of higher realms.',
  'An empirical lens on subtle-body transformation seldom documented.',
  'Each session is a living transmission - an energetic invitation into grace.'
]

function VisualPlaceholder({ label }: { label?: string }) {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-3xl border-2 border-dashed border-sky-200 bg-white/70 text-xs font-semibold uppercase tracking-[0.4em] text-sky-500">
      {label ?? 'Visual Placeholder'}
    </div>
  )
}

export const metadata = { title: 'Who Am I - Part 3' }

export default function WaiThreePage() {
  const palette = themeLibrary[THEME].classes

  return (
    <>
      <WaiIntroOverlay theme={THEME} icon={vishuddhaIcon} label="Vishuddha" />
      <div
        className={[
          palette.surface,
          'min-h-screen rounded-[24px] px-3 py-8 shadow-inner shadow-black/5 sm:rounded-[32px] sm:px-6 sm:py-10 md:rounded-[36px] md:px-10'
        ].join(' ')}
      >
        <div className="space-y-16 md:space-y-20">
      <section className="space-y-8 rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-600 p-6 text-white shadow-lg ring-1 ring-sky-300/40 sm:p-7 md:p-9">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
          <VisualPlaceholder label="Hero Illustration" />
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Who Am I Series</p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Part III</h1>
              <p className="text-xl font-semibold text-white">Journey to the Sahasrar: The Final Ascent of Consciousness</p>
            </div>
            <p className="text-base leading-7 text-white/90">
              This is not a course. It is a living transmission. Each session in this 12-part series carries
              energetic resonance - like a visual shaktipat that awakens your own inner knowing.
            </p>
            <ChakraNav active="wai3" />
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

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            A Sacred Unveiling of the Final Ascent
          </h2>
          <p className="text-base leading-7 text-sky-800">
            There comes a moment in the soul's long journey where the ascent is no longer an effort, but an
            act of grace. Part 3 documents this luminous threshold with startling clarity and devotion.
          </p>
          <p className="text-base leading-7 text-sky-800">
            Santosh Ma shares her direct inner experience of the culminating phases of spiritual evolution.
            Sacred visuals - downloaded from the Empyrean realms - guide seekers through the final stages of
            the soul's return.
          </p>
        </div>
        <VisualPlaceholder label="Lotus Bloom Artwork" />
      </section>

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            Luminous Images that Resonate
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
          <VisualPlaceholder label="Empyrean Visuals" />
          <div className="space-y-3">
            <ul className="space-y-2 text-base leading-7 text-sky-800">
              {luminousResonance.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="rounded-3xl bg-white p-5 text-base leading-7 text-sky-700 shadow-sm">
              These transmissions are initiation through vision - an invitation to dwell in the frequency of
              grace.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4 rounded-3xl bg-sky-50 p-6 shadow-sm sm:p-8">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>What This Course Reveals</h2>
          <ul className="space-y-2 text-base leading-7 text-sky-800">
            {courseReveals.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base leading-7 text-sky-700">
            Each element is explained with inner precision, guiding seekers through the mystical anatomy of
            the soul's final ascent.
          </p>
        </div>
        <VisualPlaceholder label="Crown Transmission Visual" />
      </section>

      <section className="space-y-6 rounded-3xl bg-sky-100/70 p-6 sm:p-8">
        <header className="text-center space-y-2">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>For Whom Is This Course?</h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            Intended for seekers who feel the call of the crown and the grace of shaktipat.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-sky-200 bg-white p-5 text-base leading-7 text-sky-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            A Sacred Offering for Every Seeker
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {sacredOffering.map((text, index) => (
            <div
              key={text}
              className="flex flex-col gap-4 rounded-3xl border border-sky-200 bg-white p-5 text-center shadow-sm sm:p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-400">
                Gift {String(index + 1).padStart(2, '0')}
              </span>
              <VisualPlaceholder label="Sacred Visual" />
              <p className="text-base leading-7 text-sky-800">{text}</p>
            </div>
          ))}
        </div>
        <p className="rounded-3xl bg-sky-200/60 p-6 text-center text-base leading-7 text-sky-800">
          The sacred insights inspire all seekers to remain devoted to their teachers, masters, and the living
          current of their spiritual lineage.
        </p>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            What Makes This Series Unique?
          </h2>
          <ul className="space-y-3 text-base leading-7 text-sky-800">
            {uniqueness.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-3xl bg-white p-5 text-base leading-7 text-sky-700 shadow-sm">
            If you are ready to step into a deeper experience of consciousness and recognise your true self,
            this is your invitation.
          </p>
        </div>
        <VisualPlaceholder label="Transcendent Figure" />
      </section>

      <EnrollBlock
        theme={THEME}
        price="INR 15,000"
        description={
          <>
            <p>
              A journey beyond the mind. Let this sacred unfolding illuminate your inner ascent. Let the
              Sahasrar blossom.
            </p>
            <p className="font-semibold text-white">
              Grace does not descend. Grace is revealed when the seeker is ready.
            </p>
          </>
        }
      />
        </div>
      </div>
    </>
  )
}
