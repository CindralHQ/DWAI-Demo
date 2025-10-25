import './globals.css'
import { BackgroundAudio } from '@/components/ui/BackgroundAudio'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/ui/Header'
import { PageFade } from '@/components/ui/PageFade'

export const metadata = {
  title: 'Who Am I - Series',
  description: 'Static Next.js rebuild of discoverwhoami.com for conversion work.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BackgroundAudio />
        <Header />
        <main className="px-4 pb-10 sm:px-6 lg:px-8">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
      </body>
    </html>
  )
}
