import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <section className="relative">
        <img
          src="/assets/SOCC Banner no art.png"
          alt="Southern Ontario Competitive Commander"
          className="w-full object-cover"
          style={{ height: '842px', objectPosition: 'center bottom' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-socc-dark via-socc-dark/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-socc-dark/80 to-transparent" />
      </section>

      <section className="relative z-10 mx-auto max-w-3xl px-6 pt-20 pb-10" style={{ marginTop: '-440px' }}>
        <h2 className="mb-8 text-3xl font-bold text-zinc-100">Who We Are</h2>
        <div className="space-y-5 text-base leading-relaxed text-zinc-400">
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
      </section>
    </main>
  )
}
