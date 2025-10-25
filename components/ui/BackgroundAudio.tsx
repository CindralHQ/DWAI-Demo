'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const audioSource = '/audio/bg.mp3'

type ThemeVariant = 'default' | 'wai1' | 'wai2' | 'wai3' | 'wai4'

const BUTTON_VARIANTS: Record<ThemeVariant, string> = {
  default:
    'bg-indigo-600/90 text-white hover:bg-indigo-500 focus-visible:outline-indigo-200 border border-white/30',
  wai1:
    'bg-amber-500 text-slate-900 hover:bg-amber-400 focus-visible:outline-amber-200 border border-amber-200',
  wai2:
    'bg-emerald-500 text-white hover:bg-emerald-400 focus-visible:outline-emerald-200 border border-emerald-200',
  wai3:
    'bg-sky-500 text-white hover:bg-sky-400 focus-visible:outline-sky-200 border border-sky-200',
  wai4:
    'bg-violet-600 text-white hover:bg-violet-500 focus-visible:outline-violet-200 border border-violet-300'
}

const baseButtonClass =
  'fixed bottom-6 right-6 z-[1100] flex h-12 w-12 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

function SpeakerIcon({ muted }: { muted: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M11 5.5 7 9H4.5A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15H7l4 3.5a.75.75 0 0 0 1.25-.56V6.06A.75.75 0 0 0 11 5.5Z"
        fill="currentColor"
        stroke="none"
      />
      {muted ? (
        <>
          <path d="M16.5 8 21 12.5" />
          <path d="M21 8l-4.5 4.5" />
        </>
      ) : (
        <>
          <path d="M16.5 8.5a4 4 0 0 1 0 7" />
          <path d="M18.5 6.5a6.5 6.5 0 0 1 0 11.1" />
        </>
      )}
    </svg>
  )
}

function resolveVariant(pathname: string | null | undefined): ThemeVariant {
  if (!pathname) return 'default'
  if (pathname.startsWith('/wai1')) return 'wai1'
  if (pathname.startsWith('/wai2')) return 'wai2'
  if (pathname.startsWith('/wai3')) return 'wai3'
  if (pathname.startsWith('/wai4')) return 'wai4'
  return 'default'
}

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const pathname = usePathname()
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const audioEl = audioRef.current
    if (!audioEl) return

    let isUnlocked = false

    const safelyPlay = async () => {
      if (!audioEl || isUnlocked) return
      try {
        audioEl.volume = 0.28
        await audioEl.play()
        isUnlocked = true
        setHasInteracted(true)
      } catch {
        // Ignore autoplay rejections; wait for user interaction.
      }
    }

    const unlockOnInteraction = async () => {
      if (!audioEl || isUnlocked) return
      try {
        audioEl.volume = 0.28
        await audioEl.play()
        isUnlocked = true
        setHasInteracted(true)
      } catch {
        // If still blocked, keep listeners active.
      }
    }

    safelyPlay()
    document.addEventListener('pointerdown', unlockOnInteraction)
    document.addEventListener('keydown', unlockOnInteraction)

    return () => {
      document.removeEventListener('pointerdown', unlockOnInteraction)
      document.removeEventListener('keydown', unlockOnInteraction)
    }
  }, [])

  useEffect(() => {
    const audioEl = audioRef.current
    if (!audioEl) return
    audioEl.muted = isMuted
  }, [isMuted])

  const toggleMute = () => {
    const audioEl = audioRef.current
    if (!audioEl) return
    if (!hasInteracted) {
      audioEl.play().catch(() => {
        // noop if still blocked
      })
      setHasInteracted(true)
    }
    setIsMuted((prev) => !prev)
  }

  const variantClass = useMemo(
    () => BUTTON_VARIANTS[resolveVariant(pathname)],
    [pathname]
  )

  return (
    <>
      <audio
        ref={audioRef}
        src={audioSource}
        loop
        preload="auto"
        playsInline
        className="hidden"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={toggleMute}
        className={[baseButtonClass, variantClass].join(' ')}
        aria-pressed={!isMuted}
        aria-label={isMuted ? 'Unmute background audio' : 'Mute background audio'}
        title={isMuted ? 'Sound off' : 'Sound on'}
      >
        <SpeakerIcon muted={isMuted} />
        <span className="sr-only">{isMuted ? 'Sound muted' : 'Sound playing'}</span>
      </button>
    </>
  )
}
