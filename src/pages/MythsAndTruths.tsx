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
      <div className="absolute inset-0 overflow-hidden bg-socc-black opacity-70">

        {/* Image 1: Banner — hero at the top */}
        <div className="relative">
          <img
            src="/assets/FW_Schwrz_16.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '800px', objectPosition: 'center bottom' }}
          />
        </div>

        {/* Image 2 — fades in from dark, fades back out to dark */}
        <div className="backdrop-crossfade relative overflow-hidden">
          <img
            src="/assets/FW_Schwrz_39.jpg"
            alt=""
            className="object-cover"
            style={{
              height: '700px',
              width: 'calc(100% + 150px)',
              maxWidth: 'none',
              marginLeft: '-150px',
              objectPosition: 'center center',
              opacity: 0.7,
            }}
          />
        </div>

        {/* Image 3 — same treatment; crop 100px off left to hide white edge */}
        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_08.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'left center', opacity: 0.5 }}
          />
        </div>

        {/* Image 4 — fades in from dark, fades back out to dark */}
        <div className="backdrop-crossfade relative overflow-hidden">
          <img
            src="/assets/FW_Schwrz_02.jpg"
            alt=""
            className="object-cover"
            style={{
            height: '700px',
            width: 'calc(100% + 150px)',
            maxWidth: 'none',
            marginLeft: '-150px',
            objectPosition: 'center center',
            opacity: 0.7,
            }}
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
              cEDH Myths &amp; Facts
            </h1>

            <div className="space-y-14">
              {myths.map((item, i) => (
                <article key={i} className="space-y-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-socc-bone/70">
                      Myth
                    </p>
                    <h2 className="font-title text-xl font-bold tracking-wide text-socc-white">
                      {item.myth}
                    </h2>
                  </div>

                  <div className="border-l-2 border-socc-bone/50 pl-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-socc-bone/80">
                      Fact
                    </p>
                    <p className="text-base font-medium leading-relaxed text-socc-bone">
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
