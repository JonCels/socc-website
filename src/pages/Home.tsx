import ForegroundFade from '../components/ForegroundFade'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-socc-black">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-70">

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
        visibleFrom={280}
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
            <div className="space-y-5 text-xl leading-relaxed text-socc-white">
              <p>
              Southern Ontario Competitive Commander (S.O.C.C.) is Canada's largest cEDH community, 
              dedicated to growing the game the right way through fairness, friendly competition 
              and open discussion. With over 400 members and counting, S.O.C.C. is committed to 
              providing an open, welcoming environment for Canadian cEDH to grow and thrive in. 
              We are committed to creating a space where new players can try out the format and 
              experts can hone their skills with some of the best players in the country.
              </p>
              <p>
              S.O.C.C. hosts regular local events, collaborates with T.O.s across Ontario, and hosts 
              a Discord where you can find everything you need to begin developing or improving on 
              your cEDH skills.  So, whether you're here to make friends, improve your play, or simply 
              play some cEDH, S.O.C.C. has a spot for you at the table!
              </p>
            </div>
          </div>
        </section>
      </ForegroundFade>

    </main>
  )
}
