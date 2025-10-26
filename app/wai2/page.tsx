import Image, { type StaticImageData } from 'next/image'

import { Button } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { ThemeName, themeLibrary } from '@/lib/designSystem'
import { ChakraNav } from '@/components/ui/ChakraNav'
import { EnrollBlock } from '@/components/ui/EnrollBlock'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import { LightboxImage } from '@/components/ui/LightboxImage'
import anahataIcon from '@/assets/icons/Anahata.png'
import heroVisual from '@/assets/visuals/Blue-Guru-Blessings.png'
import ascentVisual from '@/assets/visuals/All-Chakras-Aligned.png'
import journeyVisual from '@/assets/visuals/Blue_Lotus.jpeg'
import heartMechanicsVisual from '@/assets/visuals/Gurus-Blessings-2.png'
import courseVisual from '@/assets/visuals/Santosh-Ma-Shivratri-1.png'
import uniquenessVisual from '@/assets/visuals/Receiving-Giving-Through-Ajna-Chakra.jpg'
import whyWatchVisual from '@/assets/visuals/Sitting-on-Lotus.jpg'
import quoteVisual from '@/assets/visuals/Blue_Lotus.jpeg'

const THEME: ThemeName = 'anahata'

type VisualAsset = { src: StaticImageData; alt: string }

const aboutHighlights: Array<{
  title: string
  description: string
  visual: VisualAsset
}> = [
  {
    title: 'Sacred Ascent Revealed',
    description:
      'For the first time, the sacred ascent of consciousness and awakening of the Spiritual Heart is shared with vivid clarity.',
    visual: {
      src: ascentVisual,
      alt: 'Chakra alignment artwork symbolising sacred ascent'
    }
  },
  {
    title: 'Journey to the Anahat Chakra',
    description:
      "Part 2 traces the soul's journey from creation to reunion with the Self at the Anahat Chakra - the spiritual heart centre.",
    visual: {
      src: journeyVisual,
      alt: 'Blue lotus artwork representing the spiritual heart opening'
    }
  },
  {
    title: 'Living Mechanics of the Heart',
    description:
      'Through her own awakening, Santosh Ma unveils how divine love and wisdom blossom within the heart.',
    visual: {
      src: heartMechanicsVisual,
      alt: 'Teacher bestowing blessings as light radiates through the heart'
    }
  }
]

const courseContent = [
  'How creation begins - the original impulse behind existence.',
  'Manifestation of the Atma - the divine spark within us.',
  "Birth of the Jeev-Atma - the soul's journey into duality.",
  'The ascent of consciousness - from lower chakras to heart awakening.',
  'The sacred meeting at the Anahat Chakra - where the soul reunites with the Self.',
  'The blossoming of the Spiritual Heart - divine love and awareness become one.'
]

const uniqueness = [
  'Direct insight from a living experience: Santosh Ma shares the visions received during deep meditation.',
  'Illustrated by the inner eye: sacred visuals are transmitted from realms where human will and divine will merge.',
  'An empirical lens on subtle-body studies rarely found in contemporary literature or academia.',
  'Each session is a living transmission - a visual shaktipat that awakens inner knowing.'
]

const whyWatch = [
  'Feel the spiritual heart awaken through Santosh Ma’s lived transmissions.',
  'Receive practical guidance on kundalini, consciousness, and mystic physiology.',
  'Deepen yoga and meditation practice with precise subtle-body wisdom.',
  'Witness the sacred ascent to the Anahat Chakra and blossoming of divine love.',
  'Anchor your path with compassionate mentorship for seekers, teachers, and researchers alike.'
]

export const metadata = { title: 'Who Am I - Part 2' }

export default function WaiTwoPage() {
  const palette = themeLibrary[THEME].classes

  return (
    <>
      <WaiIntroOverlay theme={THEME} icon={anahataIcon} label="Anahata" />
      <div
        className={[
          palette.surface,
          'min-h-screen rounded-[24px] px-3 py-8 shadow-inner shadow-black/5 sm:rounded-[32px] sm:px-6 sm:py-10 md:rounded-[36px] md:px-10'
        ].join(' ')}
      >
        <div className="space-y-16 md:space-y-20">
      <section className="space-y-8 rounded-3xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600 p-6 text-white shadow-lg ring-1 ring-emerald-300/40 sm:p-7 md:p-9">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
          <LightboxImage
            src={heroVisual}
            alt="Blessing visual symbolising the opening of the spiritual heart"
            title="Spiritual Heart Blessing"
            description="A blessing visual illustrating the opening of the spiritual heart as the seeker moves into Part 2."
            className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-emerald-200/40 bg-white/10 text-left shadow-xl md:aspect-square"
            imageClassName="object-cover"
            sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
            priority
          />
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Who Am I Series</p>
                  <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Part II</h1>
              <p className="text-xl font-semibold text-white">Shaktipat & Blossoming of the Spiritual Heart</p>
            </div>
            <p className="text-base leading-7 text-white/90">
              This course is a visual, energetic, and philosophical breakthrough for every sincere seeker on
              the spiritual path.
            </p>
            <ChakraNav active="wai2" />
            <div className="flex flex-wrap gap-3">
              <Button theme={THEME} size="lg">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center gap-8 rounded-3xl border border-emerald-100 bg-white/80 p-6 shadow-sm md:flex-row md:items-center md:gap-12">
        <Quote
          theme={THEME}
          text="Journey of the Jeev-Atma to the Anahat Chakra, Shaktipat and Blossoming of the Spiritual Heart. To the right of the chest lies the spiritual heart where the Creator dwells."
          author="Santosh Ma"
          role="Kundalini Diary"
          className="flex-1"
        />
        <div className="relative h-40 w-40 shrink-0 md:h-48 md:w-48">
          <Image
            src={quoteVisual}
            alt="Blue lotus artwork representing the awakened spiritual heart"
            fill
            className="object-contain"
            sizes="(min-width: 768px) 12rem, 10rem"
          />
        </div>
      </div>

      <section className="space-y-8">
        <header className="space-y-2 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            About the Who Am I - Part 2 Series
          </h2>
          <p className={`text-base leading-7 ${palette.muted}`}>
            A rare transmission that illuminates the sacred expansion of the spiritual heart.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {aboutHighlights.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-emerald-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
                Insight {String(index + 1).padStart(2, '0')}
              </span>
              <LightboxImage
                src={item.visual.src}
                alt={item.visual.alt}
                title={item.title}
                description={item.description}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60 text-left"
                imageClassName="object-cover"
                sizes="(min-width: 1280px) 320px, (min-width: 768px) 33vw, 100vw"
              />
              <h3 className="text-lg font-semibold text-emerald-900">{item.title}</h3>
              <p className="text-base leading-7 text-emerald-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
        <LightboxImage
          src={courseVisual}
          alt="Portrait of Santosh Ma channeling heart-centered wisdom"
          title="Heart-Centered Guidance"
          description="Santosh Ma channeling heart-centered wisdom that anchors the teachings within Part 2."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-200/50 bg-emerald-100/40 text-left shadow-md"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 50vw, 100vw"
        />
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Course Content</h2>
          <h3 className="text-lg font-semibold text-emerald-900">What You Will Learn</h3>
          <ul className="space-y-2 text-base leading-7 text-emerald-800">
            {courseContent.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{point}</span>
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
          <ul className="space-y-3 text-base leading-7 text-emerald-800">
            {uniqueness.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-3xl bg-white p-5 text-base leading-7 text-emerald-700 shadow-sm">
            This is not a course - it is a living transmission. Each session carries energetic resonance that
            awakens the heart's own remembering.
          </p>
        </div>
        <LightboxImage
          src={uniquenessVisual}
          alt="Energy exchange illustration representing heart transmission"
          title="Heart Transmission Visual"
          description="An energetic exchange depicting the heart transmission that makes Part 2 a living, breathing experience."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-200 bg-white text-left shadow-lg"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 50vw, 100vw"
        />
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
          <h3 className={`text-2xl font-semibold text-emerald-900`}>Why You Must Watch It</h3>
          <ul className="space-y-2 text-base leading-7 text-emerald-800">
            {whyWatch.map((entry) => (
              <li key={entry} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
        <LightboxImage
          src={whyWatchVisual}
          alt="Meditative figure seated on a lotus bathed in emerald light"
          title="Emerald Lotus Meditation"
          description="A meditative lotus visual that anchors the compassionate, heart-forward focus of the Part 2 teachings."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-100/50 text-left shadow-lg"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, 100vw"
        />
      </section>

      <EnrollBlock
        theme={THEME}
        price="INR 12,000"
        description="Embark on a sacred journey inward. Allow hidden wisdom to awaken, let the heart open, and feel the light of the soul rise."
      />
        </div>
      </div>
    </>
  )
}
