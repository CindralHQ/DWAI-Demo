import './globals.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/ui/Header'
import { PageFade } from '@/components/ui/PageFade'

export const metadata = {
  title: 'Who Am I - Series (Static Rebuild)',
  description: 'Static Next.js rebuild of discoverwhoami.com for conversion work.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-10">
          <PageFade>{children}</PageFade>
        </main>
        <Footer />
      </body>
    </html>
  )
}
