import { useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

const sharedAssets = [
  '/assets/socc-logo.png',
  '/external/linktree-white-icon.png',
  '/external/discord-white-icon.png',
  '/external/x-social-media-white-icon.png',
  '/external/instagram-white-icon.png',
  '/external/youtube-app-white-icon.png',
  '/external/tiktok-simplified-white-icon.png',
]

const pageAssets: Record<string, string[]> = {
  '/': [
    '/assets/FW_Schwrz_78.jpg',
    '/assets/FW_Schwrz_24.jpg',
    '/assets/Word Mark Logo Type 2.png',
  ],
  '/myths': [
    '/assets/FW_Schwrz_16.jpg',
    '/assets/FW_Schwrz_39.jpg',
    '/assets/FW_Schwrz_08.jpg',
    '/assets/FW_Schwrz_02.jpg',
  ],
  '/events': ['/assets/FW_Schwrz_21.jpg', '/assets/FW_Schwrz_24.jpg'],
  '/merch': [
    '/assets/FW_Schwrz_02.jpg',
    '/assets/FW_Schwrz_87.jpg',
    '/assets/FW_Schwrz_89.jpg',
  ],
}

const activePaths = ['/', '/myths', '/events']
const loadedPaths = new Set<string>()
const pathLoads = new Map<string, Promise<void>>()

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image()
    let timeout = 0
    let settled = false

    const finish = () => {
      if (settled) return
      settled = true
      window.clearTimeout(timeout)
      image.onload = null
      image.onerror = null
      resolve()
    }

    image.onload = () => {
      if (image.decode) {
        image.decode().then(finish).catch(finish)
      } else {
        finish()
      }
    }
    image.onerror = finish
    timeout = window.setTimeout(finish, 15000)
    image.src = src

    if (image.complete) {
      if (image.decode) {
        image.decode().then(finish).catch(finish)
      } else {
        finish()
      }
    }
  })
}

function preloadPath(pathname: string) {
  if (loadedPaths.has(pathname)) return Promise.resolve()

  const existingLoad = pathLoads.get(pathname)
  if (existingLoad) return existingLoad

  const assets = [...new Set([...sharedAssets, ...(pageAssets[pathname] ?? [])])]
  const fontReady = document.fonts?.ready ?? Promise.resolve()
  const load = Promise.all([fontReady, ...assets.map(preloadImage)]).then(() => {
    loadedPaths.add(pathname)
  })

  pathLoads.set(pathname, load)
  return load
}

export default function SiteLoadGate({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [loadedPath, setLoadedPath] = useState<string | null>(null)
  const isReady = loadedPaths.has(pathname) || loadedPath === pathname

  useEffect(() => {
    let active = true
    let preloadTimer = 0

    preloadPath(pathname).then(() => {
      if (!active) return

      setLoadedPath(pathname)
      preloadTimer = window.setTimeout(() => {
        activePaths
          .filter((path) => path !== pathname)
          .forEach((path) => void preloadPath(path))
      }, 300)
    })

    return () => {
      active = false
      window.clearTimeout(preloadTimer)
    }
  }, [pathname])

  return (
    <>
      <div
        className={[
          'min-h-screen',
          isReady ? 'opacity-100 transition-opacity duration-500' : 'opacity-0',
        ].join(' ')}
        aria-busy={!isReady}
      >
        {children}
      </div>

      <div
        className={[
          'fixed inset-0 z-[100] flex items-center justify-center bg-socc-black',
          isReady
            ? 'pointer-events-none opacity-0 transition-opacity duration-500'
            : 'opacity-100',
        ].join(' ')}
        role="status"
        aria-live="polite"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-socc-bone/60">
          Loading
        </span>
      </div>
    </>
  )
}
