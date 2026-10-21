import { useState } from 'react'
import ForegroundFade from '../components/ForegroundFade'

const DISCORD_INVITE = 'https://discord.gg/5ZaP3wcxGD'

interface MerchOption {
  name: string
  price: string
  image: string | string[] | null
}

interface MerchCategory {
  name: string
  options: MerchOption[]
}

const merchItems: MerchCategory[] = [
  {
    name: 'Playmats',
    options: [
      {
        name: 'Playmat',
        price: '$60',
        image: '/assets/merch/Playmat.jpg',
      },
    ],
  },
  {
    name: 'Shirts',
    options: [
      {
        name: 'Shirts',
        price: '$45',
        image: '/assets/merch/Shirt_SOCC.png',
      },
      {
        name: 'SKA Shirts',
        price: '$50',
        image: '/assets/merch/Shirt_SKA.png',
      },
    ],
  },
  {
    name: 'Tokens',
    options: [
      {
        name: 'Tokens',
        price: '1 for $3\n2 for $5',
        image: '/assets/merch/Tokens_All.jpg',
      },
      {
        name: 'Tokens',
        price: '1 for $3\n2 for $5',
        image: '/assets/merch/Tokens_All_2.jpg',
      },
    ],
  },
  {
    name: 'Stickers',
    options: [
      { name: 'Stickers', price: 'Free!', image: null },
    ],
  },
]

const merchContacts = [
  { name: 'Brian', tag: '@enticious' },
  { name: 'Josh', tag: '@joshoohah' },
  { name: 'Dilan', tag: '@dillydoesitbetter' },
]

function GalleryArrow({
  direction,
  label,
  onClick,
}: {
  direction: 'previous' | 'next'
  label: string
  onClick: () => void
}) {
  const isPrevious = direction === 'previous'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={[
        'absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center bg-socc-black/25 text-socc-white drop-shadow-lg transition-colors hover:bg-socc-black/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-socc-bone sm:h-16 sm:w-16',
        isPrevious ? 'left-3' : 'right-3',
      ].join(' ')}
    >
      <svg
        aria-hidden="true"
        className="h-8 w-8 sm:h-10 sm:w-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d={isPrevious ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
        />
      </svg>
    </button>
  )
}

function ProductImage({
  src,
  alt,
  placeholder,
}: {
  src: string | string[] | null
  alt: string
  placeholder: string
}) {
  if (src) {
    const images = Array.isArray(src) ? src : [src]

    return (
      <div className="pointer-events-none absolute inset-1 z-10 flex items-stretch justify-center gap-2 overflow-hidden bg-socc-ink sm:inset-2 sm:gap-3">
        {images.map((image, index) => (
          <div
            key={image}
            className="flex min-w-0 flex-1 items-center justify-center overflow-hidden bg-socc-ink"
          >
            <img
              src={image}
              alt={images.length > 1 ? `${alt} ${index + 1}` : alt}
              className="h-[96%] w-full object-contain"
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="absolute inset-3 flex items-center justify-center border border-dashed border-socc-bone/20 bg-socc-black/20 sm:inset-5">
      <span className="px-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-socc-bone/50">
        {placeholder}
      </span>
    </div>
  )
}

function GalleryDetails({
  name,
  price,
  counter,
}: {
  name: string
  price: string
  counter?: string
}) {
  return (
    <div className="border-t border-socc-bone/30 px-4 py-2.5 sm:px-5 sm:py-3">
      <div className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:items-start min-[400px]:justify-between min-[400px]:gap-4">
        <div className="flex items-baseline gap-3">
          <h2 className="font-title text-base font-bold tracking-wide text-socc-white sm:text-lg">
            {name}
          </h2>
          {counter && (
            <p className="text-xs font-semibold tracking-[0.1em] text-socc-bone/60">
              {counter}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-baseline">
          <p className="whitespace-pre-line text-right font-title font-semibold leading-tight text-socc-bone">
            {price}
          </p>
        </div>
      </div>
    </div>
  )
}

function MerchGallery({ category }: { category: MerchCategory }) {
  const [optionIndex, setOptionIndex] = useState(0)
  const option = category.options[optionIndex]
  const hasMultipleOptions = category.options.length > 1

  const move = (amount: number) => {
    setOptionIndex(
      (current) => (current + amount + category.options.length) % category.options.length,
    )
  }

  return (
    <article className="overflow-hidden border border-socc-bone/35 bg-socc-ink shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
      <div className="relative isolate aspect-[12/5] overflow-hidden bg-socc-ink">
        <ProductImage
          src={option.image}
          alt={option.name}
          placeholder={option.name}
        />
        {hasMultipleOptions && (
          <>
            <GalleryArrow
              direction="previous"
              label={`Previous ${category.name} option`}
              onClick={() => move(-1)}
            />
            <GalleryArrow
              direction="next"
              label={`Next ${category.name} option`}
              onClick={() => move(1)}
            />
          </>
        )}
      </div>
      <GalleryDetails
        name={category.name}
        price={option.price}
        counter={
          hasMultipleOptions
            ? `${optionIndex + 1} / ${category.options.length}`
            : undefined
        }
      />
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

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_89.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-70 sm:h-[700px] sm:object-cover 2xl:h-[850px]"
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

            <div className="grid grid-cols-1 gap-6 sm:gap-8 2xl:gap-10">
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
