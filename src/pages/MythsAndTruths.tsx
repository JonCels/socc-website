interface Myth {
  myth: string
  truth: string
}

const myths: Myth[] = [
  {
    myth: 'cEDH is just whoever plays first wins.',
    truth:
      "While fast mana and early pressure matter, cEDH is fundamentally a multiplayer game where three opponents police the table. Attempting to win too early almost always draws the table's interaction. Knowing when to hold back, how to navigate the political landscape, and how to sequence through hate are all critical skills that separate good pilots from great ones.",
  },
  {
    myth: 'cEDH is pay-to-win.',
    truth:
      'The highest-performing decks are expensive, but proxies are accepted at the vast majority of cEDH events — including our own. The community broadly prioritizes gameplay over gatekeeping. Many strong cEDH commanders are also relatively budget-friendly when proxies are allowed, and skill matters far more than card quality in a field of prepared opponents.',
  },
  {
    myth: "cEDH isn't fun — it's too cutthroat.",
    truth:
      'Fun is subjective, but players who enjoy competitive Magic overwhelmingly find cEDH to be one of the most rewarding formats available. The deep game theory, political negotiation, and the weight of every decision create moments of tension and payoff that casual Commander rarely reaches. The community also tends to be welcoming and passionate about discussion and improvement.',
  },
  {
    myth: 'You have to play only the best commanders to be competitive.',
    truth:
      "While a short list of commanders consistently top tables, the meta is broad and evolving. A deeply piloted tier-two commander with a well-tuned list can absolutely compete and win. Understanding your deck's line and the meta it's entering matters more than picking the \"best\" commander.",
  },
  {
    myth: "cEDH games are over in two turns — there's no room for gameplay.",
    truth:
      "Average cEDH game length varies greatly by meta, table composition, and deck choice. Many games run 30–60 minutes with meaningful decisions throughout. Fast wins are possible, but they require surviving several windows of interaction from three opponents. The idea that games are mechanical non-events is a myth perpetuated by those who haven't played at a real cEDH table.",
  },
  {
    myth: 'Combo is the only viable strategy.',
    truth:
      'While combo decks make up a significant portion of the meta, stax, tempo, and hatebear strategies all have real presence. Rule of Law effects, resource denial, and asymmetric prison pieces can lock opponents out of the game entirely. The meta rewards knowing how to fight on multiple axes.',
  },
  {
    myth: "cEDH has no politics — it's purely optimal play.",
    truth:
      'Politics is alive and well in cEDH. Choosing which opponent\'s threat to answer, negotiating pass-the-turn deals, and deciding who you help slow down are all political decisions with real consequences. The difference from casual is that political promises carry less weight — but reading the table and making alliances of convenience is a genuine skill.',
  },
]

export default function MythsAndTruths() {
  return (
    <main className="relative min-h-screen bg-socc-black">

      {/* Stacked image backdrop — absolute so the text determines page height */}
      <div className="absolute inset-0 overflow-hidden bg-socc-black">

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
            src="/assets/FW_Schwrz_76.jpg"
            alt=""
            className="object-cover"
            style={{
              height: '700px',
              width: 'calc(100% + 150px)',
              maxWidth: 'none',
              marginLeft: '-150px',
              objectPosition: 'center center',
              opacity: 0.8,
            }}
          />
        </div>

        {/* Image 3 — same treatment; crop 100px off left to hide white edge */}
        <div className="backdrop-crossfade relative">
          <img
            src="/assets/FW_Schwrz_89.jpg"
            alt=""
            className="w-full object-cover"
            style={{ height: '700px', objectPosition: 'left center', opacity: 0.5 }}
          />
        </div>
      </div>

      {/* Text content — in normal flow so it sets the page height */}
      <section className="relative z-10 pb-28" style={{ paddingTop: '280px' }}>
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="mb-8 font-title text-3xl tracking-wide text-socc-white">
              cEDH Myths &amp; Truths
            </h1>
            <p className="mb-12 text-base leading-relaxed text-socc-bone">
              Competitive Commander carries a lot of misconceptions — some born from
              unfamiliarity, others from bad experiences at poorly-run tables. Here's
              an honest look at what cEDH actually is.
            </p>

            <div className="space-y-10">
              {myths.map((item, i) => (
                <article key={i} className="space-y-3">
                  <h2 className="font-title text-xl tracking-wide text-socc-white">
                    {item.myth}
                  </h2>
                  <p className="text-base leading-relaxed text-socc-bone">
                    {item.truth}
                  </p>
                </article>
              ))}
            </div>
          </div>
      </section>

    </main>
  )
}
