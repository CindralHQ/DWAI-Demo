import { Button } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { ThemeName, themeLibrary } from '@/lib/designSystem'
import { ChakraNav } from '@/components/ui/ChakraNav'
import { EnrollBlock } from '@/components/ui/EnrollBlock'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import sahasraraIcon from '@/assets/icons/Sahasrara.png'

const THEME: ThemeName = 'sahasrara'

const seriesOverview = [
  {
    title: 'Teachings on the Three Granthis',
    description:
      'Detailed revelations on the Brahma, Vishnu, and Rudra Granthis - the energetic knots guarding the highest ascent.'
  },
  {
    title: 'Inner Shiva-Linga',
    description:
      'A direct transmission of the inner Shiva-Linga and its energetic counterpart experienced through deep meditation.'
  },
  {
    title: 'The Body of Gold',
    description:
      'Guidance into the final emergence of the golden body - the awakened, luminous human vessel.'
  }
]

const depthHighlights = [
  'Over 150 sacred visuals downloaded in deep meditation, mapping each transmutation step by step.',
  "Insights born from Santosh Ma's lived process of spiritual transmutation, guided by higher intelligence.",
  'Experiential truth, sacred imagery, and timeless yogic wisdom blended for the modern seeker.'
]

const courseContent = [
  'The Brahma Granthi',
  'The Vishnu Granthi',
  'The Rudra Granthi',
  'The Secret of the Linga',
  'The Body of Gold'
]

const uniqueness = [
  'Direct mystical revelations - not borrowed theory.',
  'Sacred illustrations carrying subtle energetic resonance that lifts awareness.',
  'A multidimensional map of the human being that advances ancient yogic understanding.',
  'Helps seekers make a quantum leap in self-knowledge and self-discovery.',
  'Explains advanced inner mechanisms in a way that remains accessible.'
]

const audience = [
  'Seekers devoted to the question "Who Am I".',
  'Yoga teachers and students deepening subtle-body mastery.',
  'Scholars and researchers exploring kundalini, consciousness, and mysticism.',
  'Interdisciplinary faculties synthesising ancient wisdom with neurobiology and human evolution.'
]

function VisualPlaceholder({ label }: { label?: string }) {
  return (
    <div className="flex min-h-[260px] items-center justify-center rounded-3xl border-2 border-dashed border-violet-300 bg-white/70 text-xs font-semibold uppercase tracking-[0.4em] text-violet-500">
      {label ?? 'Visual Placeholder'}
    </div>
  )
}

export const metadata = { title: 'Who Am I - Part 4' }

export default function WaiFourPage() {
  const palette = themeLibrary[THEME].classes

  return (
    <>
      <WaiIntroOverlay theme={THEME} icon={sahasraraIcon} label="Sahasrara" />
      <div
        className={[
          palette.surface,
          'min-h-screen rounded-[24px] px-3 py-8 shadow-inner shadow-black/5 sm:rounded-[32px] sm:px-6 sm:py-10 md:rounded-[36px] md:px-10'
        ].join(' ')}
      >
        <div className="space-y-16 md:space-y-20">
      <section className="space-y-8 rounded-3xl bg-gradient-to-br from-violet-600 via-violet-700 to-purple-900 p-6 text-white shadow-lg shadow-[0_0_45px_rgba(245,197,53,0.28)] ring-1 ring-amber-200/40 sm:p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
          <VisualPlaceholder label="Hero Illustration" />
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Who Am I Series</p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Part 4</h1>
              <p className="text-xl font-semibold text-white">
                Beyond the Veil: The Secret of the Three Granthis, the Shiva-Lingam, and the Body of Gold
              </p>
            </div>
            <div className="space-y-2 text-base leading-7 text-white/90">
              <p>
                Based not on philosophy but on lived transformation, Part 4 reveals the deepest layers of
                yogic evolution - teachings historically reserved for seekers guided by a realised master.
              </p>
              <ul className="space-y-1">
                <li>• Detailed teachings on the Brahma, Vishnu, and Rudra Granthis.</li>
                <li>• Direct revelation of the inner Shiva-Linga.</li>
                <li>• The mystery of the golden body, fully awakened.</li>
              </ul>
            </div>
            <ChakraNav active="wai4" />
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
            About the Series
          </h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            Secret of Secrets explores the most esoteric dimensions of human evolution - long considered
            inaccessible.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {seriesOverview.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-violet-200 bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-500">
                Teaching {String(index + 1).padStart(2, '0')}
              </span>
              <VisualPlaceholder label="Series Visual" />
              <h3 className="text-lg font-semibold text-violet-900">{item.title}</h3>
              <p className="text-base leading-7 text-violet-800">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            Course Content
          </h2>
        </header>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
          <VisualPlaceholder label="Cosmic Visual" />
          <div className="space-y-4 rounded-3xl bg-violet-100/70 p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-violet-900">The series will discuss:</h3>
            <ul className="space-y-2 text-base leading-7 text-violet-800">
              {courseContent.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            Depth and Distinction
          </h2>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {depthHighlights.map((text, index) => (
            <div
              key={text}
              className="flex flex-col gap-4 rounded-3xl border border-violet-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-500">
                Depth {String(index + 1).padStart(2, '0')}
              </span>
              <VisualPlaceholder label="Revelatory Visual" />
              <p className="text-base leading-7 text-violet-800">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
        <VisualPlaceholder label="Sacred Feet Artwork" />
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            What Makes This Series Unique
          </h2>
          <ul className="space-y-2 text-base leading-7 text-violet-800">
            {uniqueness.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl bg-violet-100/70 p-6 sm:p-8">
        <header className="text-center space-y-2">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>For Whom Is This Series?</h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            For seekers ready to receive the esoteric teachings of the golden body.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-violet-200 bg-white p-5 text-base leading-7 text-violet-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <EnrollBlock
        theme={THEME}
        price="INR 15,000"
        description={
          <>
            <p>This is not just a course - it is a sacred transmission.</p>
            <p className="text-white/90">
              "When the three knots dissolve, the river meets the ocean. The body becomes gold, the spirit
              becomes light, and silence becomes the highest teaching."
            </p>
          </>
        }
      />
        </div>
      </div>
    </>
  )
}
