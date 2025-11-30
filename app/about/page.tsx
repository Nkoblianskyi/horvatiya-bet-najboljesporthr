import { Shield, Users, TrendingUp, CheckCircle2, Target, Eye, Heart } from "lucide-react"
import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-mag-cream">
      <SzhMainHeader />

      {/* Hero Section */}
      <section className="relative bg-mag-white pt-24 md:pt-32 pb-12 md:pb-16 border-b border-mag-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-mag-green text-white font-bold text-xs uppercase tracking-wide mb-6">
              O Nama
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-mag-black">najboljesporthr.com</h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-mag-grey">
              Vas strucni vodic kroz svijet online kladenja u Hrvatskoj
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-mag-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-6">Nasa Misija</h2>
              <div className="space-y-4 text-base text-mag-grey leading-relaxed">
                <p>
                  najboljesporthr.com nastao je iz potrebe za transparentnim i pouzdanim vodicem kroz hrvatski trziste
                  online kladenja. U industriji punoj marketinskih trikova, mi donosimo cinjenice i objektivne analize.
                </p>
                <p>
                  Nas tim strucnjaka detaljno ispituje svaku platformu - od sigurnosti i licenci do korisnickog iskustva
                  i kvalitete podrske. Ne prihvacamo placanja za bolje ocjene, jer nasa jedina obveza je prema vama.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "150+", label: "Analiziranih Kladionica" },
                { number: "7+", label: "Godina Iskustva" },
                { number: "24/7", label: "Pracenje Industrije" },
                { number: "100%", label: "Nezavisnost" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-mag-surface border border-mag-border p-6 text-center hover:border-mag-green transition-colors"
                >
                  <div className="text-3xl font-bold mb-2 text-mag-green">{stat.number}</div>
                  <div className="text-xs uppercase tracking-wide text-mag-grey">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-mag-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-4">Nasi Principi</h2>
            <p className="text-lg text-mag-grey max-w-2xl mx-auto">
              Vrijednosti koje definiraju nas pristup analizi i recenzijama
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Objektivnost",
                description:
                  "Transparentna metodologija ocjenjivanja temeljena na stvarnim testiranjima i faktickim podacima.",
              },
              {
                icon: Shield,
                title: "Sigurnost",
                description: "Detaljno provjeravamo licence, certifikate i sigurnosne protokole prije svake preporuke.",
              },
              {
                icon: Eye,
                title: "Transparentnost",
                description: "Otvoreno komuniciramo nasu metodologiju i partnerstva bez skrivenih agenda.",
              },
              {
                icon: Users,
                title: "Korisnicki Fokus",
                description: "Sve analiziramo iz perspektive igraca - od registracije do isplate sredstava.",
              },
              {
                icon: TrendingUp,
                title: "Aktualnost",
                description: "Kontinuirano pracenje trzista s redovitim azuriranjem recenzija i informacija.",
              },
              {
                icon: Heart,
                title: "Odgovornost",
                description: "Promoviranje sigurnog kladenja i edukacija o odgovornom pristupu igrama na srecu.",
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-mag-white p-6 border border-mag-border hover:border-mag-green transition-colors"
                >
                  <h3 className="font-bold text-lg text-mag-black mb-3">{value.title}</h3>
                  <p className="text-mag-grey leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-20 bg-mag-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-4">Nasa Metodologija</h2>
            <p className="text-lg text-mag-grey max-w-3xl mx-auto">
              Sest kljucnih kriterija za sveobuhvatnu procjenu svake platforme
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Licenciranje i Sigurnost",
                description:
                  "Temeljita provjera valjanosti licenci, SSL enkripcije, politika privatnosti i mjera zastite podataka. Preporucujemo iskljucivo potpuno licencirane i sigurne operatore.",
              },
              {
                title: "Bonusi i Promocije",
                description:
                  "Detaljna analiza uvjeta bonusa, zahtjeva za kladenje, vremenskih ogranicenja i programa vjernosti. Citamo sva pravila kako ne biste morali vi.",
              },
              {
                title: "Korisnicko Iskustvo",
                description:
                  "Testiranje web stranica i mobilnih aplikacija na brzinu, intuitivnost i funkcionalnost. Kvalitetna platforma mora biti jednostavna za sve korisnike.",
              },
              {
                title: "Sportska Ponuda i Kvote",
                description:
                  "Usporedba raspona sportova, broja trzista i konkurentnosti kvota. Evaluacija live betting opcija i specijalnih ponuda.",
              },
              {
                title: "Metode Placanja",
                description:
                  "Analiza brzine transakcija, dostupnih metoda, naknada i limita. Najbolje platforme omogucavaju brze i sigurne transakcije.",
              },
              {
                title: "Korisnicka Podrska",
                description:
                  "Provjera dostupnosti, vremena odgovora i strucnosti tima podrske kroz sve kanale komunikacije.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-mag-white p-6 border border-mag-border hover:border-mag-green transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-mag-green text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-mag-black mb-2">{item.title}</h3>
                    <p className="text-mag-grey leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible Gambling Section */}
      <section className="py-16 md:py-20 bg-mag-surface">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-mag-white p-8 md:p-10 border-2 border-mag-green">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-green mb-6 text-center">
              Odgovorno Kladenje
            </h2>
            <div className="space-y-4 text-base text-mag-grey leading-relaxed">
              <p className="text-center">
                Zalazemo se za odgovorno i sigurno kladenje. Kladenje treba biti zabava, nikada nacin zarade.
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-6">
                {[
                  "Postavljajte limite i pridrzavajte ih se",
                  "Nikada ne pokusavajte vratiti gubitke",
                  "Kladite se samo novcem koji mozete priustiti izgubiti",
                  "Potrazite pomoc ako kladenje postane problem",
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-2 bg-mag-surface p-3">
                    <CheckCircle2 className="w-5 h-5 text-mag-green flex-shrink-0 mt-0.5" />
                    <p className="text-mag-black text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SzhMainFooter />
    </div>
  )
}
