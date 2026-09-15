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
              className="absolute left-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-socc-white drop-shadow-lg transition-colors hover:bg-socc-black/30 sm:h-16 sm:w-16"
            >
              <svg
                aria-hidden="true"
                className="h-8 w-8 sm:h-10 sm:w-10"
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
              className="absolute right-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-socc-white drop-shadow-lg transition-colors hover:bg-socc-black/30 sm:h-16 sm:w-16"
            >
              <svg
                aria-hidden="true"
                className="h-8 w-8 sm:h-10 sm:w-10"
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

      <div className="border-t border-socc-bone/30 p-4 sm:p-5">
        <div className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:items-start min-[400px]:justify-between min-[400px]:gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-socc-bone/60">
              {category.name}
            </p>
            <h2 className="font-title text-lg font-bold tracking-wide text-socc-white sm:text-xl">
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
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-80 sm:opacity-70">
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_02.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-70 sm:h-[800px] sm:object-cover 2xl:h-[950px]"
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_87.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-70 sm:h-[700px] sm:object-cover 2xl:h-[850px]"
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_89.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-60 sm:h-[700px] sm:object-cover sm:object-left 2xl:h-[850px]"
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
        <section className="pt-44 pb-20 sm:pt-[280px] sm:pb-28 2xl:pt-[320px] 2xl:pb-36">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 2xl:max-w-5xl">
            <h1 className="mb-7 font-title text-2xl tracking-wide text-socc-white sm:mb-8 sm:text-3xl 2xl:mb-10 2xl:text-4xl">
              Merch
            </h1>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 2xl:gap-8">
              {merchItems.map((category) => (
                <MerchGallery key={category.name} category={category} />
              ))}
            </div>

            <div className="mt-12 max-w-3xl space-y-4 sm:mt-16 sm:space-y-5 2xl:mt-20">
              <h2 className="font-title text-lg font-bold tracking-wide text-socc-white sm:text-xl 2xl:text-2xl">
                Merch Requests
              </h2>
              <div className="border-l-2 border-socc-bone/50 pl-4 sm:pl-5">
                <p className="text-sm font-medium leading-relaxed text-socc-bone sm:text-base 2xl:text-lg">
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
                  className="mt-6 inline-block font-title text-lg tracking-wide text-socc-gold transition-colors hover:text-socc-gold-light sm:text-xl"
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
