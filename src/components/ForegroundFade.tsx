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

      const isMobile = window.innerWidth < 640
      const activeHiddenUntil = isMobile ? 120 : hiddenUntil
      const activeVisibleFrom = isMobile ? 210 : visibleFrom
      const activeBottomFadeStartsAt = isMobile ? 140 : bottomFadeStartsAt
      const activeBottomMinimumAt = isMobile ? 60 : bottomMinimumAt
      const activeMinimumOpacity = isMobile ? 0.1 : minimumOpacity
      const offset = container.getBoundingClientRect().top
      const hiddenEnd = Math.max(0, activeHiddenUntil - offset)
      const visibleStart = Math.max(hiddenEnd, activeVisibleFrom - offset)
      const bottomStart = Math.max(
        visibleStart,
        window.innerHeight - activeBottomFadeStartsAt - offset,
      )
      const bottomEnd = Math.max(
        bottomStart,
        window.innerHeight - activeBottomMinimumAt - offset,
      )
      const mask = `linear-gradient(to bottom, rgb(0 0 0 / ${activeMinimumOpacity}) 0px, rgb(0 0 0 / ${activeMinimumOpacity}) ${hiddenEnd}px, #000 ${visibleStart}px, #000 ${bottomStart}px, rgb(0 0 0 / ${activeMinimumOpacity}) ${bottomEnd}px, rgb(0 0 0 / ${activeMinimumOpacity}) 100%)`

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
