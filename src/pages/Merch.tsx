import { useState } from 'react'
import ForegroundFade from '../components/ForegroundFade'

const DISCORD_INVITE = 'https://discord.gg/5ZaP3wcxGD'

interface MerchImage {
  src: string | null
  productName: string
  view: string
  price: string
}

interface MerchCategory {
  name: string
  images: MerchImage[]
}

// Add any number of images to a category; the gallery cycles through this list.
const merchItems: MerchCategory[] = [
  {
    name: 'Playmats',
    images: [
      {
        src: null,
        productName: 'SOCC Playmat',
        view: 'Front',
        price: 'Price TBD',
      },
      {
        src: null,
        productName: 'Playmat 02',
        view: 'Front',
        price: 'Price TBD',
      },
    ],
  },
  {
    name: 'Shirts',
    images: [
      {
        src: null,
        productName: 'Shirt 01',
        view: 'Front',
        price: 'Price TBD',
      },
      {
        src: null,
        productName: 'Shirt 01',
        view: 'Back',
        price: 'Price TBD',
      },
      {
        src: null,
        productName: 'Shirt 02',
        view: 'Front',
        price: 'Price TBD',
      },
      {
        src: null,
        productName: 'Shirt 02',
        view: 'Back',
        price: 'Price TBD',
      },
    ],
  },
  {
    name: 'Tokens',
    images: [
      {
        src: null,
        productName: 'SOCC Tokens',
        view: 'Front',
        price: 'Price TBD',
      },
      {
        src: null,
        productName: 'SOCC Tokens',
        view: 'Back',
        price: 'Price TBD',
      },
    ],
  },
  {
    name: 'Stickers',
    images: [
      {
        src: null,
        productName: 'SOCC Stickers',
        view: 'Front',
        price: 'Price TBD',
      },
      {
        src: null,
        productName: 'Sticker 02',
        view: 'Front',
        price: 'Price TBD',
      },
    ],
  },
]

const merchContacts = [
  { name: 'Brian', tag: '@enticious' },
  { name: 'Josh', tag: '@joshoohah' },
  { name: 'Dilan', tag: '@dillydoesitbetter' },
]

function MerchGallery({ category }: { category: MerchCategory }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const image = category.images[slideIndex]
  const hasMultipleSlides = category.images.length > 1

  const previousSlide = () => {
    setSlideIndex(
      (current) => (current - 1 + category.images.length) % category.images.length,
    )
  }

  const nextSlide = () => {
    setSlideIndex((current) => (current + 1) % category.images.length)
  }

  return (
    <article className="overflow-hidden border border-socc-bone/40 bg-socc-black/50">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-socc-ink/40">
        {image.src ? (
          <img
            src={image.src}
            alt={`${image.productName} — ${image.view}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="px-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-socc-bone/50">
            {image.productName} — {image.view}
          </span>
        )}

        {hasMultipleSlides && (
          <>
            <button
              type="button"
              onClick={previousSlide}
              aria-label={`Previous ${category.name} image`}
              className="absolute left-1 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center text-socc-white drop-shadow-lg transition-colors hover:bg-socc-black/30"
            >
              <svg
                aria-hidden="true"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label={`Next ${category.name} image`}
              className="absolute right-1 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center text-socc-white drop-shadow-lg transition-colors hover:bg-socc-black/30"
            >
              <svg
                aria-hidden="true"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="border-t border-socc-bone/30 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-socc-bone/60">
              {category.name}
            </p>
            <h2 className="font-title text-xl font-bold tracking-wide text-socc-white">
              {image.productName}
            </h2>
          </div>
          <p className="shrink-0 font-semibold text-socc-bone">{image.price}</p>
        </div>

        {hasMultipleSlides && (
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-socc-bone/60">
            {image.view} · {slideIndex + 1} / {category.images.length}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Merch() {
  return (
    <main className="relative min-h-screen bg-socc-black">
      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-70">
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_02.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '800px', objectPosition: 'center center', opacity: 0.7 }}
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_87.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center', opacity: 0.7 }}
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_89.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'left center', opacity: 0.6 }}
          />
        </div>
      </div>

      {/* Fade foreground near the navbar and footer without affecting the backdrop. */}
      <ForegroundFade
        hiddenUntil={170}
        visibleFrom={310}
        bottomFadeStartsAt={120}
        bottomMinimumAt={80}
        minimumOpacity={0.25}
      >
        <section className="pb-28" style={{ paddingTop: '280px' }}>
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="mb-8 font-title text-3xl tracking-wide text-socc-white">
              Merch
            </h1>

            <div className="grid gap-6 sm:grid-cols-2">
              {merchItems.map((category) => (
                <MerchGallery key={category.name} category={category} />
              ))}
            </div>

            <div className="mt-16 space-y-5">
              <h2 className="font-title text-xl font-bold tracking-wide text-socc-white">
                Merch Requests
              </h2>
              <div className="border-l-2 border-socc-bone/50 pl-5">
                <p className="text-base font-medium leading-relaxed text-socc-bone">
                  Looking for merch? Join the Discord and
                  reach out to one of the following members:
                </p>

                {merchContacts.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {merchContacts.map((contact) => (
                      <li
                        key={contact.tag}
                        className="flex flex-wrap items-baseline gap-x-3 border-b border-socc-bone/20 pb-3"
                      >
                        <span className="text-sm font-semibold tracking-wide text-socc-white">
                          {contact.name}
                        </span>
                        <span className="font-semibold text-socc-bone/70">{contact.tag}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm italic text-socc-bone/60">
                    Discord contact names will be added here.
                  </p>
                )}

                <a
                  href={DISCORD_INVITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-title text-xl tracking-wide text-socc-gold transition-colors hover:text-socc-gold-light"
                >
                  Join the SOCC Discord →
                </a>
              </div>
            </div>
          </div>
        </section>
      </ForegroundFade>
    </main>
  )
}
