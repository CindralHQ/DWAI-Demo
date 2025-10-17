import { ButtonLink } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

const BOOKS_THEME: ThemeName = 'twilight'

const books = [
  {
    title: 'The Eight Spiritual Breaths',
    description:
      'A foundational guide to rhythmic breathwork that anchors kundalini currents and stabilises daily practice.',
    href: '#'
  },
  {
    title: 'The Eight Spiritual Breaths - Vol 2',
    description:
      'Advances the breathwork transmissions with deeper subtle-body mapping and contemplative guidance.',
    href: '#'
  },
  {
    title: 'The Kundalini Artworks',
    description:
      'A gallery of visionary art illustrating each stage of awakening as witnessed by Santosh Ma.',
    href: '#'
  },
  {
    title: 'The Kundalini Trilogy',
    description:
      'Comprehensive teachings on kundalini mechanics, energetics, and the devotional heart.',
    href: '#'
  },
  {
    title: 'Who Am I?',
    description:
      'A written companion to the video series offering narrative context and reflection prompts.',
    href: '#'
  },
  {
    title: 'Kundalini - A Gentle Force',
    description:
      'Shares insights on moving through awakening with ease, compassion, and grounded daily rituals.',
    href: '#'
  }
]

function VisualPlaceholder({ label }: { label?: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-indigo-200/80 bg-indigo-50/80 shadow-inner">
      <div className="aspect-[2/3]">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-100 to-indigo-200 opacity-80 blur-xl" />
        <div className="absolute inset-[8%] rounded-xl border border-indigo-300/70 bg-white/85 shadow-lg shadow-indigo-200/70" />
        <div className="relative z-10 flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.4em] text-indigo-600">
          {label ?? 'Cover Placeholder'}
        </div>
      </div>
    </div>
  )
}

export const metadata = { title: 'Books' }

export default function Books() {
  const palette = themeLibrary[BOOKS_THEME].classes

  return (
    <div className="space-y-16">
      <Quote
        theme={BOOKS_THEME}
        text="These books capture transmissions in print so seekers can return to the teachings again and again."
        author="Santosh Ma"
        role="Author"
      />

      <section className="space-y-6">
        <header className="space-y-2 text-center">
          <h1 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Featured Library</h1>
          <p className={`text-base leading-7 ${palette.muted}`}>
            Replace the placeholder links with the final marketplace URLs and rich descriptions once they are
            approved.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.title}
              className="flex flex-col gap-4 rounded-3xl border border-indigo-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <VisualPlaceholder label="Book Cover" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-indigo-900">{book.title}</h3>
                <p className="text-base leading-7 text-indigo-700">{book.description}</p>
              </div>
              <div>
                <ButtonLink href={book.href} variant="secondary" theme={BOOKS_THEME} size="sm">
                  View Listing
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
