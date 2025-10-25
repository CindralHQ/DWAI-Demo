import homeLogo from '@/assets/Logo.png'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

const ABOUT_THEME: ThemeName = 'twilight'

export const metadata = { title: 'About - Who Am I' }

const missionHighlights = [
  'Preserve and share the lived experience of Kundalini awakening with clarity and humility.',
  'Guide sincere seekers through a structured pathway that honours ancient Brahma Vidya lineages.',
  'Offer gentle yet practical tools that keep spiritual growth grounded in daily life.'
]

const supportHighlights = [
  {
    title: 'The Eight Spiritual Breaths',
    body: "A self-study course that distils Santosh Ma's insights into an accessible daily practice for seekers of all backgrounds."
  },
  {
    title: 'Guided Sangha',
    body: 'Weekly online and in-person meditations provide a safe space to discuss experiences and receive personalised counsel.'
  }
]

function PortraitPlaceholder() {
  return (
    <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-[2rem] border border-indigo-100 bg-gradient-to-tr from-indigo-100 via-white to-indigo-200 shadow-inner">
      <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.4em] text-indigo-400">
        Santosh Ma
      </span>
    </div>
  )
}

export default function About() {
  const palette = themeLibrary[ABOUT_THEME].classes

  return (
    <div className="space-y-16">
      <WaiIntroOverlay theme={ABOUT_THEME} icon={homeLogo} label="Discover Who Am I" size="hero" applyBodyTint={false} />
      <section className="space-y-4 rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-10 text-white shadow-lg">
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-indigo-200">About</p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Discover Who Am I</h1>
        <p className="max-w-3xl text-base leading-7 text-indigo-100">
          Discover Who Am I is guided by Santosh Ma (Santosh Sachdeva), whose direct Kundalini awakening in 1995
          opened a lifetime of surrender to Higher Forces. Her journey continues to illuminate the teachings we
          share with seekers across the world.
        </p>
      </section>

      <section className="grid gap-10 rounded-3xl border border-indigo-100 bg-white p-8 shadow-sm md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Santosh Ma&apos;s Path</h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            Santosh Ma immersed herself in Brahma Vidya under Justice M. L. Dudhat in 1995. The initiation ignited an
            enduring relationship with Kundalini energy, chronicled through the Kundalini Trilogy—<em>
              Kundalini: A Gentle Force
            </em>
            , <em>Kundalini Diary</em>, and <em>Kundalini Awakening</em>. These texts present rare illustrated detail on
            the unfolding of subtle consciousness and continue to guide students navigating their own inner ascent.
          </p>
          <p className={`text-base leading-7 ${palette.muted}`}>
            With more than ten titles authored, she bridges ancient transmissions and contemporary seekers. Her work
            demystifies profound experiences, encouraging practitioners to trust their journey while staying grounded in
            daily life.
          </p>
        </div>
        <div className="flex items-start justify-center md:justify-end">
          <PortraitPlaceholder />
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-indigo-50 p-8 ring-1 ring-indigo-100/70">
          <h3 className={`text-2xl font-semibold ${palette.text}`}>Mission</h3>
          <p className="mt-3 text-base leading-7 text-indigo-700">
            The heart of Discover Who Am I is to share lived wisdom with tenderness and structure so every seeker feels
            held on their path. These guiding principles keep our work authentic and human.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {missionHighlights.map((point, index) => (
              <div
                key={index}
                className="rounded-2xl border border-indigo-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  Pillar {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-base leading-7 text-indigo-800">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>How We Support Seekers</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {supportHighlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-indigo-900">{item.title}</h3>
              <p className="text-base leading-7 text-indigo-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-indigo-50 p-8 text-base leading-7 text-indigo-800 ring-1 ring-indigo-100/70">
        <h2 className="text-2xl font-semibold text-indigo-900">Stay Connected</h2>
        <p className="mt-3">
          Santosh Ma hosts ongoing mentoring circles where questions on meditation, chakras, and Kundalini are met
          with warmth and clarity. Learn more about The Eight Spiritual Breaths at{' '}
          <a href="https://www.eightspiritualbreaths.com" rel="noopener noreferrer" target="_blank" className="font-semibold text-indigo-600 underline decoration-indigo-400 hover:text-indigo-700">
            eightspiritualbreaths.com
          </a>
          .
        </p>
      </section>
    </div>
  )
}
