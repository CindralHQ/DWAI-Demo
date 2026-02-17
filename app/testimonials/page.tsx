import { TestimonialCategoryTabs } from '@/components/ui/TestimonialCategoryTabs'
import { type ThemeName } from '@/lib/designSystem'
import {
  fetchTestimonials,
  fetchVideoTestimonials,
  type DriveVideoTestimonial,
  type SheetTestimonial
} from '@/lib/googleSheets'

const TESTIMONIALS_THEME: ThemeName = 'twilight'

const FALLBACK_SEEKERS_STUDENTS_TESTIMONIALS: SheetTestimonial[] = [
  {
    name: 'Ananya',
    title: 'Energy That Travels',
    designation: 'Yoga Practitioner',
    country: 'India',
    testimonial:
      'The transmissions felt personal even through the screen. I could sense the current working in real-time.'
  },
  {
    name: 'Lucas',
    title: 'Held and Understood',
    designation: 'Retreat Guest',
    country: 'Australia',
    testimonial:
      'These teachings gave me language for sensations I have carried for decades. I felt held and understood.'
  },
  {
    name: 'Maya',
    title: 'Grounded Practices',
    designation: 'Meditation Student',
    country: 'USA',
    testimonial: 'The practices are precise and grounded. My meditation unfolded with new steadiness.'
  },
  {
    name: 'Asha',
    title: 'Guidance Through Change',
    designation: 'Seeker',
    country: 'United Kingdom',
    testimonial: 'I revisit these sessions weekly. The energy remains alive, guiding me through major life shifts.'
  }
]

export const metadata = { title: 'Testimonials' }

export default async function Testimonials() {
  const videoTestimonials: DriveVideoTestimonial[] = await fetchVideoTestimonials()
  const remoteTestimonials = await fetchTestimonials()
  const prioritizedVideoTitles = [
    'Initiation Through Ignition by Sacred Visuals',
    'the secret to the meaning of life delivered',
    'Observe the experience'
  ]
  const normalizeTitle = (title?: string) => title?.toLowerCase().replace(/\s+/g, ' ').trim() ?? ''
  const prioritizedTitleLookup = new Map(
    prioritizedVideoTitles.map((title, index) => [normalizeTitle(title), index])
  )
  const prioritizedVideoTestimonials = videoTestimonials
    .map((video, index) => ({
      video,
      rank:
        prioritizedTitleLookup.get(normalizeTitle(video.title)) ??
        prioritizedVideoTitles.length + index
    }))
    .sort((a, b) => a.rank - b.rank)
    .map(({ video }) => video)
  const seekersStudentsTestimonials: SheetTestimonial[] =
    remoteTestimonials.length > 0 ? remoteTestimonials : FALLBACK_SEEKERS_STUDENTS_TESTIMONIALS
  const usingFallbackTestimonials = remoteTestimonials.length === 0

  return (
    <div className="container space-y-12">
      <TestimonialCategoryTabs
        theme={TESTIMONIALS_THEME}
        seekersStudentsTestimonials={seekersStudentsTestimonials}
        prioritizedVideoTestimonials={prioritizedVideoTestimonials}
        usingFallbackTestimonials={usingFallbackTestimonials}
      />
    </div>
  )
}
