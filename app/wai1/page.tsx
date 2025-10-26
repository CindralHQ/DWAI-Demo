import Image, { type StaticImageData } from 'next/image'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Quote } from '@/components/ui/Quote'
import { ThemeName, themeLibrary } from '@/lib/designSystem'
import { ChakraNav } from '@/components/ui/ChakraNav'
import { EnrollBlock } from '@/components/ui/EnrollBlock'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import { LightboxImage } from '@/components/ui/LightboxImage'
import manipuraIcon from '@/assets/icons/Manipura.png'
import heroVisual from '@/assets/visuals/Body-On-Fire.png'
import roadmapVisual from '@/assets/visuals/AllChakras.png'
import synthesisVisual from '@/assets/visuals/Freeing-Manipura-Blocks.png'
import clarityVisual from '@/assets/visuals/Light-Emitting-Through-Body.png'
import courseVisual from '@/assets/visuals/Body-On-Fire-2.jpg'
import uniquenessVisual from '@/assets/visuals/Head-on-Fire.png'
import whyWatchVisual from '@/assets/visuals/Kundalini-Serpant.png'
import quoteVisual from '@/assets/visuals/Freeing-Manipura-Blocks.png'

const THEME: ThemeName = 'manipura'

type VisualAsset = { src: StaticImageData; alt: string }

const seriesHighlights: Array<{
  title: string
  description: string
  visual: VisualAsset
}> = [
  {
    title: 'A Guided Roadmap',
    description:
      'Its 12-part structure lays out the roadmap of human evolution from the causal body to awakening of the Ajna and beyond.',
    visual: {
      src: roadmapVisual,
      alt: 'Illustration of the chakra system aligning along the spine'
    }
  },
  {
    title: 'Meticulous Synthesis',
    description:
      'The Who Am I Series presents a carefully structured synthesis of ancient knowledge on consciousness and the subtle anatomy.',
    visual: {
      src: synthesisVisual,
      alt: 'Manipura chakra artwork dissolving energy blocks'
    }
  },
  {
    title: 'Unmatched Clarity',
    description:
      'Ancient yogic insights on chakras, subtle body, and human evolution are explained with rare precision and lived insight.',
    visual: {
      src: clarityVisual,
      alt: 'Meditation figure radiating golden light throughout the body'
    }
  }
]

const sacredOffering = [
  'The Who Am I Series is a rare and precious gift to every student on the path of yoga and self-evolution.',
  'Shared experience helps seekers understand the workings of the energy and subtle body with greater clarity.',
  'Practical wisdom enables a seeker to approach daily life with balance, awareness, and reverence.'
]

const uniqueness = [
  'Direct insight from a living experience: Santosh Ma shares the visions and inner movements revealed during deep meditation.',
  'Illustrated by the inner eye: visuals in this course are not symbolic; they are transmissions where human intention and divine will merge.',
  'Offers an empirical lens to subtle-body studies seldom found in contemporary literature or academia.',
  'An invitation to step into a deeper experience of consciousness and recognise your true self.'
]

const courseContent = [
  'Understanding the human mind: thoughts, emotions, and intellect',
  'The true function of chakras in daily life',
  "The subtle body's cleansing process",
  'The subtle body: nadis, blocks, and purification',
  'The movement of prana and kundalini and how to prepare',
  'Why the Guru is essential to spiritual evolution'
]

const callouts = [
  'Deepen yogic understanding beyond the surface.',
  'Use this wisdom in teaching and personal practice.',
  'Align with your true path in a fast-changing world.',
  'Receive deep insights rooted in real experience, not theory.',
  'Accessible for every yoga seeker and teacher.',
  'Clear to understand, yet spiritually catalytic.',
  'Feels like a visual shaktipat that awakens the inner current.'
]

const whyWatch = [...sacredOffering, ...callouts]

export const metadata = { title: 'Who Am I - Part 1' }

export default function WaiOnePage() {
  const palette = themeLibrary[THEME].classes

  return (
    <>
      <WaiIntroOverlay theme={THEME} icon={manipuraIcon} label="Manipura" />
      <div
        className={[
          palette.surface,
          'min-h-screen rounded-[24px] px-3 py-8 shadow-inner shadow-black/5 sm:rounded-[32px] sm:px-6 sm:py-10 md:rounded-[36px] md:px-10'
        ].join(' ')}
      >
        <div className="space-y-16 md:space-y-20">
          <section className="space-y-8 rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 p-6 text-white shadow-lg ring-1 ring-amber-300/40 sm:p-7 md:p-9">
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
              <LightboxImage
                src={heroVisual}
                alt="Illustration of Manipura igniting the inner fire"
                title="Manipura: Inner Fire Awakening"
                description="This Manipura illustration captures the ignition of will, courage, and inner fire that powers the Part 1 transmission."
                className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-amber-200/40 bg-white/10 text-left shadow-xl md:aspect-square"
                imageClassName="object-cover"
                sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
                priority
              />
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Who Am I Series</p>
                  <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Part I</h1>
                  <p className="text-xl font-semibold text-white">
                    Understanding the Role of Chakras & Kundalini Shakti
                  </p>
                </div>
                <p className="text-base leading-7 text-white/90">
                  This is not a course. It is a living transmission. Each session of the 12-part series carries
                  energetic resonance, like a visual shaktipat, awakening your own inner knowing.
                </p>
                <ChakraNav active="wai1" />
                <div className="flex flex-wrap gap-3">
                  <Button theme={THEME} size="lg">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

      <div className="flex flex-col items-center gap-8 rounded-3xl border border-amber-100 bg-white/80 p-6 shadow-sm md:flex-row md:items-center md:gap-12">
        <Quote
          theme={THEME}
          text={`I have this inherent quality of accepting and believing what is said, with the result that I experienced great excitement and inner joy on reading the lines, "I am now entering upon the greatest teaching accessible to man, for I am learning the secret of existence."`}
          author="Santosh Ma"
          role="Kundalini Diary"
          className="flex-1"
        />
        <div className="relative h-40 w-40 shrink-0 md:h-48 md:w-48">
          <Image
            src={quoteVisual}
            alt="Manipura chakra artwork symbolising the awakening inner fire"
            fill
            className="object-contain"
            sizes="(min-width: 768px) 12rem, 10rem"
          />
        </div>
      </div>

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            About The Who Am I - Part 1 Series
          </h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            A structured introduction to the inner journey of kundalini shakti and the chakras.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {seriesHighlights.map((feature, index) => (
            <Card
              key={feature.title}
              theme={THEME}
              eyebrow={`Insight ${String(index + 1).padStart(2, '0')}`}
              title={feature.title}
              description={feature.description}
            >
              <LightboxImage
                src={feature.visual.src}
                alt={feature.visual.alt}
                title={feature.title}
                description={feature.description}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-amber-100 bg-amber-50/60 text-left"
                imageClassName="object-cover"
                sizes="(min-width: 1280px) 320px, (min-width: 768px) 33vw, 100vw"
              />
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
        <LightboxImage
          src={courseVisual}
          alt="Manipura-inspired illustration representing course modules"
          title="Course Modules Visual"
          description="A Manipura-inspired illustration representing the modules explored throughout Part 1 of the Who Am I series."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-amber-200/50 bg-amber-100/40 text-left shadow-md"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 50vw, 100vw"
        />
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Course Content</h2>
          <p className="text-base leading-7 text-amber-800">
            Whether you are beginning or advanced on the yogic path, these transmissions unlock vital keys for daily
            practice and inner transformation.
          </p>
          <ul className="space-y-2 text-base leading-7 text-amber-800">
            {courseContent.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            What Makes This Series Unique?
          </h2>
          <ul className="space-y-3 text-base leading-7 text-amber-800">
            {uniqueness.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <LightboxImage
          src={uniquenessVisual}
          alt="Illustration of inner fire rising through meditation"
          title="Inner Fire Rising"
          description="A depiction of Manipura's transformative flames rising through meditation, highlighting the series' unique transmission."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-amber-200 bg-white text-left shadow-lg"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 50vw, 100vw"
        />
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4 rounded-3xl border border-amber-100 bg-amber-50 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold text-amber-900">Why You Must Watch It</h3>
          <ul className="space-y-2 text-base leading-7 text-amber-800">
            {whyWatch.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <LightboxImage
          src={whyWatchVisual}
          alt="Kundalini serpent artwork symbolising awakened energy"
          title="Awakened Kundalini Energy"
          description="This kundalini serpent visual invites seekers to engage with the awakened energy Part 1 helps cultivate."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-amber-200 bg-amber-100/50 text-left shadow-lg"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, 100vw"
        />
      </section>

      <EnrollBlock
        theme={THEME}
        price="INR 12,000"
        description="For the first time in the history of spiritual literature, the process of awakening has been documented with such vivid detail through illustrations. These teachings show how kundalini shakti purifies and activates the subtle body, transforming the human body, mind, and intellect. The result is a deep, positive influence on daily living."
      />
    </div>
      </div>
    </>
  )
}
