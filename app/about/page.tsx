import { Quote } from '@/components/ui/Quote'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

const ABOUT_THEME: ThemeName = 'twilight'

export const metadata = { title: 'About - Who Am I' }

export default function About() {
  const palette = themeLibrary[ABOUT_THEME].classes

  return (
    <div className="space-y-12">
      <Quote
        theme={ABOUT_THEME}
        text="The Who Am I series emerged from lived experience. It is a bridge between ancient initiations and the modern seeker, transmitted with care."
        author="Santosh Ma"
        role="Founder, Discover Who Am I"
      />

      <article className="prose max-w-none">
        <h1 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Our Story</h1>
        <p className={palette.muted}>
          This placeholder copy will be replaced with the owner-approved narrative. It provides spacing and
          typographic references for the final edit.
        </p>
        <ul>
          <li>Origins of the 'Who Am I' transmissions and Santosh Ma's awakening journey.</li>
          <li>The urgency of evolving human consciousness in the current era.</li>
          <li>
            What differentiates these teachings and the living guidance offered through each release.
          </li>
        </ul>
      </article>
    </div>
  )
}
