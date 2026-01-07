import Image from 'next/image'

import homeLogo from '@/assets/Logo.png'
import aboutSeriesVisual from '@/assets/visuals/AllChakras.png'
import rareInsightsVisual from '@/assets/visuals/All-Chakras-Aligned.png'
import wisdomVisual from '@/assets/visuals/Sitting-on-Lotus.jpg'
import termaVisual from '@/assets/Treasure.png'
import { ButtonLink } from '@/components/ui/Button'
import { ThongdrolTabs } from '@/components/ui/ThongdrolTabs'
import { WaiIntroOverlay } from '@/components/ui/WaiIntroOverlay'
import { themeLibrary, ThemeName } from '@/lib/designSystem'

const ABOUT_THEME: ThemeName = 'twilight'

export const metadata = { title: 'About - Who Am I' }

const aboutDiscoverCopy = [
  'This is an unprecedented visual journey into the awakening of Kundalini Shakti. It offers a rare, must watch, demystification of the spiritual evolution process. The series makes an often esoteric journey accessible by providing a clear mapping of the evolution of consciousness.',
  'This four-part series is a sharing of Kundalini awakening as experienced by Santosh Ma. Through a rich tapestry of 250+ magnanimous, sacred visuals, Discover Who Am I gently guides sincere seekers through the subtle, often unseen stages of inner awakening. Meant for sincere seekers across different cultures and spiritual traditions, the series illuminates the invisible architecture of the subtle body, the chakras, the nadis and emphasizes the extent of self-purification needed.'
]

const rareInsightsCopy = [
  'The series explains, with remarkable clarity, the need for purification of both the body, mind and emotions and subtle-body transformations and the shifts of consciousness that occur on the sacred journey toward the blossoming of the Spiritual Heart.',
  "The ascent to the Sahasrar, the spiritual evolution's holy grail is explained clearly and enables accessibility to a journey, which till now was shrouded in mystery.",
  'The series culminates in a profound gift to humanity: the sacred insights on the 3 Granthis, the Shiva-Lingam, and the Body of Gold. This is knowledge has never before been shared in the history of yoga, in such depth and clarity.'
]

const wisdomCopy = [
  'The wisdom shared in this series is universal, offering guidance to sincere sadhaks across all spiritual paths.',
  'It supports seekers in deepening their practice, strengthening their connection with their chosen path and spiritual master, and gaining greater clarity about their own journey of self-evolution.'
]

const termaCopy = [
  'In Vajrayana Buddhism, a terma is a "hidden treasure" a wisdom teaching concealed by enlightened masters until humanity becomes ready to receive it.',
  'Many seekers feel that the Discover Who Am I series carries this quality of a contemporary terma : a revelation arriving at precisely the moment when the world stands on the threshold of transformation.',
  'As artificial intelligence rises in the outer world, the Discover Who Am I series opens the inner intelligence, the luminous architecture of consciousness itself.'
]

export default function AboutPage() {
  const palette = themeLibrary[ABOUT_THEME].classes
  const headingClass = palette.card.title

  return (
    <div className="container space-y-10 md:space-y-12">
      <WaiIntroOverlay theme={ABOUT_THEME} icon={homeLogo} label="Discover Who Am I" size="hero" applyBodyTint={false} />
      <section>
        <h1 className={`text-sky-800 text-3xl font-semibold tracking-tight ${headingClass} md:text-4xl`}>
          Discover Who Am I
        </h1>
        <h3 className={`text-2xl font-medium tracking-tight text-sky-700 md:text-2xl`}>
          May your seeking unveil the truth.
        </h3>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:items-center">
        <figure className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white p-4 shadow-sm md:mr-auto">
          <Image
            src={aboutSeriesVisual}
            alt="Illustration of the chakra system and subtle body alignment"
            className="mx-auto h-auto w-full max-h-[520px] rounded-2xl object-contain"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </figure>
        <div className="space-y-4 rounded-2xl border border-sky-200 bg-white p-6 text-base leading-7 text-sky-800 shadow-sm">
          <h2 className={`text-2xl font-semibold ${headingClass}`}>About Discover Who Am I</h2>
          {aboutDiscoverCopy.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
        <div className="space-y-4 rounded-2xl border border-sky-200 bg-white p-6 text-base leading-7 text-sky-800 shadow-sm">
          <h2 className={`text-2xl font-semibold ${headingClass}`}>Spiritual Knowledge & Rare Insights</h2>
          {rareInsightsCopy.map((paragraph, index) => (
            <p key={index} className={index === rareInsightsCopy.length - 1 ? 'font-semibold text-sky-900' : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
        <figure className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white p-4 shadow-sm md:ml-auto">
          <Image
            src={rareInsightsVisual}
            alt="Sacred heart imagery representing spiritual transformation"
            className="mx-auto h-auto w-full max-h-[520px] rounded-2xl object-contain"
            sizes="(min-width: 768px) 35vw, 100vw"
          />
        </figure>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center">
        <figure className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white p-4 shadow-sm md:mr-auto">
          <Image
            src={wisdomVisual}
            alt="Meditative figure representing universal guidance"
            className="mx-auto h-auto w-full max-h-[520px] rounded-2xl object-contain"
            sizes="(min-width: 768px) 35vw, 100vw"
          />
        </figure>
        <div className="space-y-4 rounded-2xl border border-sky-200 bg-white p-6 text-base leading-7 text-sky-800 shadow-sm">
          <h2 className={`text-2xl font-semibold ${headingClass}`}>Wisdom for Sadhaks on All Paths</h2>
          {wisdomCopy.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4 rounded-2xl border border-sky-200 bg-white p-6 text-base leading-7 text-sky-800 shadow-sm">
          <h2 className={`text-2xl font-semibold ${headingClass}`}>Thongdrol : Liberation Through Seeing</h2>
          <p>
            Thongdrol : Liberation Through Seeing was composed by Padmasambhava. The concept of Thongdrol rests on the belief that certain visuals when seen help initiate the seer into a higher level of consciousness. The mere viewing of the unfurled thongdrol is said to cleanse the viewer of negative karma and initiate a realization.
          </p>
          <p>
            The Discover Who Am I series is filled with profound sacred visuals which act like mini-shaktipats. Simply seeing these sacred visuals deepens awareness, refines perception, and brings a sense of inner harmony.
          </p>
        </div>
        <ThongdrolTabs theme={ABOUT_THEME} />
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center">
        <figure className="mx-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white p-4 shadow-sm md:mr-auto">
          <Image
            src={termaVisual}
            alt="Pathway of light symbolizing the hidden treasure"
            className="mx-auto h-auto w-full max-h-[520px] rounded-2xl object-contain"
            sizes="(min-width: 768px) 35vw, 100vw"
          />
        </figure>
        <div className="space-y-4 rounded-2xl border border-sky-200 bg-white p-6 text-base leading-7 text-sky-800 shadow-sm">
          <h2 className={`text-2xl font-semibold ${headingClass}`}>
            A Contemporary Terma: The Hidden Treasure of "Discover Who Am I"
          </h2>
          {termaCopy.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-100/90 via-amber-50 to-white p-6 text-sky-900 shadow-sm motion-safe:animate-page-fade">
        <h2 className={`text-2xl font-semibold ${headingClass}`}>May you discover the truth.</h2>
        <p className="text-base font-semibold leading-7">
          The time is Now, the teaching is for you. Honor it, watch it again and again and become free.
        </p>
        <div>
          <ButtonLink
            href="/wai1"
            theme={ABOUT_THEME}
            size="md"
            className="shadow-sm transition hover:-translate-y-0.5"
          >
            Go to Part 1
          </ButtonLink>
        </div>
      </section>
    </div>
  )
}
