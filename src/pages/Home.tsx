export default function Home() {
  return (
    <main className="relative bg-socc-dark">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-dark">

        {/* Image 1: Banner — hero at the top */}
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_78.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '800px', objectPosition: 'center bottom' }}
          />
          {/* Fade bottom of banner to dark */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-socc-dark" />
        </div>

        {/* Image 2 — fades in from dark, fades back out to dark */}
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_24.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-socc-dark via-transparent to-socc-dark" />
        </div>

        {/* Image 3 — same treatment */}
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_78.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-socc-dark via-transparent to-socc-dark" />
        </div>

      </div>

      {/* Text content — in normal flow so it sets the page height */}
      <section className="relative z-10 pb-10" style={{ paddingTop: '280px' }}>

        {/* Wordmark — wider than the text column */}
        <div className="mx-auto mb-16 max-w-4xl px-6">
          <img
            src="/assets/Word Mark Logo Type 2.png"
            alt="Southern Ontario Competitive Commander"
            className="w-full object-contain"
          />
        </div>

        <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 font-title text-3xl tracking-wide text-socc-gold">Who We Are</h2>
        <div className="space-y-5 text-base leading-relaxed text-zinc-300">
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

    </main>
  )
}
