import ForegroundFade from '../components/ForegroundFade'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-socc-black">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black">

        {/* Image 1: Banner — hero at the top */}
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_78.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '800px', objectPosition: 'center bottom' }}
          />
        </div>

        {/* Image 2 — fades in from dark, fades back out to dark */}
        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_24.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center' }}
          />
        </div>

        {/* Image 3 — same treatment */}
        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_78.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center' }}
          />
        </div>

      </div>

      {/* Fade foreground near the navbar without affecting the backdrop. */}
      <ForegroundFade
        hiddenUntil={170}
        visibleFrom={310}
        bottomFadeStartsAt={120}
        bottomMinimumAt={80}
        minimumOpacity={0.25}
      >
        <section className="pb-28" style={{ paddingTop: '250px' }}>

          {/* Wordmark — wider than the text column */}
          <div className="mx-auto mb-16 max-w-4xl px-6">
            <img
              src="/assets/Word Mark Logo Type 2.png"
              alt="Southern Ontario Competitive Commander"
              className="w-full object-contain"
            />
          </div>

          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-8 font-title text-3xl tracking-wide text-socc-white">Who We Are</h2>
            <div className="space-y-5 text-base leading-relaxed text-socc-bone">
              <p>
                S.O.C.C. Canada's largest CEDH community. We are a group of tournament players 
                and enthusiasts across Southern Ontario united by a love of competitive Commander. 
                We want to grow the CEDH community here in Canada, the right way.
              </p>
              <p>
                We run regular local events, collaborate with tournament organizers
                across the region, and maintain an active Discord where players discuss
                theory, share decklists, and find games. Whether you're a seasoned
                pilot, total beginner, or just crossing over from battlecruiser Commander, S.O.C.C. 
                is the place to grow your game.
              </p>
              <p>
                Our community values fair play, open discussion, and the continual
                pursuit of improvement. We don't gatekeep by budget or experience, 
                and actively encourage new players to join. Whether you're here to play 
                competitive Magic, find friends, or just want to play, you belong here.
              </p>
              <p>
                S.O.C.C. Canada's largest CEDH community. We are a group of tournament players 
                and enthusiasts across Southern Ontario united by a love of competitive Commander. 
                We want to grow the CEDH community here in Canada, the right way.
              </p>
              <p>
                We run regular local events, collaborate with tournament organizers
                across the region, and maintain an active Discord where players discuss
                theory, share decklists, and find games. Whether you're a seasoned
                pilot, total beginner, or just crossing over from battlecruiser Commander, S.O.C.C. 
                is the place to grow your game.
              </p>
              <p>
                Our community values fair play, open discussion, and the continual
                pursuit of improvement. We don't gatekeep by budget or experience, 
                and actively encourage new players to join. Whether you're here to play 
                competitive Magic, find friends, or just want to play, you belong here.
              </p>
            </div>
          </div>
        </section>
      </ForegroundFade>

    </main>
  )
}
