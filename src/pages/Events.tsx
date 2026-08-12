const DISCORD_INVITE = 'https://discord.gg/5ZaP3wcxGD'

export default function Events() {
  return (
    <main>
      <section className="border-b border-socc-border bg-socc-dark pt-44 pb-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-socc-gold">
            Get in the game
          </p>
          <h1 className="mb-5 text-4xl font-extrabold text-zinc-100">Events</h1>
          <p className="text-base leading-relaxed text-zinc-400">
            All SOCC events are organized and announced through our Discord server.
            Join us to find upcoming tournaments, side events, and casual cEDH
            nights near you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-6 py-20">
        <a
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center rounded-lg border border-socc-border bg-socc-surface p-10 text-center transition-colors hover:border-socc-gold"
        >
          <div className="mb-4 text-4xl">💬</div>
          <h2 className="mb-3 text-xl font-bold text-zinc-100 group-hover:text-socc-gold">
            Join the SOCC Discord
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-zinc-400">
            Events are posted and managed through our Discord server. Once you're
            in, click the Events icon at the top of the channel list to see
            everything that's coming up — sign-ups, schedules, and updates all in
            one place.
          </p>
          <span className="inline-flex items-center gap-2 rounded-md bg-socc-gold px-6 py-3 text-sm font-semibold text-socc-dark transition-colors group-hover:bg-socc-gold-light">
            Join Server
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </a>
      </section>
    </main>
  )
}
