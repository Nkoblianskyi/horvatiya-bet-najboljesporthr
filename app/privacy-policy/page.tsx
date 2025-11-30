import { SzhMainHeader } from "@/components/szh-main-header"
import { SzhMainFooter } from "@/components/szh-main-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-mag-cream">
      <SzhMainHeader />

      <div className="container mx-auto px-4 py-12 pt-24 max-w-3xl">
        <article className="bg-mag-white p-6 md:p-10">
          <header className="text-center mb-10 pb-6 border-b border-mag-border">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-mag-black mb-3">Politika Privatnosti</h1>
            <p className="text-mag-grey text-sm">
              Azurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-xs text-mag-grey mt-1">najboljesporthr.com</p>
          </header>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">1. Uvodni Podaci</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-2">
                Ova politika privatnosti opisuje nacin na koji najboljesporthr.com prikuplja, obradduje i stiti osobne
                podatke korisnika. Pridrzavamo se Opce uredbe o zastiti podataka (GDPR) i relevantnog hrvatskog
                zakonodavstva.
              </p>
              <p className="text-mag-grey text-sm leading-relaxed">
                Koristenjem stranice prihvacate praksu opisanu u ovom dokumentu.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">2. Voditelj Obrade</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-2">
                Voditelj obrade osobnih podataka je najboljesporthr.com.
              </p>
              <p className="text-mag-black text-sm font-medium">Kontakt: privatnost@najboljesporthr.com</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">3. Vrste Prikupljenih Podataka</h2>

              <div className="space-y-4">
                <div className="bg-mag-surface p-4 border-l-2 border-mag-green">
                  <h3 className="font-bold text-mag-black mb-2 text-sm">Dobrovoljno Dostavljeni Podaci</h3>
                  <ul className="list-disc list-inside space-y-1 text-mag-grey text-sm ml-2">
                    <li>Kontakt podaci prilikom komunikacije</li>
                    <li>Sadrzaj poruka i upita</li>
                    <li>Informacije koje korisnik odluci podijeliti</li>
                  </ul>
                </div>

                <div className="bg-mag-surface p-4 border-l-2 border-mag-steel">
                  <h3 className="font-bold text-mag-black mb-2 text-sm">Automatski Prikupljeni Podaci</h3>
                  <ul className="list-disc list-inside space-y-1 text-mag-grey text-sm ml-2">
                    <li>IP adresa i opca lokacija</li>
                    <li>Tehnicke karakteristike uredaja i preglednika</li>
                    <li>Podaci o posjecenim stranicama i vremenu pristupa</li>
                    <li>Izvorisna stranica (referrer)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">4. Svrha Obrade</h2>
              <ul className="space-y-2 text-mag-grey text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-mag-black">Pruzanje usluga:</strong> Omogucavanje pristupa sadrzaju i
                    informacijama
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-mag-black">Komunikacija:</strong> Odgovaranje na korisnicke upite
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-mag-black">Analitika:</strong> Poboljsanje sadrzaja i funkcionalnosti
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-mag-green mt-2 flex-shrink-0"></span>
                  <span>
                    <strong className="text-mag-black">Sigurnost:</strong> Zastita od zlouporabe
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-mag-surface p-5 border-l-2 border-mag-terracotta">
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">5. Pravna Osnova</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-2">Obrada podataka temelji se na:</p>
              <ul className="list-disc list-inside space-y-1 text-mag-grey text-sm ml-2">
                <li>Izricitom pristanku korisnika</li>
                <li>Legitimnom interesu za poboljsanje usluga</li>
                <li>Zakonskim obvezama kada je primjenjivo</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">6. Dijeljenje Podataka</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-2">
                Osobni podaci ne prodaju se trecim stranama. Dijeljenje je ograniceno na:
              </p>
              <ul className="list-disc list-inside space-y-1 text-mag-grey text-sm ml-2">
                <li>Pruzatelje tehnickih usluga (hosting, analitika)</li>
                <li>Partnerske stranice pri kliku na vanjske linkove</li>
                <li>Nadlezna tijela kada je zakonski obvezno</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">7. Sigurnosne Mjere</h2>
              <ul className="list-disc list-inside space-y-1 text-mag-grey text-sm ml-2">
                <li>SSL/TLS enkripcija komunikacije</li>
                <li>Redovite sigurnosne provjere</li>
                <li>Ogranicen pristup podacima</li>
                <li>Sigurnosne kopije podataka</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">8. Razdoblje Cuvanja</h2>
              <ul className="list-disc list-inside space-y-1 text-mag-grey text-sm ml-2">
                <li>Kontakt podaci: do 2 godine od zadnje komunikacije</li>
                <li>Analiticki podaci: do 26 mjeseci</li>
                <li>Podaci kolacica: prema postavkama preglednika</li>
              </ul>
            </section>

            <section className="bg-mag-surface p-5 border-l-2 border-mag-green">
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">9. Prava Korisnika</h2>
              <p className="text-mag-grey text-sm leading-relaxed mb-2">Prema GDPR-u imate pravo na:</p>
              <ul className="list-disc list-inside space-y-1 text-mag-grey text-sm ml-2">
                <li>Pristup vasim podacima</li>
                <li>Ispravak netocnih podataka</li>
                <li>Brisanje podataka</li>
                <li>Ogranicenje obrade</li>
                <li>Prenosivost podataka</li>
                <li>Prigovor na obradu</li>
              </ul>
              <p className="text-mag-grey text-sm mt-3">
                Za ostvarivanje prava kontaktirajte: privatnost@najboljesporthr.com
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">10. Vanjske Stranice</h2>
              <p className="text-mag-grey text-sm leading-relaxed">
                Stranica sadrzi linkove na vanjske web stranice. Nismo odgovorni za njihove prakse privatnosti.
                Preporucujemo pregled politika privatnosti tih stranica.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">11. Dobna Granica</h2>
              <p className="text-mag-grey text-sm leading-relaxed">
                Sadrzaj stranice namijenjen je iskljucivo punoljetnim osobama. Ne prikupljamo svjesno podatke od osoba
                mladih od 18 godina.
              </p>
            </section>

            <section className="bg-mag-surface p-5 border-l-2 border-mag-steel">
              <h2 className="font-serif text-xl font-bold text-mag-black mb-3">12. Kontakt i Prituzbe</h2>
              <div className="space-y-2 text-sm">
                <p className="text-mag-black">
                  <strong>Email:</strong> privatnost@najboljesporthr.com
                </p>
                <p className="text-mag-black">
                  <strong>Web:</strong> najboljesporthr.com
                </p>
              </div>
              <p className="text-mag-grey text-sm mt-3">
                Prituzbe mozete podnijeti Agenciji za zastitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb.
              </p>
            </section>
          </div>
        </article>
      </div>

      <SzhMainFooter />
    </div>
  )
}
