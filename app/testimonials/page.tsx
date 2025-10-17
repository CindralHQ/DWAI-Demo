import { Card } from '@/components/ui/Card'
import { Quote } from '@/components/ui/Quote'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

const TESTIMONIALS_THEME: ThemeName = 'lotus'

const testimonials = [
  {
    name: 'Participant, India',
    story:
      '“The transmissions felt personal even through the screen. I could sense the current working in real-time.”'
  },
  {
    name: 'Retreat Guest, Australia',
    story:
      '“These teachings gave me language for sensations I have carried for decades. I felt held and understood.”'
  },
  {
    name: 'Student, USA',
    story: '“The practices are precise and grounded. My meditation unfolded with new steadiness.”'
  },
  {
    name: 'Seeker, UK',
    story: '“I revisit these sessions weekly. The energy remains alive, guiding me through major life shifts.”'
  }
]

export const metadata = { title: 'Testimonials' }

export default function Testimonials() {
  const palette = themeLibrary[TESTIMONIALS_THEME].classes

  return (
    <div className="space-y-12">
      <Quote
        theme={TESTIMONIALS_THEME}
        text="We listen closely to the community. Every narrative helps refine how the transmissions are offered."
        author="Discover Who Am I Team"
      />

      <section className="space-y-5">
        <header className="space-y-2">
          <h1 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>What Our Students Share</h1>
          <p className={`text-base leading-7 ${palette.muted}`}>
            Replace these placeholders with approved testimonials, names, and headshots from the original site.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              theme={TESTIMONIALS_THEME}
              eyebrow="Testimonial"
              title={testimonial.name}
              description={testimonial.story}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
