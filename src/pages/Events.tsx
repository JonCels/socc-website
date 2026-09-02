const DISCORD_INVITE = 'https://discord.gg/5ZaP3wcxGD'

export default function Events() {
  return (
    <main className="relative min-h-screen bg-socc-black">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black">

        <div className="relative">
          <img
            src="/assets/FW_Schwrz_21.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '800px', objectPosition: 'center center' }}
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_30.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center', opacity: 0.8 }}
          />
        </div>

        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_24.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center', opacity: 0.8 }}
          />
        </div>

      </div>

      {/* Text content — in normal flow so it sets the page height */}
      <section className="relative z-10 pb-28" style={{ paddingTop: '280px' }}>
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="mb-8 font-title text-3xl tracking-wide text-socc-white">
              Events
            </h1>
            <div className="space-y-5 text-base leading-relaxed text-socc-bone">
              <p>
                All SOCC events are organized and announced through our Discord server.
                Join us to find upcoming tournaments, side events, and casual cEDH
                nights near you.
              </p>
              <p>
                Once you're in, click the Events icon at the top of the channel list to see
                everything that's coming up — sign-ups, schedules, and updates all in
                one place.
              </p>
            </div>

            <p className="mt-10">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="font-title text-xl tracking-wide text-socc-gold transition-colors hover:text-socc-gold-light"
              >
                Join the SOCC Discord →
              </a>
            </p>
          </div>
      </section>

    </main>
  )
}
