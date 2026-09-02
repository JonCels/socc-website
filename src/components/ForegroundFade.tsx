import { useEffect, useRef, type ReactNode } from 'react'

interface ForegroundFadeProps {
  children: ReactNode
  hiddenUntil?: number
  visibleFrom?: number
  bottomFadeStartsAt?: number
  bottomMinimumAt?: number
  minimumOpacity?: number
}

export default function ForegroundFade({
  children,
  hiddenUntil = 170,
  visibleFrom = 260,
  bottomFadeStartsAt = 260,
  bottomMinimumAt = 80,
  minimumOpacity = 0.25,
}: ForegroundFadeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const updateMask = () => {
      frame = 0
      const container = containerRef.current
      if (!container) return

      const offset = container.getBoundingClientRect().top
      const hiddenEnd = Math.max(0, hiddenUntil - offset)
      const visibleStart = Math.max(hiddenEnd, visibleFrom - offset)
      const bottomStart = Math.max(
        visibleStart,
        window.innerHeight - bottomFadeStartsAt - offset,
      )
      const bottomEnd = Math.max(
        bottomStart,
        window.innerHeight - bottomMinimumAt - offset,
      )
      const mask = `linear-gradient(to bottom, rgb(0 0 0 / ${minimumOpacity}) 0px, rgb(0 0 0 / ${minimumOpacity}) ${hiddenEnd}px, #000 ${visibleStart}px, #000 ${bottomStart}px, rgb(0 0 0 / ${minimumOpacity}) ${bottomEnd}px, rgb(0 0 0 / ${minimumOpacity}) 100%)`

      container.style.webkitMaskImage = mask
      container.style.maskImage = mask
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMask)
    }

    updateMask()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [
    bottomFadeStartsAt,
    bottomMinimumAt,
    hiddenUntil,
    minimumOpacity,
    visibleFrom,
  ])

  return (
    <div ref={containerRef} className="relative z-10">
      {children}
    </div>
  )
}
