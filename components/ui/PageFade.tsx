'use client'

import { usePathname } from 'next/navigation'

type PageFadeProps = {
  children: React.ReactNode
  className?: string
}

export function PageFade({ children, className }: PageFadeProps) {
  const pathname = usePathname()
  return (
    <div key={pathname} className={['animate-page-fade', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
