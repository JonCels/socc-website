import ForegroundFade from '../components/ForegroundFade'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-socc-black">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-80 sm:opacity-70">

        {/* Image 1: Banner — hero at the top */}
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_78.jpg"
            alt=""
            className="h-auto w-full object-contain sm:h-[800px] sm:object-cover 2xl:h-[950px]"
            style={{ objectPosition: 'center bottom' }}
          />
        </div>

        {/* Image 2 — fades in from dark, fades back out to dark */}
        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_24.jpg"
            alt=""
            className="h-auto w-full object-contain sm:h-[700px] sm:object-cover 2xl:h-[850px]"
            style={{ objectPosition: 'center center' }}
          />
        </div>

        {/* Image 3 — same treatment */}
        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_78.jpg"
            alt=""
            className="h-auto w-full object-contain sm:h-[700px] sm:object-cover 2xl:h-[850px]"
            style={{ objectPosition: 'center center' }}
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
        <section className="px-0 pt-44 pb-20 sm:pt-[250px] sm:pb-28 2xl:pt-[320px] 2xl:pb-36">

          {/* Wordmark — wider than the text column */}
          <div className="mx-auto mb-10 max-w-4xl px-4 sm:mb-16 sm:px-6 2xl:mb-20 2xl:max-w-5xl">
            <img
              src="/assets/Word Mark Logo Type 2.png"
              alt="Southern Ontario Competitive Commander"
              className="w-full object-contain"
            />
          </div>

          <div className="mx-auto max-w-3xl px-5 sm:px-6 2xl:max-w-4xl">
            <h2 className="mb-6 font-title text-2xl tracking-wide text-socc-white sm:mb-8 sm:text-3xl 2xl:mb-10 2xl:text-4xl">Who We Are</h2>
            <div className="space-y-5 text-base leading-relaxed text-socc-white sm:text-lg 2xl:space-y-7 2xl:text-xl">
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
