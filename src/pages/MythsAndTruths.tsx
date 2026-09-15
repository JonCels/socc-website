import ForegroundFade from '../components/ForegroundFade'

interface Myth {
  myth: string
  fact: string
}

const myths: Myth[] = [
    {
        myth: "cEDH is super boring, all games end on turn 2 with someone playing thassa's oracle before I get a chance to play the game.",
        fact: "cEDH is played primarily on the stack, and decks are designed to be efficient and interactive. While some decks do look to put wins on the stack as early as turn one or two, many cEDH decks dedicate a large chunk of their deck to stopping these early wins. There are many different ways to win in cEDH, the fun part is getting there!" 
    },
    {
        myth: "I can't get into cEDH, all the cards are way too expensive.",
        fact: "cEDH is one of the only competitive formats in Magic the Gathering where major tournaments and events are proxy friendly. The community values skill and attitude far more than money. As long as you have a printer and some sleeves, you can play cEDH!"
    },
    {
        myth: "I'm nervous to try cEDH, I'm new to magic and the format seems way too complicated.",
        fact: "Actually, there are fewer cards in cEDH than in regular commander - not because of bans or a smaller card pool, but simply due to the format's power level! With fewer viable cards, there are fewer cards to know, leading to an easier new player experience. Additionally, abundant online resources and a knowledgeable playerbase help lower the barrier of entry for new players and make cEDH a deceptively friendly format for anyone to try."
    },
    {
        myth: "cEDH is too competitive for me/the commander pool is too small, it's no fun.",
        fact: "Despite its name, cEDH is not an inherently competitive format. In fact, there are many commanders that can be pushed to the cEDH level that are outside of the top decks. For the most part, cEDH games are played around kitchen tables, just the same as any other commander game. tEDH, or Tournament EDH, is a type of cEDH where deck choices become more limited and play becomes more intense, but is usually labelled as such ahead of time. Just be sure to ask your pod ahead of your game in a rule 0 conversation like any other commander game to avoid any confusion between cEDH vs tEDH!"
    },
    {
        myth: "My bracket 4 deck can comfortably play in a cEDH pod.",
        fact: "While bracket 4 decks are usually designed within a vacuum to push their commander to the highest possible power level, cEDH decks are designed to play within or against a meta, dropping additional synergies in order to play interaction pieces that can stop other meta decks. Wizards of the Coast designed the new bracket system with flexibility in mind, so while it's true you could feasibly play a bracket 4 deck in cEDH, it may prove difficult for you to have consistent, fun and interactive gameplay without modifying your deck to fit the cEDH meta."
    },
]

export default function MythsAndFacts() {
  return (
    <main className="relative min-h-screen bg-socc-black">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-80 sm:opacity-70">

        {/* Image 1: Banner — hero at the top */}
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_16.jpg"
            alt=""
            className="h-auto w-full object-contain sm:h-[800px] sm:object-cover 2xl:h-[950px]"
            style={{ objectPosition: 'center bottom' }}
          />
        </div>

        {/* Image 2 — fades in from dark, fades back out to dark */}
        <div className="backdrop-crossfade relative overflow-hidden">
          <img
            src="/assets/FW_Schwrz_39.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-70 sm:-ml-[150px] sm:h-[700px] sm:w-[calc(100%+150px)] sm:max-w-none sm:object-cover 2xl:h-[850px]"
          />
        </div>

        {/* Image 3 — same treatment; crop 100px off left to hide white edge */}
        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_08.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-50 sm:h-[700px] sm:object-cover sm:object-left 2xl:h-[850px]"
          />
        </div>

        {/* Image 4 — fades in from dark, fades back out to dark */}
        <div className="backdrop-crossfade relative overflow-hidden">
          <img
            src="/assets/FW_Schwrz_02.jpg"
            alt=""
            className="h-auto w-full object-contain opacity-70 sm:-ml-[150px] sm:h-[700px] sm:w-[calc(100%+150px)] sm:max-w-none sm:object-cover 2xl:h-[850px]"
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
              cEDH Myths &amp; Facts
            </h1>

            <div className="space-y-10 sm:space-y-14 2xl:space-y-16">
              {myths.map((item, i) => (
                <article key={i} className="space-y-4 sm:space-y-5">
                  <div>
                    <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-socc-bone/70 sm:text-xs 2xl:text-sm">
                      Myth
                    </p>
                    <h2 className="font-title text-base font-bold tracking-wide text-socc-white sm:text-xl 2xl:text-2xl">
                      {item.myth}
                    </h2>
                  </div>

                  <div className="border-l-2 border-socc-bone/50 pl-4 sm:pl-5 2xl:pl-6">
                    <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-socc-bone/80 sm:text-xs 2xl:text-sm">
                      Fact
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-socc-bone sm:text-base 2xl:text-lg">
                      {item.fact}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ForegroundFade>

    </main>
  )
}
