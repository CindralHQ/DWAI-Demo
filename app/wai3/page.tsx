import Image, { type StaticImageData } from 'next/image'

import { Button } from '@/components/ui/Button'
import { Quote } from '@/components/ui/Quote'
import { ThemeName, themeLibrary } from '@/lib/designSystem'
import { ChakraNav } from '@/components/ui/ChakraNav'
import { EnrollBlock } from '@/components/ui/EnrollBlock'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import { LightboxImage } from '@/components/ui/LightboxImage'
import vishuddhaIcon from '@/assets/icons/Vishuddha.png'
import heroVisual from '@/assets/visuals/Sahasrar-Blossoming.png'
import crownRoadmapVisual from '@/assets/visuals/Ajna-Chakra-Concentration.png'
import ascentPathVisual from '@/assets/visuals/Pathway-To-Light.png'
import resonanceVisual from '@/assets/visuals/OM.png'
import courseVisual from '@/assets/visuals/Gurus-Blessings-2.png'
import uniquenessVisual from '@/assets/visuals/Sahasrara-Blossoming-2.jpeg'
import whyWatchVisual from '@/assets/visuals/Blue-Guru-Blessings.png'
import quoteVisual from '@/assets/visuals/Sahasrara-Blossoming-2.jpeg'

const THEME: ThemeName = 'vishuddha'

type VisualAsset = { src: StaticImageData; alt: string }

const ascentHighlights: Array<{
  title: string
  description: string
  visual: VisualAsset
}> = [
  {
    title: 'Crown of Awakening',
    description:
      'For the first time, the ascent of consciousness to the Sahasrar - the crown of awakening - is mapped with precise visuals.',
    visual: {
      src: crownRoadmapVisual,
      alt: 'Ajna chakra concentration artwork guiding the ascent toward the crown'
    }
  },
  {
    title: 'Inner Witness Accounts',
    description:
      'Santosh Ma shares the culminating phases of her own evolution, received through sacred transmissions from the Empyrean realms.',
    visual: {
      src: ascentPathVisual,
      alt: 'A luminous pathway ascending toward the sahasrar'
    }
  },
  {
    title: 'Initiation Through Vision',
    description:
      'These luminous images transmit not just knowledge but a resonance that invites seekers into direct experience.',
    visual: {
      src: resonanceVisual,
      alt: 'Sacred Om symbol representing pure resonance'
    }
  }
]

const luminousResonance = [
  'Unfolding of the higher Self through grace-filled ascent.',
  'Teaching that transcends concept - it is initiation through vision.',
  'Direct energetic resonance with the crown centre.'
]

const courseReveals = [
  'The Spiritual Ladder - the ascent beyond effort into grace.',
  'The Spiritual Hand - a symbol of divine intervention and upliftment.',
  'The Celestial Bird - the liberated soul taking flight.',
  'Shaktipat - the act of grace transmitted from Guru to disciple.',
  'The Region of Om - the eternal vibration at the crown of creation.'
]

const audience = [
  'Seekers devoted to the path of inner transformation.',
  'Practitioners of yoga, meditation, or subtle energy work.',
  'Students of kundalini and subtle-body knowledge.',
  'Disciples who have received, or are called to receive, shaktipat.',
  'Anyone who has journeyed through Who Am I Parts 1 and 2.'
]

const sacredOffering = [
  'A rare and precious gift to seekers walking the yogic path.',
  'Shared experience that deepens understanding of subtle energy and the inner body.',
  'Practical wisdom that helps seekers live with balance, devotion, and awareness.'
]

const uniqueness = [
  'Direct insights grounded in lived mystical experience.',
  'Illustrations downloaded in deep meditation, carrying the imprint of higher realms.',
  'An empirical lens on subtle-body transformation seldom documented.',
  'Each session is a living transmission - an energetic invitation into grace.'
]

const uniquePoints = [...luminousResonance, ...uniqueness]
const whyWatch = [...audience, ...sacredOffering]

export const metadata = { title: 'Who Am I - Part 3' }

export default function WaiThreePage() {
  const palette = themeLibrary[THEME].classes

  return (
    <>
      <WaiIntroOverlay theme={THEME} icon={vishuddhaIcon} label="Vishuddha" />
      <div
        className={[
          palette.surface,
          'min-h-screen rounded-[24px] px-3 py-8 shadow-inner shadow-black/5 sm:rounded-[32px] sm:px-6 sm:py-10 md:rounded-[36px] md:px-10'
        ].join(' ')}
      >
        <div className="space-y-16 md:space-y-20">
      <section className="space-y-8 rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-600 p-6 text-white shadow-lg ring-1 ring-sky-300/40 sm:p-7 md:p-9">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:items-center">
          <LightboxImage
            src={heroVisual}
            alt="Sahasrara blossoming with radiant light"
            title="Sahasrar Blossoming"
            description="A luminous sahasrar visual charting the radiant blossoming explored throughout Part 3."
            className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-sky-200/40 bg-white/10 text-left shadow-xl md:aspect-square"
            imageClassName="object-cover"
            sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
            priority
          />
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.4em] text-white/70">Who Am I Series</p>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Part III</h1>
              <p className="text-xl font-semibold text-white">Journey to the Sahasrar: The Final Ascent of Consciousness</p>
            </div>
            <p className="text-lg leading-8 text-white/90">
              This is not a course. It is a living transmission. Each session in this 12-part series carries
              energetic resonance - like a visual shaktipat that awakens your own inner knowing.
            </p>
            <ChakraNav active="wai3" />
            <div className="flex flex-wrap gap-3">
              <Button theme={THEME} size="lg">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center gap-8 rounded-3xl border border-sky-200 bg-white/80 p-6 shadow-sm md:flex-row md:items-center md:gap-12">
        <Quote
          theme={THEME}
          text="There comes a moment in the soul’s long journey where the ascent is no longer an effort, but an act of Grace."
          author="Santosh Ma"
          role="Kundalini Diary"
          className="flex-1"
        />
        <div className="relative h-40 w-40 shrink-0 md:h-48 md:w-48">
          <Image
            src={quoteVisual}
            alt="Sahasrara blossoming into cascades of light"
            fill
            className="object-contain"
            sizes="(min-width: 768px) 12rem, 10rem"
          />
        </div>
      </div>

      <section className="space-y-8">
        <header className="space-y-3 text-center">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            About the Who Am I - Part 3 Series
          </h2>
          <p className="text-base leading-7 text-sky-800">
            There comes a moment in the soul&rsquo;s long journey where the ascent is no longer an effort, but an act of
            grace. Part 3 documents this luminous threshold with startling clarity and devotion.
          </p>
          <p className="text-base leading-7 text-sky-800">
            Santosh Ma shares her direct inner experience of the culminating phases of spiritual evolution.
            Sacred visuals &mdash; downloaded from the Empyrean realms &mdash; guide seekers through the final stages of
            the soul&rsquo;s return.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {ascentHighlights.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-sky-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-400">
                Insight {String(index + 1).padStart(2, '0')}
              </span>
              <LightboxImage
                src={item.visual.src}
                alt={item.visual.alt}
                title={item.title}
                description={item.description}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-sky-100 bg-sky-50/60 text-left"
                imageClassName="object-cover"
                sizes="(min-width: 1280px) 320px, (min-width: 768px) 33vw, 100vw"
              />
              <h3 className="text-lg font-semibold text-sky-900">{item.title}</h3>
              <p className="text-base leading-7 text-sky-800">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4 rounded-3xl bg-sky-50 p-6 shadow-sm sm:p-8">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>Course Content</h2>
          <ul className="space-y-2 text-base leading-7 text-sky-800">
            {courseReveals.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base leading-7 text-sky-700">
            Each element is explained with inner precision, guiding seekers through the mystical anatomy of
            the soul's final ascent.
          </p>
        </div>
        <LightboxImage
          src={courseVisual}
          alt="Guru's blessing transmitted through luminous light"
          title="Guru's Luminous Blessing"
          description="A luminous blessing visual that anchors the teachings delivered throughout Part 3."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-sky-200/60 bg-white text-left shadow-lg"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 50vw, 100vw"
        />
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4">
          <h2 className={`text-3xl font-semibold tracking-tight ${palette.text}`}>
            What Makes This Series Unique?
          </h2>
          <ul className="space-y-3 text-base leading-7 text-sky-800">
            {uniquePoints.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="rounded-3xl bg-white p-5 text-base leading-7 text-sky-700 shadow-sm">
            If you are ready to step into a deeper experience of consciousness and recognise your true self,
            this is your invitation.
          </p>
        </div>
        <LightboxImage
          src={uniquenessVisual}
          alt="Sahasrara blossoming with cascades of light"
          title="Cascades of Sahasrar Light"
          description="A sahasrar blossoming visual conveying the cascades of light described in Part 3."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-sky-200 bg-white text-left shadow-lg"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 520px, (min-width: 768px) 50vw, 100vw"
        />
      </section>

      <section className="grid gap-6 sm:gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:items-center">
        <div className="space-y-4 rounded-3xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <h3 className={`text-2xl font-semibold text-sky-900`}>Why You Must Watch It</h3>
          <ul className="space-y-2 text-base leading-7 text-sky-800">
            {whyWatch.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <LightboxImage
          src={whyWatchVisual}
          alt="Guru enveloped in blue light symbolising sahasrara grace"
          title="Sahasrar Grace"
          description="A blue-lit guru visual embodying the sahasrar grace that permeates Part 3."
          className="aspect-[4/3] overflow-hidden rounded-3xl border border-sky-200 bg-sky-100/40 text-left shadow-lg"
          imageClassName="object-cover"
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 40vw, 100vw"
        />
      </section>

      <EnrollBlock
        theme={THEME}
        price="INR 15,000"
        description={
          <>
            <p>
              A journey beyond the mind. Let this sacred unfolding illuminate your inner ascent. Let the
              Sahasrar blossom.
            </p>
            <p className="font-semibold text-white">
              Grace does not descend. Grace is revealed when the seeker is ready.
            </p>
          </>
        }
      />
        </div>
      </div>
    </>
  )
}
