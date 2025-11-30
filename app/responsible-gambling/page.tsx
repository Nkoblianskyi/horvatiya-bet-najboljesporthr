import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"
import { AlertTriangle, Phone, Clock, Shield, Users, Heart, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-mag-cream">
      <SzhMainHeader />

      {/* Hero Section */}
      <section className="relative bg-mag-white pt-24 md:pt-32 pb-12 md:pb-16 border-b border-mag-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <div className="inline-block px-6 py-2 bg-mag-green text-white font-bold text-xs uppercase tracking-wide mb-6">
              Odgovorno Kladenje
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-mag-black">Sigurna Igra</h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-mag-grey">
              Kladenje treba biti zabava, a ne izvor stresa. Informirajte se o odgovornom pristupu igrama na srecu.
            </p>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 md:py-20 bg-mag-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-4">Znakovi Upozorenja</h2>
            <p className="text-lg text-mag-grey max-w-2xl mx-auto">Prepoznajte simptome problematicnog kladenja</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Kladenje iznosima koje si ne mozete priustiti izgubiti",
              "Pokusaji povrata gubitaka kroz daljnje kladenje",
              "Zanemarivanje obaveza zbog kladenja",
              "Laganje obitelji o ucestalosti ili iznosima kladenja",
              "Posudivanje novca za kladenje",
              "Osjecaj nervoze ili razdrazljivosti kada ne kladite",
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3 bg-mag-surface p-5 border border-mag-border">
                <AlertTriangle className="w-5 h-5 text-mag-terracotta flex-shrink-0 mt-0.5" />
                <p className="text-mag-grey text-sm leading-relaxed">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 md:py-20 bg-mag-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-4">
              Savjeti za Sigurno Kladenje
            </h2>
            <p className="text-lg text-mag-grey max-w-2xl mx-auto">Prakticni koraci za odrzavanje kontrole</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: "Postavite Vremenske Limite",
                description: "Odredite unaprijed koliko vremena cete provesti u kladenju i drzite se tog ogranicenja.",
              },
              {
                icon: Shield,
                title: "Definirajte Budzet",
                description: "Nikada ne kladite vise nego sto ste spremni izgubiti. Tretirajte to kao trosak zabave.",
              },
              {
                icon: Users,
                title: "Ne Kladite se Sami",
                description: "Razgovarajte s obitelji ili prijateljima o svojim navikama kladenja.",
              },
              {
                icon: Heart,
                title: "Brinite o Sebi",
                description: "Izbjegavajte kladenje kada ste pod stresom, depresivni ili pod utjecajem alkohola.",
              },
            ].map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="bg-mag-white p-6 border border-mag-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-mag-green flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-mag-black mb-2">{tip.title}</h3>
                      <p className="text-mag-grey text-sm leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Self-Exclusion Section */}
      <section className="py-16 md:py-20 bg-mag-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-4">Samoiskljucenje</h2>
            <p className="text-lg text-mag-grey max-w-2xl mx-auto">Alati za kontrolu pristupa kladionicama</p>
          </div>

          <div className="bg-mag-surface p-6 md:p-8 border border-mag-border">
            <div className="space-y-4 text-mag-grey text-sm leading-relaxed">
              <p>
                Vecina licenciranih kladionica nudi opcije samoiskljucenja koje vam omogucuju privremeno ili trajno
                blokiranje pristupa racunu. Ovo je koristan alat ako osjecate da gubite kontrolu.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {[
                  "Privremena pauza (24 sata do 6 mjeseci)",
                  "Trajno samoiskljucenje",
                  "Limiti depozita",
                  "Limiti gubitaka",
                  "Limiti sesije",
                  "Provjera realnosti (podsjetnici)",
                ].map((option, index) => (
                  <div key={index} className="flex items-center gap-2 bg-mag-white p-3 border border-mag-border">
                    <CheckCircle2 className="w-4 h-4 text-mag-green flex-shrink-0" />
                    <span className="text-mag-black text-sm">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Resources Section */}
      <section className="py-16 md:py-20 bg-mag-surface">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-4">Resursi za Pomoc</h2>
            <p className="text-lg text-mag-grey max-w-2xl mx-auto">Organizacije koje pruzaju podrsku u Hrvatskoj</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "HUPIS - Kockanje",
                description: "Hrvatska udruga za pomoc igracima na srecu",
                link: "https://www.hupis.hr/klok",
              },
              {
                name: "PBSVI",
                description: "Poliklinika za bolesti ovisnosti - program za ovisnost o kockanju",
                link: "https://www.pbsvi.hr",
              },
              {
                name: "GambleAware",
                description: "Medunarodna organizacija za edukaciju o odgovornom kladenju",
                link: "https://www.gambleaware.org",
              },
            ].map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mag-white p-6 border border-mag-border hover:border-mag-green transition-colors block"
              >
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-mag-green flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-mag-black mb-2">{resource.name}</h3>
                    <p className="text-mag-grey text-sm leading-relaxed">{resource.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-mag-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-mag-green p-8 md:p-10 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">Trebate Pomoc?</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Ako vi ili netko koga poznajete ima problema s kockanjem, ne oklijevajte potraziti strucnu pomoc. Niste
              sami.
            </p>
            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-mag-green font-bold px-8 py-3 hover:bg-mag-surface transition-colors"
            >
              Kontaktirajte HUPIS
            </Link>
          </div>
        </div>
      </section>

      <SzhMainFooter />
    </div>
  )
}
