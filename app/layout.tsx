import './globals.css'
import { BackgroundAudio } from '@/components/ui/BackgroundAudio'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/ui/Header'
import { PageFade } from '@/components/ui/PageFade'
import { ImageLightboxProvider } from '@/components/ui/ImageLightbox'
import { ContentProtectionLayer } from '@/components/ui/ContentProtectionLayer'

export const metadata = {
  title: 'Who Am I - Series',
  description: 'Static Next.js rebuild of discoverwhoami.com for conversion work.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0,0"
        />
      </head>
      <body>
        <BackgroundAudio />
        <ContentProtectionLayer />
        <Header />
        <main className="px-4 pb-10 sm:px-6 lg:px-8">
          <ImageLightboxProvider>
            <PageFade>{children}</PageFade>
          </ImageLightboxProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
