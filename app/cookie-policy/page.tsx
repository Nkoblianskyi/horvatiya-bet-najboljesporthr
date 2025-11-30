import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-mag-cream">
      <SzhMainHeader />

      <div className="container mx-auto px-4 py-12 pt-24 max-w-3xl">
        <article className="bg-mag-white p-6 md:p-10">
          <header className="text-center mb-10 pb-6 border-b border-mag-border">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-3">Politika Kolacica</h1>
            <p className="text-mag-grey text-sm">
              Azurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-xs text-mag-grey mt-1">najboljesporthr.com</p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">Definicija Kolacica</h2>
              <p className="text-mag-grey text-sm leading-relaxed">
                Kolacici su male tekstualne datoteke koje web preglednici pohranjuju na korisnickom uredaju. Omogucavaju
                strancama prepoznavanje korisnika i pamcenje postavki izmedu posjeta, cime se poboljsava funkcionlanost
                i korisnicko iskustvo.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">Primjena na Nasoj Stranici</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-3">
                najboljesporthr.com koristi kolacice u sljedece svrhe:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-mag-grey text-sm ml-2">
                <li>Osiguravanje temeljnih funkcionalnosti navigacije</li>
                <li>Pohrana korisnickih preferencija i postavki</li>
                <li>Prikupljanje anonimiziranih statistickih podataka</li>
                <li>Analiza obrazaca koristenja za unaprjedenje sadrzaja</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-4">Kategorije Kolacica</h2>

              <div className="space-y-4">
                <div className="border-l-2 border-mag-green pl-4 py-2 bg-mag-surface">
                  <h3 className="font-bold text-mag-black mb-2">Neophodni Kolacici</h3>
                  <p className="text-mag-grey text-sm leading-relaxed">
                    Esencijalni za funkcioniranje stranice. Omogucavaju osnovne radnje poput navigacije i pristupa
                    zasticenim podrucjima. Bez ovih kolacica stranica ne moze ispravno funkcionirati.
                  </p>
                </div>

                <div className="border-l-2 border-mag-terracotta pl-4 py-2 bg-mag-surface">
                  <h3 className="font-bold text-mag-black mb-2">Analiticki Kolacici</h3>
                  <p className="text-mag-grey text-sm leading-relaxed">
                    Sluze za mjerenje posjeta i izvora prometa. Prikupljeni podaci su agregirani i anonimizirani, te se
                    koriste iskljucivo za poboljsanje performansi stranice.
                  </p>
                </div>

                <div className="border-l-2 border-mag-steel pl-4 py-2 bg-mag-surface">
                  <h3 className="font-bold text-mag-black mb-2">Funkcionalni Kolacici</h3>
                  <p className="text-mag-grey text-sm leading-relaxed">
                    Omogucavaju napredne funkcionalnosti i personalizaciju. Mogu biti postavljeni od nas ili vanjskih
                    pruzatelja usluga integriranih na stranici.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">Upravljanje Postavkama</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-2">
                Preglednici standardno prihvacaju kolacice, no korisnici mogu prilagoditi postavke privatnosti prema
                vlastitim preferencijama. Onemogucavanje kolacica moze ograniciti funkcionalnost nekih dijelova
                stranice.
              </p>
              <p className="text-mag-grey text-sm leading-relaxed">
                Upute za upravljanje kolacicima dostupne su u dokumentaciji vaseg web preglednika.
              </p>
            </section>

            <section className="bg-mag-surface p-5 border-l-2 border-mag-green">
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">Kontakt</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-2">Za upite vezane uz politiku kolacica:</p>
              <p className="text-mag-black text-sm font-medium">info@najboljesporthr.com</p>
            </section>
          </div>
        </article>
      </div>

      <SzhMainFooter />
    </div>
  )
}
