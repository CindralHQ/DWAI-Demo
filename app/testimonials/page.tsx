import Image from 'next/image'

import { Card } from '@/components/ui/Card'
import { Quote } from '@/components/ui/Quote'
import { themeLibrary, ThemeName } from '@/lib/designSystem'
import { fetchTestimonials, type SheetTestimonial } from '@/lib/googleSheets'

const TESTIMONIALS_THEME: ThemeName = 'lotus'

const FALLBACK_TESTIMONIALS: SheetTestimonial[] = [
  {
    name: 'Participant, India',
    testimonial:
      '“The transmissions felt personal even through the screen. I could sense the current working in real-time.”'
  },
  {
    name: 'Retreat Guest, Australia',
    testimonial:
      '“These teachings gave me language for sensations I have carried for decades. I felt held and understood.”'
  },
  {
    name: 'Student, USA',
    testimonial: '“The practices are precise and grounded. My meditation unfolded with new steadiness.”'
  },
  {
    name: 'Seeker, UK',
    testimonial: '“I revisit these sessions weekly. The energy remains alive, guiding me through major life shifts.”'
  }
]

export const metadata = { title: 'Testimonials' }

export default async function Testimonials() {
  const palette = themeLibrary[TESTIMONIALS_THEME].classes
  const remoteTestimonials = await fetchTestimonials()
  const testimonials: SheetTestimonial[] =
    remoteTestimonials.length > 0 ? remoteTestimonials : FALLBACK_TESTIMONIALS
  const usingFallback = remoteTestimonials.length === 0

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
            {usingFallback
              ? 'Live testimonials will appear here once Airtable access is configured. Meanwhile, a curated selection is shown below.'
              : 'These reflections are streamed directly from the community submissions we have permission to share.'}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${index}`}
              theme={TESTIMONIALS_THEME}
              eyebrow="Testimonial"
              title={testimonial.name}
              description={testimonial.testimonial}
              className="flex h-full flex-col gap-4"
              leadingVisual={
                testimonial.photoUrl ? (
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/60 bg-white/30 shadow-inner">
                      <Image
                        src={testimonial.photoUrl}
                        alt={`Portrait of ${testimonial.name}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="text-sm text-rose-50/80">Shared with permission</div>
                  </div>
                ) : null
              }
            />
          ))}
        </div>
      </section>
    </div>
  )
}
