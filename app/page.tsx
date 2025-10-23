import Image, { type StaticImageData } from 'next/image'

import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Quote } from '@/components/ui/Quote'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import { themeLibrary, ThemeName } from '@/lib/designSystem'
import { courses } from '@/data/courses'
import manipuraIcon from '@/assets/icons/Manipura.png'
import anahataIcon from '@/assets/icons/Anahata.png'
import vishuddhaIcon from '@/assets/icons/Vishuddha.png'
import sahasraraIcon from '@/assets/icons/Sahasrara.png'
import homeLogo from '@/assets/Logo.png'

const HOME_THEME: ThemeName = 'twilight'
const SUPPORT_THEME: ThemeName = 'manipura'

const courseIconMap: Record<
  string,
  { icon: StaticImageData; iconBg: string; ring: string; cardClass: string }
> = {
  wai1: {
    icon: manipuraIcon,
    iconBg: 'bg-amber-100',
    ring: 'ring-amber-200/60',
    cardClass:
      '!bg-amber-50 !border-amber-200 !shadow-none text-amber-900 hover:!border-amber-300 hover:!shadow-none'
  },
  wai2: {
    icon: anahataIcon,
    iconBg: 'bg-emerald-100',
    ring: 'ring-emerald-200/60',
    cardClass:
      '!bg-emerald-50 !border-emerald-200 !shadow-none text-emerald-900 hover:!border-emerald-300 hover:!shadow-none'
  },
  wai3: {
    icon: vishuddhaIcon,
    iconBg: 'bg-sky-100',
    ring: 'ring-sky-200/60',
    cardClass:
      '!bg-sky-50 !border-sky-200 !shadow-none text-sky-900 hover:!border-sky-300 hover:!shadow-none'
  },
  wai4: {
    icon: sahasraraIcon,
    iconBg: 'bg-violet-100',
    ring: 'ring-violet-200/60',
    cardClass:
      '!bg-violet-50 !border-violet-200 !shadow-none text-violet-900 hover:!border-violet-300 hover:!shadow-none'
  }
}

const aboutBulletPoints = [
  "The 'Who Am I Series' consisting of four parts shares pristine sacred knowledge of human evolution from the Mooladhar chakra to the Sahasrar.",
  'For the first time in human history, the deepest layers of yogic evolution traditionally reserved for advanced seekers have been decoded and presented with clarity.',
  'Supported by 250+ sacred, vibrant visuals illustrating the full spectrum of human evolution.'
]

const awakeningHighlights = [
  'Almost immediately, Santosh Ma found herself on a spiritual journey with visions emerging during daily meditation.',
  'These visions were illustrated by her, mapping each phase the human body and mind traverses through awakening.',
  'Documented with rare detail, this visual journal shares a process of evolution seldom captured in spiritual literature.'
]

const needOfHour = [
  {
    title: 'Steadying The Self',
    body: 'This body of work arrives as human consciousness awakens rapidly. It keeps seekers rooted in spirit amid fast-paced, material distractions.'
  },
  {
    title: 'Living Transmission',
    body: 'The series is accessible yet profoundly transformative. Each visual lands like a mini shaktipat, awakening deeper self-realisation.'
  },
  {
    title: 'Guidance For Today',
    body: 'A rare, immersive four-part experience that meets humanity at a pivotal moment, answering the timeless question: Who Am I?'
  }
]

const awakenTruth = [
  {
    title: 'A Roadmap Of Evolution',
    body: 'Twelve parts chart the journey from the causal body through the awakening of Ajna and beyond.'
  },
  {
    title: 'Ancient Knowledge, Structured',
    body: 'Meticulously organises ancient teachings on consciousness and subtle anatomy into an experiential curriculum.'
  },
  {
    title: 'Clarity On Subtle Systems',
    body: 'Offers unmatched insight into chakras, subtle bodies, and the phases of human evolution.'
  }
]

const whySeries = [
  'First-person experience of a true yogic awakening.',
  'Sacred knowledge rarely shared outside master-disciple relationships.',
  'Not intellectual; this work is energetic, embodied, and alive.',
  'Each visual carries the energy of a silent shaktipat, awakening inner knowing.',
  'Lived experience, not theory.'
]

const whyNow = [
  'Deepen yogic understanding beyond the surface.',
  'Integrate this wisdom into teaching and personal practice.',
  'Align with your true path in a fast-changing world.',
  'Receive deep insights into the subtle body.',
  'Engage with real experience, not abstract concepts.',
  'Perfect for every yoga seeker and teacher.',
  'Clear, accessible guidance.',
  'Spiritually catalytic.',
  'Feels like a visual shaktipat.'
]

const audiences = [
  { label: 'Seekers', copy: 'Individuals asking the essential question: Who Am I?' },
  { label: 'Yoga Teachers & Students', copy: 'Those seeking an authentic, advanced understanding of subtle body science.' },
  { label: 'Scholars & Researchers', copy: 'Explorers of consciousness, kundalini dynamics, and meditative physiology.' },
  { label: 'Interdisciplinary Faculties', copy: 'Learners connecting mysticism, neurobiology, and human evolution.' }
]

function VisualPlaceholder({ label }: { label?: string }) {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white/60 text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
      {label ?? 'Visual Placeholder'}
    </div>
  )
}

export default function HomePage() {
  const palette = themeLibrary[HOME_THEME].classes

  return (
    <div className="space-y-20">
      <WaiIntroOverlay theme={HOME_THEME} icon={homeLogo} label="Discover Who Am I" size="hero" />
      <section className="space-y-10 rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-10 text-white shadow-lg">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-indigo-200">
                About The Series
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Who Am I</h1>
              <p className="text-xl font-medium text-indigo-100">
                Journey of Jeev Atma to the Blossoming of Consciousness
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-indigo-100">
              The 'Who Am I Series' is a gift for humanity. A must-watch journey for every seeker, yoga
              teacher, yoga practitioner, and meditator - no matter the path.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/wai1" theme={SUPPORT_THEME} size="lg">
                Explore the Course
              </ButtonLink>
            </div>
          </div>
          <VisualPlaceholder label="Hero Visual" />
        </div>
        <div className="rounded-3xl bg-indigo-900/70 p-4 text-sm font-medium text-indigo-100 ring-1 ring-white/10">
          The 'Who Am I Series' is a gift for humanity. A must watch for every seeker, yoga teacher, yoga
          practitioner, meditator. No matter your path.
        </div>
      </section>

      <Quote
        theme={SUPPORT_THEME}
        text="Today, I realise that my life has been touched by a love and a gentleness to a depth which no individual can possibly match - as is given to me, in the course of the daily meditation by the Kundalini force residing within my own being. I am aware that this feeling of being cherished must emanate from the very Source itself."
        author="Santosh Ma"
        role="Kundalini Diary"
      />

      <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
        <VisualPlaceholder label="Series Visual" />
        <div className="space-y-6">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            About The 'Who Am I' Series
          </h2>
          <ul className={`space-y-3 text-base leading-7 ${palette.muted}`}>
            {aboutBulletPoints.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <header className="space-y-2">
            <h3 className={`text-2xl font-semibold ${palette.text}`}>
              Santosh Ma's Spiritual Awakening has been Unique
            </h3>
            <p className={`text-base leading-7 ${palette.muted}`}>
              The question surfaced in her mind,
              <br />
              Who am I? Where do I come from? Where am I going?
            </p>
          </header>
          <ul className={`space-y-3 text-base leading-7 ${palette.muted}`}>
            {awakeningHighlights.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <VisualPlaceholder label="Portrait Placeholder" />
      </section>

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            Need of the Hour: Rapid Evolution of Human Consciousness
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {needOfHour.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-3xl border border-indigo-100 bg-white p-6 text-left shadow-sm"
            >
              <VisualPlaceholder label="Visual" />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-indigo-900">{item.title}</h3>
                <p className="text-base leading-7 text-indigo-700">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            Dive Deep Into The Sacred Journey of Who Am I?
          </h2>
          <div className={`space-y-4 text-base leading-7 ${palette.muted}`}>
            <p>
              This is not another spiritual documentary - it's a rare transmission of profound inner truth,
              revealed through vivid, divinely inspired visuals and direct personal experiences.
            </p>
            <p>
              Through visions received in deep meditation over five years, Santosh Ma guides you through the
              journey of spiritual evolution; a process never before shared in yogic literature with such
              clarity.
            </p>
            <p>
              These teachings awaken your inner knowledge. They depict how kundalini shakti purifies and
              activates the subtle body, transforming the human body, mind, and intellect for daily living.
            </p>
          </div>
        </div>
        <VisualPlaceholder label="Journey Visual" />
      </section>

      <section className="space-y-8">
        <header className="text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            Awaken to the Truth Within
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {awakenTruth.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <VisualPlaceholder label="Illustration" />
              <h3 className="text-lg font-semibold text-indigo-900">{item.title}</h3>
              <p className="text-base leading-7 text-indigo-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 p-10 text-white shadow-lg">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
          <VisualPlaceholder label="Signature Visual" />
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">
              Why This Series is Unlike Anything You've Seen Before
            </h2>
            <ul className="space-y-3 text-base leading-7 text-blue-100">
              {whySeries.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50 p-8">
          <h2 className="text-2xl font-semibold text-amber-900">Why You Must Watch This Now</h2>
          <ul className="space-y-2 text-base leading-7 text-amber-800">
            {whyNow.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <VisualPlaceholder label="Call to Action Visual" />
      </section>

      <section className="space-y-8">
        <header className="text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            For Whom Is This Series?
          </h2>
          <p className={`text-base leading-7 ${palette.muted}`}>The course resonates most with:</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-indigo-200"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-400">
                {audience.label}
              </div>
              <div className="mt-2 text-base leading-7 text-indigo-800">{audience.copy}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            Who Am I Course Details
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {courses.map((course, index) => {
            const iconConfig = courseIconMap[course.slug]
            return (
            <Card
              key={course.slug}
              theme={(course.theme as ThemeName) ?? HOME_THEME}
              className={iconConfig?.cardClass}
              eyebrow={`Part ${String(index + 1).padStart(2, '0')}`}
              title={course.title}
              description={course.subtitle}
              leadingVisual={
                iconConfig ? (
                  <div
                    className={[
                      'inline-flex h-20 w-20 items-center justify-center rounded-2xl ring-4 ring-inset shadow-sm',
                      iconConfig.iconBg,
                      iconConfig.ring
                    ].join(' ')}
                  >
                    <Image
                      src={iconConfig.icon}
                      alt={`${course.title} icon`}
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                ) : undefined
              }
            >
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <ButtonLink href={`/${course.slug}`} theme={(course.theme as ThemeName) ?? HOME_THEME} size="sm">
                  Learn more
                </ButtonLink>
                {course.videoCount ? (
                  <span className="text-slate-500">{course.videoCount.toString().padStart(2, '0')} videos</span>
                ) : null}
              </div>
            </Card>
            )
          })}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl bg-emerald-50 p-8 text-base leading-7 text-slate-700 ring-1 ring-emerald-100/70">
        <h3 className="text-center text-2xl font-semibold text-emerald-900">Disclaimer</h3>
        <div className="space-y-4">
          <p>
            The information contained in 'the books by the author' and the 'Who Am I' are not intended to serve
            as a replacement for professional medical advice. Any use of the information in the books and the
            courses is at the participants discretion. Author specifically disclaims any implied warranties of
            merchantability and fitness for a particular purpose and all liability arising directly or indirectly
            from the use or application of any information contained in the book or the various courses.
          </p>
          <p>
            The author does not recommend the self-management of health or mental health problems. You should
            never disregard medical advice, or delay in seeking it, because of something you have learned in this
            book or these courses. 'The Who Am I' are a structured self-study and self-development programme that
            shouldn't be taken lightly.
          </p>
        </div>
      </section>
    </div>
  )
}
