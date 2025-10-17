import { courses } from '@/data/courses'
import { ButtonLink } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

const courseThemes: Record<
  string,
  {
    theme: ThemeName
    quote: { text: string; author: string; role?: string }
  }
> = {
  wai1: {
    theme: 'manipura',
    quote: {
      text: 'Part One is for seekers just meeting the current. It refines the senses to recognise the living force in the spine.',
      author: 'Santosh Ma',
      role: 'Guide, Discover Who Am I'
    }
  },
  wai2: {
    theme: 'anahata',
    quote: {
      text: 'As the heart blossoms, you learn to carry the warmth of devotion into every movement and breath.',
      author: 'Santosh Ma'
    }
  },
  wai3: {
    theme: 'vishuddha',
    quote: {
      text: 'The ascent to Sahasrār is luminous and exacting. These teachings guard the path so you can travel with grace.',
      author: 'Santosh Ma'
    }
  },
  wai4: {
    theme: 'sahasrara',
    quote: {
      text: 'Granthis dissolve when courage meets surrender. The golden body is simply your most honest self.',
      author: 'Santosh Ma'
    }
  }
}

export default function CoursePage({ slug }: { slug: string }) {
  const course = courses.find((item) => item.slug === slug)
  if (!course) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
        Course details coming soon.
      </div>
    )
  }

  const courseTheme = (course.theme as ThemeName) ?? courseThemes[slug]?.theme ?? 'twilight'
  const quote = courseThemes[slug]?.quote ?? {
    text: 'This module expands the living curriculum of awakening. Detailed copy will arrive shortly.',
    author: 'Santosh Ma'
  }

  const palette = themeLibrary[courseTheme].classes

  return (
    <div className="space-y-12">
      <Quote theme={courseTheme} text={quote.text} author={quote.author} role={quote.role} />

      <article className="space-y-10">
        <header className="space-y-4">
          <span className={`text-sm font-semibold uppercase tracking-[0.3em] ${palette.muted}`}>Course</span>
          <h1 className={`text-3xl md:text-4xl font-semibold tracking-tight ${palette.text}`}>{course.title}</h1>
          <p className={`text-lg leading-8 ${palette.muted}`}>{course.subtitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-slate-200">
              ${course.priceUSD} USD
            </div>
            <ButtonLink href="#" theme={courseTheme} size="lg">
              Enroll Now
            </ButtonLink>
            {course.videoCount ? (
              <div className="rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
                {course.videoCount.toString().padStart(2, '0')} videos
              </div>
            ) : null}
          </div>
        </header>

        <section className="space-y-3">
          <h2 className={`text-2xl font-semibold ${palette.text}`}>Overview</h2>
          <ul className={`list-disc space-y-2 pl-5 text-base leading-7 ${palette.muted}`}>
            {course.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className={`text-2xl font-semibold ${palette.text}`}>What You Will Learn</h2>
          <ul className={`list-disc space-y-2 pl-5 text-base leading-7 ${palette.muted}`}>
            <li>Replace with sectioned bullet points per part.</li>
            <li>This scaffold mirrors headings from the live site.</li>
          </ul>
        </section>
      </article>
    </div>
  )
}
