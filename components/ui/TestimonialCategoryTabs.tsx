'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

import { Card } from '@/components/ui/Card'
import { themeLibrary, type ThemeName } from '@/lib/designSystem'
import type { DriveVideoTestimonial, SheetTestimonial } from '@/lib/googleSheets'
import featuredPortrait from '@/assets/visuals/Sahasrara-Blossoming-2.jpeg'
import pathwayToLightVisual from '@/assets/visuals/Pathway-To-Light.png'
import chakrasVisual from '@/assets/visuals/AllChakras.png'
import australiaFlag from '@/assets/australia-flag.webp'
import GagangiriMaharaj from '@/assets/SEEKING-THE-BLESSINGS-OF-BABA-GAGANGIRI-IN-1999-2.webp'
import MasterCharles from '@/assets/WITH-MASTER-CHARLES-CANNON-2.webp'
import blueGuruPortrait from '@/assets/visuals/Blue-Guru-Blessings.png'
import allChakrasPortrait from '@/assets/visuals/All-Chakras-Aligned.png'
import placeholderPortrait from '@/assets/visuals/Blue-Guru-Blessings.png'

type TestimonialTabId = 'eminent' | 'seekersStudents'

type TestimonialTabDefinition = {
  id: TestimonialTabId
  label: string
}

type EminentTestimonial = {
  id: string
  name: string
  source?: string
  designation?: string
  location?: string
  date?: string
  testimonial: string
  image: StaticImageData
  imageAlt: string
}

type FeaturedVoiceCard = {
  title: string
  quote: string
  image: StaticImageData
  imageAlt: string
}

type TestimonialCategoryTabsProps = {
  theme: ThemeName
  seekersStudentsTestimonials: SheetTestimonial[]
  prioritizedVideoTestimonials: DriveVideoTestimonial[]
  usingFallbackTestimonials: boolean
}

const TESTIMONIAL_TABS: TestimonialTabDefinition[] = [
  { id: 'eminent', label: 'Eminent Personalities' },
  { id: 'seekersStudents', label: 'Seekers & Students' }
]

const EMINENT_TESTIMONIALS: EminentTestimonial[] = [
  {
    id: 'eminent-1',
    name: 'Param Pujya Swami Gangangirinath Maharaj',
    source: 'From the book Kundalini - A Gentle Force',
    designation: 'Gagangiri Yogashram',
    location: 'Khopoli, Maharashtra',
    date: 'July 1998',
    image: GagangiriMaharaj,
    imageAlt: 'Portrait placeholder for Param Pujya Swami Gangangirinath Maharaj',
    testimonial:
      'The dream-like visions presented by Santosh Sachdeva are very good, and they represent the blessings of the Masters to this generation. Tapasvis like Mahavatar Babaji, who have been engaged in ascetic practices for hundreds of years in the mountains in India, can thus enlighten any jiva. Yet there are hundreds of thousands of beings to choose from, and at least thousands of Sadhus who can be so blessed. The reason for her being singled out for this honour is that she too has been a part of the stream of Sadhus life afterlife, and this is the culmination of her own Punya karma involving hundreds of years of Sadhana. Every single atom of her body has become receptive to the teachings of the Masters, and this book is the result. This is the rarest of rare occurrences, a Mahadur labhyoga in the physical world. I suggest, therefore, that she diligently continues this practice to illustrate the workings of the Kundalini.'
  },
  {
    id: 'eminent-2',
    name: 'Master Charles Cannon',
    source: 'From the Foreword to Kundalini Meditation - Volume 1',
    designation: 'H. H. Swami Vivekananda Saraswati',
    date: 'April 2010',
    image: MasterCharles,
    imageAlt: 'Portrait placeholder for Master Charles Cannon',
    testimonial:
      'Santosh radiates a unified presence, the hallmark of fully actualised Kundalini experience. Her writings are the outcome of many years of Kundalini experience - from initial awakening through the resultant, progressive process of ever-increasing integrative wholeness. Santosh validates this time-honoured principle as she masterfully guides her students through this intricate and transformative journey. As you read these rich pages, you will encounter a true and authentic master of Kundalini experience. I encourage you to be grateful for what you have found and to celebrate your most fortunate experience. If you are reading this book, you are ready.'
  }
]

const FEATURED_VOICE_AUTHOR = {
  name: 'Eleanor Gwynn',
  designation: 'Seeker',
  country: 'Australia'
}

const FEATURED_VOICE_CARDS: FeaturedVoiceCard[] = [
  {
    title: 'An Education for Every Human',
    quote:
      "The 'Who Am I' series is the education that every human should be given from birth so that they can learn, apply, understand and embody the fullness of what's possible in a human life.",
    image: featuredPortrait,
    imageAlt: 'Visionary artwork from the Who Am I series'
  },
  {
    title: 'A Living Map of Humanity',
    quote:
      "The Who am I series encapsulates the evolutionary potential of what humanity can become. A new, never before articulated way of seeing what it is to be human. A new way of embodying the highest and most authentic expression of existence in human form. The power of these series to transform humanity cannot be overstated.",
    image: chakrasVisual,
    imageAlt: 'Chakra visual symbolising the Who Am I map'
  },
  {
    title: 'Instruction Manual for Now',
    quote:
      "\"Who Am I - Part 1\" is the instruction manual for life that every human being should have been given in school and early life.\n\nIn a world where we train for everything except how to live as a human, this series offers rare, accessible wisdom on the Chakras, Kundalini Shakti, and the true purpose of our existence.\n\nIf ever there was a teaching humanity needs right now, this is it.",
    image: pathwayToLightVisual,
    imageAlt: 'Pathway to Light artwork symbolising guidance and clarity'
  }
]

export function TestimonialCategoryTabs({
  theme,
  seekersStudentsTestimonials,
  prioritizedVideoTestimonials,
  usingFallbackTestimonials
}: TestimonialCategoryTabsProps) {
  const [activeTab, setActiveTab] = useState<TestimonialTabId>('eminent')
  const palette = themeLibrary[theme].classes
  const headingClass = palette.card.title
  const [primaryFeaturedVoice, ...otherFeaturedVoiceCards] = FEATURED_VOICE_CARDS

  return (
    <section className="space-y-6">
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/95 p-2 shadow-sm shadow-sky-200/50">
          {TESTIMONIAL_TABS.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
                  isActive ? 'bg-sky-600 text-white shadow-sm' : 'text-sky-700 hover:bg-sky-50'
                ].join(' ')}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <header className="space-y-2">
        <h1 className={`text-3xl font-semibold tracking-tight ${headingClass}`}>
          {activeTab === 'eminent'
            ? 'Honoured Voices of Eminent Personalities'
            : 'Voices from Our Community'}
        </h1>
        <p className={`text-base leading-7 ${palette.muted}`}>
          {activeTab === 'eminent'
            ? 'A curated collection of endorsements and reflections from respected spiritual leaders, teachers, and dignitaries.'
            : usingFallbackTestimonials
              ? 'Live testimonials will appear here once Google Sheets access is configured. Meanwhile, a curated selection is shown below.'
              : 'These reflections are streamed directly from the community submissions we have permission to share.'}
        </p>
      </header>

      {activeTab === 'eminent' ? (
        <div className="space-y-6">
          {EMINENT_TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-3xl border border-sky-200 bg-white/90 p-6 shadow-sm shadow-sky-200/40 md:p-8"
            >
              <div className="space-y-6">
                                <p className="text-base leading-8 text-slate-700">{testimonial.testimonial}</p>

                <div className="grid gap-6 md:grid-cols-[420px_minmax(0,1fr)] md:gap-8">
                  <div className="overflow-hidden rounded-2xl border border-sky-100 bg-sky-50 p-1">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.imageAlt}
                      width={testimonial.image.width}
                      height={testimonial.image.height}
                      className="h-auto w-full object-contain rounded-2xl"
                      sizes="(min-width: 768px) 420px, 100vw"
                    />
                  </div>
                  <div className="space-y-1.5 self-end text-amber-700">
                    <p className="text-xl font-semibold">{testimonial.name}</p>
                    {testimonial.source ? (
                      <p className="text-lg font-medium">{testimonial.source}</p>
                    ) : null}
                    {testimonial.designation ? (
                      <p className="text-lg">{testimonial.designation}</p>
                    ) : null}
                    {testimonial.location ? <p className="text-lg">{testimonial.location}</p> : null}
                    {testimonial.date ? <p className="text-lg">{testimonial.date}</p> : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-white to-sky-100/80 p-6 shadow-lg shadow-sky-200/40 ring-1 ring-sky-200/60 md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex h-full flex-col gap-4">
                <article className="flex h-full flex-col gap-4 rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100/60">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-[22px] border border-sky-100 bg-sky-50">
                      <Image
                        src={primaryFeaturedVoice.image}
                        alt={primaryFeaturedVoice.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 64px, 64px"
                        priority
                      />
                    </div>
                    <p className="text-base font-semibold text-sky-800">{primaryFeaturedVoice.title}</p>
                  </div>
                  <p className="text-base leading-7 text-sky-900">{primaryFeaturedVoice.quote}</p>
                </article>

                <article className="flex h-full flex-col justify-between gap-4 rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100/60">
                  <div className="flex items-center gap-3">
                    <Image
                      src={australiaFlag}
                      alt="Australian flag"
                      width={88}
                      height={56}
                      className="h-14 w-auto rounded-md border border-sky-100 shadow"
                      priority
                    />
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">
                        Featured Voice
                      </span>
                      <p className="text-lg font-semibold text-sky-900">{FEATURED_VOICE_AUTHOR.name}</p>
                      {[FEATURED_VOICE_AUTHOR.designation, FEATURED_VOICE_AUTHOR.country].filter(Boolean).length > 0 ? (
                        <p className="text-sm font-medium text-sky-500">
                          {[FEATURED_VOICE_AUTHOR.designation, FEATURED_VOICE_AUTHOR.country]
                            .filter(Boolean)
                            .join(' - ')}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </article>
              </div>

              {otherFeaturedVoiceCards.map((card, index) => (
                <article
                  key={`featured-voice-${index + 1}`}
                  className="flex h-full flex-col gap-4 rounded-[28px] border border-sky-100 bg-white p-6 shadow-sm shadow-sky-100/60"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-[22px] border border-sky-100 bg-sky-50">
                      <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 64px, 64px"
                      />
                    </div>
                    <p className="text-base font-semibold text-sky-800">{card.title}</p>
                  </div>
                  <p className="text-base leading-7 text-sky-900">{card.quote}</p>
                </article>
              ))}
            </div>
          </div>

          {prioritizedVideoTestimonials.length > 0 ? (
            <section className="mt-5 space-y-5">
              <header className="space-y-2">
                <h2 className={`text-3xl font-semibold tracking-tight ${headingClass}`}>
                  Expressions from the Heart - The Voice of Experience
                </h2>
                <p className={`text-base leading-7 ${palette.muted}`}>
                  Each voice carries the imprint of a unique journey - a shift in awareness, a deepening in presence, a quiet remembrance of truth.
                </p>
              </header>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {prioritizedVideoTestimonials.map((video) => (
                  <Card
                    key={video.id}
                    theme={theme}
                    className="flex h-full flex-col gap-4 rounded-3xl bg-white/80 p-6 shadow-sm shadow-sky-200/30 md:p-7"
                    title={video.title}
                    description={video.description}
                    leadingVisual={
                      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                          className="absolute inset-0 h-full w-full border-0"
                        />
                      </div>
                    }
                  />
                ))}
              </div>
            </section>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            {seekersStudentsTestimonials.map((testimonial, index) => {
              const photoSrc: string | StaticImageData = testimonial.photoUrl ?? placeholderPortrait
              const isRemoteImage = typeof photoSrc === 'string'

              return (
                <Card
                  key={`${testimonial.name}-${index}`}
                  theme={theme}
                  className="flex h-full flex-col gap-5 rounded-3xl bg-white/80 p-6 shadow-sm shadow-sky-200/30 md:p-7"
                  leadingVisual={
                    <div className="flex flex-col gap-4">
                      <p className="text-base leading-7 text-sky-700 whitespace-pre-line">
                        {testimonial.testimonial}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="relative h-[5.75rem] w-[5.75rem] overflow-hidden rounded-[24px] border border-white/70 bg-white/70 shadow-inner shadow-sky-200/60 md:h-[6.5rem] md:w-[6.5rem]">
                          <Image
                            src={photoSrc}
                            alt={`Portrait of ${testimonial.name}`}
                            fill
                            className="object-cover"
                            unoptimized={isRemoteImage}
                            sizes="(min-width: 768px) 104px, 92px"
                          />
                        </div>
                        <div className="space-y-1.5">
                          {testimonial.title ? (
                            <p className="text-base font-semibold text-sky-700">{testimonial.title}</p>
                          ) : null}
                          <span className="text-sm font-semibold uppercase tracking-[0.1em] text-sky-500">
                            Testimonial By
                          </span>
                          <p className="!mt-0 text-sm font-semibold text-sky-800">{testimonial.name}</p>
                          {[testimonial.designation, testimonial.country].filter(Boolean).length > 0 ? (
                            <p className="text-sm font-medium text-sky-500">
                              {[testimonial.designation, testimonial.country].filter(Boolean).join(' - ')}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  }
                />
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
