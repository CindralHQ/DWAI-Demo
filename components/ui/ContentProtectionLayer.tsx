'use client'

import { useCallback, useEffect, useRef } from 'react'

const MEDIA_SELECTOR = 'img, picture, figure, video, canvas, svg'

export function ContentProtectionLayer() {
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const timeoutRef = useRef<number | null>(null)

  const activateOverlay = useCallback(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
    overlay.style.opacity = '1'
    overlay.style.pointerEvents = 'auto'
    timeoutRef.current = window.setTimeout(() => {
      overlay.style.opacity = '0'
      overlay.style.pointerEvents = 'none'
      timeoutRef.current = null
    }, 800)
  }, [])

  const targetContainsProtectedMedia = useCallback((target: EventTarget | null) => {
    if (!(target instanceof Element)) return false
    return Boolean(target.closest(MEDIA_SELECTOR))
  }, [])

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      if (targetContainsProtectedMedia(event.target)) {
        event.preventDefault()
        activateOverlay()
      }
    }

    const handleDragStart = (event: DragEvent) => {
      if (targetContainsProtectedMedia(event.target)) {
        event.preventDefault()
        activateOverlay()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      const isPrintScreen = key === 'printscreen' || event.code === 'PrintScreen'
      const isScreenshotCombo =
        (event.metaKey && event.shiftKey && ['3', '4', '5', '6'].includes(key)) ||
        (event.ctrlKey && event.shiftKey && (key === 's' || key === '4')) ||
        (event.metaKey && key === 'p') ||
        (event.ctrlKey && key === 'p')

      if (isPrintScreen || isScreenshotCombo) {
        event.preventDefault()
        activateOverlay()
        if (navigator.clipboard && 'writeText' in navigator.clipboard) {
          navigator.clipboard.writeText('').catch(() => {
            // ignore clipboard rejection
          })
        }
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('keydown', handleKeyDown, { capture: true })

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('keydown', handleKeyDown, true)
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [activateOverlay, targetContainsProtectedMedia])

  return (
    <div
      aria-hidden="true"
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[1400] bg-slate-900/85 opacity-0 transition-opacity duration-300"
    />
  )
}
