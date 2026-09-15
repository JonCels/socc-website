import ForegroundFade from '../components/ForegroundFade'

const DISCORD_INVITE = 'https://discord.gg/5ZaP3wcxGD'

const eventTypes = [
  {
    title: 'Locals and Leagues',
    description:
      'Meet other players for regular cEDH games. These events are a way to learn, practice, and get to know the community in a low-stakes environment.',
  },
  {
    title: 'Tournaments',
    description:
      'Put your skills to the test in structured cEDH tournaments featuring strong local and regional competition. Full event details, registration links, and schedule updates are posted through Discord.',
  },
//   {
//     title: 'Special Events',
//     description:
//       'Watch for larger community gatherings, collaborations, and other special events. Join the Discord to hear when something new is announced.',
//   },
]

export default function Events() {
  return (
    <main className="relative min-h-screen bg-socc-black">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-80 sm:opacity-70">

        <div className="relative">
          <img
            src="/assets/FW_Schwrz_21.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-70 sm:h-[800px] sm:object-cover 2xl:h-[950px]"
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_21.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-[0.55] sm:-ml-[150px] sm:h-[700px] sm:w-[calc(100%+150px)] sm:max-w-none sm:object-cover 2xl:h-[850px]"
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_24.jpg"
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
          <div className="mx-auto max-w-3xl px-5 sm:px-6 2xl:max-w-4xl">
            <h1 className="mb-7 font-title text-2xl tracking-wide text-socc-white sm:mb-8 sm:text-3xl 2xl:mb-10 2xl:text-4xl">
              Events
            </h1>
            <p className="mb-10 text-sm font-medium leading-relaxed text-socc-bone sm:mb-14 sm:text-base 2xl:mb-16 2xl:text-lg">
              SOCC brings Ontario's cEDH community together through regular
              locals, tournaments, and special events. Dates, registration,
              and information are always available through our Discord.
            </p>

            <div className="space-y-10 sm:space-y-14 2xl:space-y-16">
              {eventTypes.map((event) => (
                <article key={event.title} className="space-y-4 sm:space-y-5">
                  <div>
                    <h2 className="font-title text-lg font-bold tracking-wide text-socc-white sm:text-xl 2xl:text-2xl">
                      {event.title}
                    </h2>
                  </div>

                  <p className="border-l-2 border-socc-bone/50 pl-4 text-sm font-medium leading-relaxed text-socc-bone sm:pl-5 sm:text-base 2xl:pl-6 2xl:text-lg">
                    {event.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 2xl:mt-20">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="font-title text-lg tracking-wide text-socc-gold transition-colors hover:text-socc-gold-light sm:text-xl 2xl:text-2xl"
              >
                Join the SOCC Discord →
              </a>
            </div>
          </div>
        </section>
      </ForegroundFade>

    </main>
  )
}
