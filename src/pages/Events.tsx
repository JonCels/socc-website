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
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-70">

        <div className="relative">
          <img
            src="/assets/FW_Schwrz_21.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '800px', objectPosition: 'center center', opacity: 0.7 }}
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_21.jpg"
            alt=""
            className="object-cover"
            style={{
            height: '700px',
            width: 'calc(100% + 150px)',
            maxWidth: 'none',
            marginLeft: '-150px',
            objectPosition: 'center center',
            opacity: 0.55,
            }}
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_24.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center', opacity: 0.7 }}
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
              Events
            </h1>
            <p className="mb-14 text-base font-medium leading-relaxed text-socc-bone">
              SOCC brings Ontario's cEDH community together through regular
              locals, tournaments, and special events. Dates, registration,
              and information are always available through our Discord.
            </p>

            <div className="space-y-14">
              {eventTypes.map((event) => (
                <article key={event.title} className="space-y-5">
                  <div>
                    <h2 className="font-title text-xl font-bold tracking-wide text-socc-white">
                      {event.title}
                    </h2>
                  </div>

                  <p className="border-l-2 border-socc-bone/50 pl-5 text-base font-medium leading-relaxed text-socc-bone">
                    {event.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="font-title text-xl tracking-wide text-socc-gold transition-colors hover:text-socc-gold-light"
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
